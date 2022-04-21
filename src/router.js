import {createRouter, createWebHistory} from "vue-router";




const routes = [
    {
        path: '/',
        redirect: '/hotelsList'
    },
    {
        path: '/hotelsList',
        component: () => import('./views/HotelList.vue'),
    },
    {path: '/addHotel',
        component: () => import('./views/AddHotel.vue'),},
]

const router = createRouter({
    // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
    history: createWebHistory(),
    routes, // short for `routes: routes`
})


export default router
