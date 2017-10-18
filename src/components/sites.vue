<template>
  <v-app light>
  	<div id="sites">
  		{{ msg }}
   	</div>
  </v-app>
</template>

<script>

  export default {
  	name: 'sites',
  	data () {
  		return {
  			msg: 'Sites'
  		}
  	}

  }
</script>