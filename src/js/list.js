import {getHotels, deleteHotels, increasePoint, decreasePoint} from "@/lib/api";
import router from "@/router";

export default {
    data() {
        return {
            openModal: false,
            name: '',
            nameState: null,
            submittedNames: [],
            showDeleteModal: false,
            successDelete: false,
            hotels: [],
            currentPage: 1,
            perPage: 5,
            showDeleteBtn: 0,
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
    components: {},
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
        getHotels().then(response => {
            if (response.success) {
                this.hotels = response.data
            }
        });
    },

    methods: {
        goAddPage() {
            router.push({path: '/addHotel'})
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
        increasePoints(item) {
            increasePoint(item).then((response) => {
                console.log("eklendi", response)

            })


            getHotels().then(response => {
                if (response.success) {
                    this.hotels = response.data
                }
            });


        },
        decreasePoints(item) {
            decreasePoint(item).then((response) => {
                console.log("çıkaıldı", response)

            })
            getHotels().then(response => {
                if (response.success) {
                    this.hotels = response.data
                }
            });


        },
        deleteHotelModal(item, index) {
            const selectedHotel = {
                name: item.name,
                index: index
            }
            this.showDeleteModal = selectedHotel
            this.openModal = true


        },
        deleteHotel() {


            deleteHotels(this.showDeleteModal.index).then(response => {
                if (response.success) {

                    this.successDelete = response.success
                    getHotels().then(response => {
                        if (response.success) {
                            this.hotels = response.data
                        }
                    });
                    setTimeout(() => {
                        this.successDelete = false
                        this.openModal = false
                    }, 1000)


                }
            });

        }


    }


}
