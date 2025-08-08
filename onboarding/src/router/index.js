import { createRouter, createWebHistory } from 'vue-router'

import Home from './../components/Home.vue'
import Parking from './../components/Parking.vue'
import DataInsight from '@/components/DataInsight.vue'
import ParkingDiscovery from '@/components/ParkingDiscovery.vue'
import ParkingPrediction from '@/components/ParkingPrediction.vue'
import CarOwnerShip from '@/components/CarOwnerShip.vue'
import CBDPopulationTrend from '@/components/CBDPopulationTrend.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/parking',
    name: 'Parking',
    component: Parking,
    // children: [
    //   {
    //     path: '/parking_discovery',
    //     name: 'ParkingDiscovery',
    //     component: ParkingDiscovery,
    //   },
    //   {
    //     path: '/parking_prediction',
    //     name: 'ParkingPrediction',
    //     component: ParkingPrediction,
    //   },
    // ],
  },
  {
    path: '/datainsight',
    name: 'DataInsight',
    component: DataInsight,
  },
  {
    path: '/parking/parking_discovery',
    name: 'ParkingDiscovery',
    component: ParkingDiscovery,
  },
  {
    path: '/parking/parking_prediction',
    name: 'ParkingPrediction',
    component: ParkingPrediction,
  },
  {
    path: '/datainsight/car_owner_ship',
    name: 'CarOwnerShip',
    component: CarOwnerShip,
  },
  {
    path: '/datainsight/cbd_population_trend',
    name: 'CBDPopulationTrend',
    component: CBDPopulationTrend,
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router
