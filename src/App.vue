<template>
  <v-app light>
    <app-header></app-header>
  </v-app>
</template>

<script>

import header from './components/header.vue'

  export default {
  	components: {
  		'app-header': header,
  	}
  }
</script>
