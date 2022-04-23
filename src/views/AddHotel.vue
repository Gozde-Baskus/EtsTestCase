<template>
<div class="d-flex justify-content-sm-center addHotel">
  <div class="d-flex flex-column">
    <div>
      <div class="addHotel--title">Otel Adı</div>
      <b-form-input :disabled="successAdd" class="addHotel--input" @keypress.enter="addHotelBtn()" v-model="text"></b-form-input>

    </div>
    <div v-if="!successAdd" class="d-flex justify-content-end">
      <b-button @click="addHotelBtn()" class="addHotel--defaultBtn" variant="primary"> EKLE </b-button>
    </div>
    <div v-if="successAdd" class="d-flex justify-content-end mt-2 ">
      <b-button @click="close()" variant="success" class="addHotel--successBtn"><span class="material-icons">check</span> EKLENDİ </b-button>
    </div>


  </div>

</div>
</template>

<script src="../../src/js/addHotel.js"></script>

<style  lang="scss" src="../../src/css/addHotel.scss"></style>
