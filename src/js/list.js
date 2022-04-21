import {getHotels} from "@/lib/api";
import router from "@/router";
import HotelCard from "@/components/HotelCard";
import EventBus from "@/lib/event";
export default {
    data() {
        return {
            hotels: [],
            currentPage: 1,
            perPage: 5,
            sortList: [
                {
                    name: 'Default',
                    id: 0
                },
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
            imageNot: require('../assets/hotelImg.png'),

        }
    },
    watch: {},
    components: {HotelCard},
    computed: {
        rows() {
            return this.hotels.length
        },
        pagedHotels() {
            return this.hotels.slice((this.currentPage - 1) * this.perPage, this.currentPage * this.perPage)
        }
    },
    mounted() {
        this.sortFunc();
        this.loadHotels();
        EventBus.$on("reloadHotels", ()=>{
            this.loadHotels();
        })
    },

    methods: {
        goAddPage() {
            router.push({path: '/addHotel'})
        },
        loadHotels() {
            getHotels().then(response => {
                if (response.success) {
                    this.hotels = response.data
                }
            });
        },
        sortFunc() {
            if (this.selectedSortTypeID === 1) {
                this.hotels.sort(function (b, a) {
                    return b.point - a.point
                });
            } else {
                this.hotels.sort(function (a, b) {
                    return b.point - a.point
                });
            }
        },
        sortType(item) {
            console.log(item.id)
            this.selectedSortTypeID = item.id
            this.sortFunc();

        },



    }


}
