<template>
	<div id="subnetsFilter">
		    <v-select
		      label="Select"
		      single-line
		      auto
		      v-bind:items ="items"
		      item-text="name"
		      hide-details>
		    </v-select>
	</div>
</template>

<script>

  export default {
  	name: 'subnetsFilter',
    beforeMount: function() {
      var self = this;
      axios.get("http://ipam-backend.herokuapp.com/api/subnets")
        .then(response => self.items = response.data);
    },


    data () {
      return {
        items: [],
      }
    }
  }
</script>