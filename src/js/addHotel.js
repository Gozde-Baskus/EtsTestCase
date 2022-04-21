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

        addHotelBtn(){

            if(this.text){
                const newHotel={
                    name:this.text,
                    point:Math.floor(Math.random() * 10),
                    id: Math.floor(Math.random() * 100)
                }

                addHotels(newHotel).then((response)=>{

                    console.log("eklendi", response)
                    this.successAdd=response.success
                    setTimeout(() => {
                        this.successAdd=false
                        this.text=''
                        router.push({path: '/hotelsList'})
                    }, 1000)



                })
            }


        }

    }


}
