<template>
  <div class="hotelCard d-flex" @mouseenter="showDeleteBtn=true" @mouseleave="showDeleteBtn=false">
    <div class="hotelCard--deleteButton"><span v-if="showDeleteBtn" class="material-icons"
                                               @click="deleteHotelModal(hotel)">cancel</span></div>
    <div class="hotelCard--imgArea"><img src="../assets/hotelImg.png" style="width: 100%; border-radius: 4px"/></div>
    <div class="hotelCard--textArea d-flex flex-column justify-content-lg-between ">
      <div class="d-flex flex-column">
        <div class="hotelCard--textArea--title">{{ hotel.name }}</div>
        <div class="hotelCard--textArea--score">{{ hotel.point }} Puan</div>

      </div>
      <div class="hotelCard--btnArea d-flex ">
        <b-button class="hotelCard--btnArea-btn" variant="outline-primary" @click="increasePoints(hotel)">PUAN ARTIR</b-button>
        <b-button class="hotelCard--btnArea-btn" variant="outline-primary" @click="decreasePoints(hotel)">PUAN AZALT</b-button>
      </div>
    </div>
  </div>
</template>

<script>
import {decreasePoint, deleteHotels, increasePoint} from "@/lib/api";
import EventBus from "@/lib/event";

export default {
  data() {
    return {
      openModal: false,
      showDeleteModal: false,
      showDeleteBtn: false,
      successDelete: false,
      imageNot: require('../assets/hotelImg.png'),

    }
  },
  props: ['hotel', 'index'],
  methods: {
    increasePoints(hotel) {
      increasePoint(hotel).then((response) => {
        console.log(response)
        EventBus.$emit("reloadHotels")

      })
    },
    decreasePoints(item) {
      decreasePoint(item).then((response) => {
        console.log(response)
        EventBus.$emit("reloadHotels")

      })


    },
    deleteHotelModal(item) {
      EventBus.$emit("openDeleteModal", item);
    },

    close() {
      this.successDelete = false
      this.openModal = false
    },
    deleteHotel() {
      deleteHotels(this.showDeleteModal.id).then(response => {
        console.log(response, this.showDeleteModal.id)
        if (response.success) {

          this.successDelete = response.success
          EventBus.$emit("reloadHotels")
        }
      });

    }
  }
}
</script>

<style lang="scss" scoped>
.hotelCard {
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 0px 7px rgba(202, 191, 191, 0.4);
  margin: 6px 0;
  height: 100px;
  width: 282px;
  padding: 6px;
  position: relative;

  .hotelCard--imgArea {
    flex: 0.57;
  }

  .hotelCard--textArea {
    flex: 1;
    padding-left: 11px
  }

  .hotelCard--textArea--score {
    background: #f6f9fd;
    color: #15c6bd;
    font-size: 13px;
    width: 118px;
    border-radius: 3px;
    padding: 2px 4px;
    font-weight: bold;
  }

  .hotelCard--textArea--title {
font-weight: bold;
  }

  .hotelCard--deleteButton {
    position: absolute;
    right: -11.5px;
    top: -19px;

    .material-icons {
      color: #da1e27;
      cursor: pointer;
      font-size: 27px;

    }
  }








}
.hotelCard:hover {
  background: #f6f9fd;
}
.hotelCard--btnArea{

 :last-child {
    margin-left: 9px;
  }

  .hotelCard--btnArea-btn {
    font-size: 9px;
    height: 27px;
    width: 74px;
    padding: 0;
  }
  .hotelCard--btnArea-btn:focus{
    box-shadow: none;
  }
}

</style>
