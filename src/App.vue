<template>
  <v-app light>
    <app-header></app-header>
  </v-app>
</template>

<script>

import header from './header.vue'

  export default {
  	components: {
  		'app-header': header,
  	}
  }
</script>
