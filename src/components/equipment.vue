<template>
  <v-app light>
  	<div id="equipment">
  		{{ msg }}
   	</div>
  </v-app>
</template>

<script>

  export default {
  	name: 'sites',
  	data () {
  		return {
  			msg: 'Equipment'
  		}
  	}

  }
</script>