import sites from './components/sites.vue'
import subnets from './components/subnets.vue'
import equipment from './components/equipment.vue'
import login from './components/login.vue'
import forgotpassword from './components/forgot-password.vue'

export default [

{path: '/', component: sites},
{path: '/subnets', component: subnets},
{path: '/equipment', component: equipment},
{path: '/login', component: login},
{path: '/forgotpassword', component: forgotpassword}

]