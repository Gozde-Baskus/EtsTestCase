<template>
  <div class="hotelCard--deleteModal" v-if="openModal">

    <div class="hotelCard--modal text-xl-start">

      <div class="hotelCard--modal--title">Oteli Sil</div>
      <div class="text-xl-center hotelCard--modal--text"><b>{{ item.name }}</b>'i silmek istediğinizden
        emin misiniz?
      </div>
      <div v-if="!successDelete" class="d-flex justify-content-lg-between hotelCard--modal--btnWrapper">
        <b-button class="hotelCard--modal--btn" variant="primary" @click="deleteHotel()">OTELİ SİL</b-button>
        <b-button class="hotelCard--modal--btn--secondary" variant="outline-primary" @click="openModal=false">VAZGEÇ
        </b-button>

      </div>
      <div v-if="successDelete" class="d-flex justify-content-end mt-2 hotelCard--modal--btnWrapper">
        <b-button class="hotelCard--modal--btn--success" @click="close" variant="success"><span class="material-icons">check</span>
          SİLİNDİ
        </b-button>
      </div>

    </div>
  </div>
</template>
<script>


import EventBus from "@/lib/event";
import {deleteHotels} from "@/lib/api";

export default {
  data() {
    return {
      openModal: false,
      successDelete: false,
      item: {}
    }
  },

  mounted() {
    EventBus.$on("openDeleteModal", (item) => {
      this.item = item;
      this.openModal = true
      this.successDelete = false;
    });
  },

  methods: {

    close() {
      this.openModal = false;
    },

    deleteHotel() {

      deleteHotels(this.item.id).then(response => {

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

.hotelCard--deleteModal {
  position: fixed;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  height: 100%;
  top: 0;
  background-color: rgba(89, 86, 103, 0.6);
  z-index: 9999999;
  left: 0;
  align-items: center;
}

.hotelCard--modal {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  z-index: 9;
  border-radius: 10px;
  background-color: white;
  margin: auto;
  top: 30%;
  text-align: center;
  padding: 10px 25px;
  right: 0;
  left: 0;
  width: 461px;
  height: 300px;
  box-shadow: 2px 2px 5px 0 #acacac;

  .hotelCard--modal--title {
    font-size: 32px;
    font-weight: bold;
  }

  .hotelCard--modal--text {
    font-size: 25px;
    line-height: 30px;
    padding-top: 16px;
  }

  .hotelCard--modal--btnWrapper {
    padding: 18px;

  }

  .hotelCard--modal--btn {
    position: relative;
    border: none;
    width: 180px;
    height: 53px;
    font-weight: bold;
    border-radius: 8px;
    background: rgb(73, 75, 254);
    background: linear-gradient(90deg, rgba(73, 75, 254, 1) 0%, rgba(6, 106, 253, 1) 100%);

  }

  .hotelCard--modal--btn:focus, .hotelCard--modal--btn--secondary, .hotelCard--modal--btn--success {
    box-shadow: none;
  }

  .hotelCard--modal--btn--secondary, .hotelCard--modal--btn--secondary:hover {
    position: relative;
    width: 180px;
    font-weight: bold;
    height: 53px;
    border-radius: 8px;
    background-color: white;
    color: #0e68fd;


  }

  .hotelCard--modal--btn--success {
    position: relative;
    border: none;
    width: 180px;
    height: 53px;
    font-weight: bold;
    border-radius: 8px;
    background: #51c708;

    .material-icons {
      position: absolute;
      left: 16px;
      top: 4px;
      font-size: 34px;
    }
  }


}

</style>
