import {getHotels} from "@/lib/api";
import router from "@/router";
import HotelCard from "@/components/HotelCard";
import EventBus from "@/lib/event";
import SortDropdown from "@/components/SortDropdown";
import HotelDeleteModal from "@/components/HotelDeleteModal";

export default {
    data() {
        return {
            hotels: [],
            currentPage: 1,
            perPage: 5,
            sortTypeID: 0,
            imageNot: require('../assets/hotelImg.png'),

        }
    },
    watch: {},
    components: {HotelCard, SortDropdown, HotelDeleteModal},
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
        EventBus.$on("reloadHotels", () => {
            this.loadHotels();
        })
        EventBus.$on("sortHotels", (typeID) => {
            this.sortTypeID = typeID
            this.sortFunc();
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
                    this.sortFunc();
                }
            });
        },
        sortFunc() {

            const {sortTypeID} = this;

            this.hotels.sort(function (a, b) {
                return (b.updatedAt || b.createdAt) - (a.updatedAt || a.createdAt)
            });

            switch (sortTypeID) {
                case 0:
                    this.hotels.sort(function (a, b) {
                        return b.createdAt - a.createdAt
                    });
                    break;
                case 1:
                    this.hotels.sort(function (a, b) {
                        return a.point - b.point
                    });
                    break;

                case 2:
                    this.hotels.sort(function (a, b) {
                        return b.point - a.point
                    });
                    break;

            }
        },


    }


}
