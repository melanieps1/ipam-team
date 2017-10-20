<template>

	<div id="siteCard">
		<v-container  class="pa-0 fluid" v-bind="{ [`grid-list-md`]: true }">
			<v-layout row wrap class="ma-4">
				<v-flex
					class="md-3 pa-2"
					v-for="item in items"
					v-bind:key="item.name">
					<v-card
						class="siteCard pa-0"
						height="150px">
			      <v-card-title class="primary-title ma-0 pa-4">
			      	<h3 class="ma-0">{{ item.name }}</h3>
			      </v-card-title>
			      <div>
              <v-btn flat class="viewSubnets mb-0 mr-2" color="grey darken-1">
              	<v-icon class="mr-2 viewSubnets">visibility</v-icon>View Subnets
              </v-btn>
            </div>
			    </v-card>
		  	</v-flex>
	  	</v-layout>
		</v-container>
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
	min-width: 300px;
	overflow: scroll;
}

@media only screen and (max-width: 900px) {
    [class*="siteCard"] {
    	width: 100%;
    }
}

h3 {
	display: inline-block;
  font-size: 20px;
  line-height: 27px;
  margin: 0 auto;
}

.viewSubnets {
	float: right;
}
	
</style>