<template>

	<div id="siteCard">
		<v-layout row wrap>
			<v-flex xs3 sm3>
				<v-card class="siteCard ml-4 mt-4 pa-0" height="142px" v-for="item in items">
		      <v-card-title class="primary-title ma-0 pa-4"><h3 class="ma-0" v-bind:items="items">{{ item.name }}</h3>
		      </v-card-title>
		    </v-card>
	  	</v-flex>
  </v-layout>
	</div>
	
</template>


<script>

export default {
	name: 'siteCard',

	beforeMount() {
      var self = this;
      axios.get("http://ipam-backend.herokuapp.com/api/sites")
        .then(response => self.items = response.data);
    },

    data () {
      return {
	    	items: [],
      }
    }   
}
	
</script>


<style>

.siteCard {
	min-width: 250px;
	overflow: scroll;
	position: relative;
}

h3 {
	display: inline-block;
  font-size: 20px;
  line-height: 27px;
  margin: 0 auto;
}
	
</style>