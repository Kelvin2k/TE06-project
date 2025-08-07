import { createRouter , createWebHistory} from 'vue-router'

import Home from "./../components/Home.vue";
import Parking from "./../components/Parking.vue";
import DataInsight from '@/components/DataInsight.vue';

const routes = [
    {
        path: "/",
        name: "Home",
        component: Home,
    },
    {
        path: "/parking",
        name: "Parking",
        component: Parking
    },
    {
        path: "/datainsight",
        name: "DataInsight",
        component: DataInsight
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router;
