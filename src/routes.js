import sites from './components/sites.vue'
import subnets from './components/subnets.vue'
import equipment from './components/equipment.vue'
import login from './components/login.vue'
import forgotpassword from './components/forgot-password.vue'
import addsite from './components/add-site.vue'
import addsubnet from './components/add-subnet.vue'
import addequipment from './components/add-equipment.vue'

export default [

{path: '/', component: sites},
{path: '/subnets', component: subnets},
{path: '/equipment', component: equipment},
{path: '/login', component: login},
{path: '/forgotpassword', component: forgotpassword},
{path: '/add-site', component: addsite},
{path: '/add-subnet', component: addsubnet},
{path: '/add-equipment', component: addequipment}

]