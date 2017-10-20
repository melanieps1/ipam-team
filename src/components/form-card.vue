<template>

	<div id="formCard">
		<v-card class="formCard" flat>
			<v-subheader>
				<i left class="material-icons goBack">arrow_back</i>
				<span class="goBack">Back</span>
				<h5 center>Add New Site</h5>
			</v-subheader>
			<v-container grid-list-md>
				<v-layout row wrap>
					<v-text-field box label="Site Name"></v-text-field>	
				</v-layout>
				<v-layout row wrap>
					<v-text-field box label="Site Abbreviation"></v-text-field>
				</v-layout>
				<v-layout row wrap>
					<v-text-field textarea label="Street Address"></v-text-field>
				</v-layout>
				<v-layout row wrap>
					<v-text-field box textarea label="Site Contacts"></v-text-field>
				</v-layout>
				<v-layout row wrap>
					<v-text-field box textarea label="Notes"></v-text-field>
				</v-layout>
				<v-flex right md-3>
					<v-btn outline>Cancel</v-btn>
					<v-btn>Save</v-btn>
				</v-flex>
			</v-container>
		</v-card>
			
	</div>
	
</template>

<style scoped>

li.subheader {
	padding-top: 24px !important;
}

.goBack {
	color: #74818A;
}

div.formCard.card {
	width: 90%;
	margin: 24px auto;
	padding-bottom: 40px;
}

div.container.grid-list-md {
	width: 100%;
	margin: 0 auto;
}

h5 {
	text-align: center;
	font-weight: bold;
	margin: 0 auto;
}


.formHeader {
	margin: 0 auto;
	padding-top: 24px;
}


</style>