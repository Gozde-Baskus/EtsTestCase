<template>
  <div class="hotelsList--dropdown">
  <span class="material-icons hotelsList--dropdown--icon">import_export</span>
    <b-dropdown variant="outline-secondary" class="hotelsList--dropdownBtn" id="dropdown-offset" offset="0"
                text="Sıralama">
      <b-dropdown-item @click="sortType(item)" v-for="(item, index) in sortList" :key="index">
        <span :class="{'selectedTitle': item.id=== this.selectedSortTypeID}">{{ item.name }}</span>
      </b-dropdown-item>


    </b-dropdown>
  </div>
</template>

<script>


import EventBus from "@/lib/event";

export default {
  data() {
    return {
      sortList: [
        {
          name: 'Puan (Artan)',
          id: 1
        },
        {
          name: 'Puan (Azalan)',
          id: 2
        },
      ],
      selectedSortTypeID: 0,

    }
  },
  props: [],
  methods: {

    sortType(item) {
      console.log(item.id)
      if (item.id !== this.selectedSortTypeID) {
        this.selectedSortTypeID = item.id
      } else {
        this.selectedSortTypeID = 0
      }

      EventBus.$emit("sortHotels", this.selectedSortTypeID)

    },
  }
}
</script>

<style lang="scss">
.dropdown-menu.show {
  width: 100%;
}

.btn-group > .btn, .btn-group-vertical > .btn {
  position: relative;
  flex: 1 1 auto;
  display: flex;
  justify-content: space-between;
  padding-left: 40px;
  padding-top: 8px;
  letter-spacing: 0.7px;
  border: none;
  box-shadow: 1px 1px 4px #b5b5b5;
}
.btn-group > .btn:hover {
  background-color: white;
  color: #6b6b6b;
  box-shadow: 1px 1px 4px #989898;

}
.btn-group > .btn:active{
 border: none;

}
.dropdown-toggle::after {
  margin-top: 10px;
  margin-right: 5px;
}

.hotelsList--dropdown {
  margin-top: 20px;
  margin-bottom: 13px;
  position: relative;
.hotelsList--dropdown--icon{
  position: absolute;
  top: 5px;
  left: 10px;
  color: grey;
  z-index: 99;
}
  .hotelsList--dropdownBtn {
    width: 210px;
    height: 43px;
    .dropdown-toggle:active,
    .dropdown-toggle.show {
      background: inherit;
      color: inherit;
      &:focus {
        box-shadow: 1px 1px 4px #989898;
      }
    }

  }

  .selectedTitle {
    font-weight: bold;
  }

}

</style>
