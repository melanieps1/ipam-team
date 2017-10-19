<template>
  <v-app light>
  	<div id="sites">
  		<siteCard></siteCard>
   	</div>
  </v-app>
</template>

<script>

  import siteCard from './sitecard.vue'

  export default {
  	name: 'sites',

    components: {
      siteCard
    }
  	
  }
</script>