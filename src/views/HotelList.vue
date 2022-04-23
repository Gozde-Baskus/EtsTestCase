<template>

  <div class="d-flex justify-content-center ">
    <div class="d-flex flex-column text-xl-start hotelsList justify-content-lg-between">
      <div class="d-flex mt-2">
        <div class="me-2">
          <b-button class="hotelsList--addBtn" variant="outline-primary" @click="goAddPage()"><span
              class="material-icons">add</span></b-button>
        </div>
        <div class="hotelsList--title">OTEL EKLE</div>
      </div>
      <div v-if="this.hotels.length!==0">
        <SortDropdown/>
      </div>
      <HotelCard :hotel="hotel" :index="index"
                 v-for="(hotel, index) in pagedHotels" :key="index"/>
      <div v-if="this.hotels.length > perPage" class="d-flex justify-content-center overflow-auto mt-2 ">
        <b-pagination class="hotelsList--pagination"
                      v-model="currentPage"
                      :total-rows="this.hotels.length"
                      :per-page="perPage"
        ></b-pagination>

      </div>

      <HotelDeleteModal />
    </div>


  </div>

</template>

<script src="../../src/js/list.js"></script>

<style lang="scss" src="../../src/css/list.scss"></style>
