<template>
<div class="d-flex justify-content-sm-center addPageWrapper">
  <div class="d-flex flex-column">
    <div>
      <div class="text-xl-start">Otel Adı</div>
      <b-form-input @keypress.enter="addHotelBtn()" v-model="text"></b-form-input>

    </div>
    <div v-if="!successAdd" class="d-flex justify-content-end mt-2">
      <b-button @click="addHotelBtn()"  variant="primary"> EKLE </b-button>
    </div>
    <div v-if="successAdd" class="d-flex justify-content-end mt-2 successBtn">
      <b-button  variant="success"><span class="material-icons">check</span> EKLENDİ </b-button>
    </div>


  </div>

</div>
</template>

<script src="../../src/js/addHotel.js"></script>

<style  lang="scss" src="../../src/css/addHotel.scss"></style>
