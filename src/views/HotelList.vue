<template>

  <div class="d-flex justify-content-center ">
    <div class="modalWrapper" v-if="openModal">

      <div class="hotelDeleteModal text-xl-start" >

        <div><h3>Oteli Sil</h3></div>
        <div class="text-xl-center " style="font-size: 18px"><b>{{showDeleteModal.name}}</b>'i silmek istediğinizden emin misiniz?</div>
        <div v-if="!successDelete" class="d-flex justify-content-lg-between">
          <b-button variant="primary" @click="deleteHotel()">OTELİ SİL</b-button>
          <b-button variant="outline-primary" @click="openModal=false">VAZGEÇ</b-button>

        </div>
        <div v-if="successDelete" class="d-flex justify-content-end mt-2 successBtn">
          <b-button  variant="success"><span class="material-icons">check</span> SİLİNDİ </b-button>
        </div>

      </div>
    </div>







    <div class="d-flex flex-column text-xl-start listWrapper justify-content-lg-between">
      <div class="d-flex mt-2">
        <div class="me-2">
          <b-button variant="outline-primary" @click="goAddPage()"><span class="material-icons">add</span></b-button>
        </div>
        <div class="listTitle">OTEL EKLE</div>
      </div>
      <div class="mt-2">
        <b-dropdown id="dropdown-offset" offset="25" text="Sıralama">
          <b-dropdown-item @click="sortType(item)" v-for="(item, index) in sortList" :key="index">{{
              item.name
            }}
          </b-dropdown-item>


        </b-dropdown>
      </div>
      <div class="mt-2">
        <div @mouseenter="showDeleteBtn=hotel" @mouseleave="showDeleteBtn=false" class="hotelCard d-flex"
             v-for="(hotel, index) in pagedHotels" v-bind:key="index">
          <div v-if="showDeleteBtn===hotel" class="deleteButton"><span
                                                                       class="material-icons" @click="deleteHotelModal(hotel,index)">cancel</span></div>
          <div style="flex:0.52; "><img src="../assets/hotelImg.png" style="width: 100%; border-radius: 4px"/></div>
          <div style="flex: 1; padding-left:15px " class="d-flex flex-column justify-content-lg-between ">
            <div class="d-flex flex-column">
              <div>{{ hotel.name }}</div>
              <div class="hotelsPointArea">{{ hotel.point }} Puan</div>

            </div>
            <div class="hotelsPointBtnWrapper d-flex justify-content-lg-between">
              <b-button variant="outline-primary" @click="increasePoints(hotel)">Puan Artır</b-button>
              <b-button variant="outline-primary" @click="decreasePoints(hotel)">Puan Azalt</b-button>
            </div>

          </div>


        </div>

      </div>
      <div v-if="this.hotels.length!==0" class="d-flex justify-content-center overflow-auto mt-2">
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
