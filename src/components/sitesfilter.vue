<template>	
  	<div id="sitesfilter">

            <v-select
              label="Select"
              single-line
              auto
              props="filter"
              v-bind:items="items"
              item-text="name"
              hide-details>
            </v-select>
 
      
  </div>
</template>


<script>
	
	export default {
  	name: 'sitesfilter',

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