import {addHotels} from "@/lib/api";
 import router from "@/router";

export default {
    data() {
     return {
         text:'',
         successAdd:false
     }
    },

    components: {

    },

    mounted(){},

    methods:{

        close() {
            this.successAdd=false
            this.text=''
            router.push({path: '/hotelsList'});
        },
        addHotelBtn(){

            if(this.text){
                const newHotel={
                    name:this.text,
                    id: Date.now().toString(16)
                }


                addHotels(newHotel).then((response)=>{
                    console.log("eklendi", response)
                    this.successAdd=response.success
                })
            }


        }

    }


}
