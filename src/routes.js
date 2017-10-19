import sites from './components/sites.vue'
import subnets from './components/subnets.vue'
import equipment from './components/equipment.vue'
import subnetsFilter from './components/subnetsFilter.vue'

export default [

{path: '/sites', component: sites},
{path: '/components', component: subnets},
{path: '/equipment', component: equipment},
{path: '/subnetsFilter', component: subnetsFilter}

]