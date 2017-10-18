import sites from './components/sites.vue'
import subnets from './components/subnets.vue'
import equipment from './components/equipment.vue'

export default [

{path: '/', component: sites},
{path: '/components', component: subnets},
{path: '/equipment', component: equipment}

]