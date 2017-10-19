<template>

	<div id="siteCard">
		<v-layout>
			<v-flex xs3 sm3 ml-4 mt-4>
				<v-card class="siteCard" height="142px">
		      <v-card-title primary-title>
		        <div>
		          <h3 class="headline mb-0">This is a very, very long site name on a card that needs to truncate after two lines</h3>
		        </div>
		      </v-card-title>
		    </v-card>
	  	</v-flex>
  </v-layout>
	</div>
	
</template>


<script>

export default {
	name: 'siteCard'
}
	
</script>


<style>

h3 {
	font-family: 'Roboto', sans-serif;
	font-size: 20px;
	font-weight: normal;
}
	
</style>