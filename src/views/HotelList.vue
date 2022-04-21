<template>

  <div class="d-flex justify-content-center ">



    <div class="d-flex flex-column text-xl-start listWrapper justify-content-lg-between">
      <div class="d-flex mt-2">
        <div class="me-2">
          <b-button variant="outline-primary" @click="goAddPage()"><span class="material-icons">add</span></b-button>
        </div>
        <div class="listTitle">OTEL EKLE</div>
      </div>
      <div class="mt-2" v-if="this.hotels.length!==0">
        <b-dropdown id="dropdown-offset" offset="25" text="Sıralama">
          <b-dropdown-item @click="sortType(item)" v-for="(item, index) in sortList" :key="index">{{
              item.name
            }}
          </b-dropdown-item>


        </b-dropdown>
      </div>
      <HotelCard @mouseenter="showDeleteBtn=hotel" @mouseleave="showDeleteBtn=false" :hotel="hotel" :index="index"
                 v-for="(hotel, index) in pagedHotels" :key="index"/>
      <div v-if="this.hotels.length >5" class="d-flex justify-content-center overflow-auto mt-2">
        <b-pagination
            v-model="currentPage"
            :total-rows="this.hotels.length"
            :per-page="perPage"
        ></b-pagination>

      </div>
    </div>


  </div>

</template>

<script src="../../src/js/list.js"></script>

<style lang="scss" src="../../src/css/list.scss"></style>
