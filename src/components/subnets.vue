<template>
  <v-app light>
  	<div id="subnets">
  		{{ msg }}
   	</div>
  </v-app>
</template>

<script>

  export default {
  	name: 'subnets',
  	data () {
  		return {
  			msg: 'Subnets'
  		}
  	}

  }
</script>