<template>

	<div id="formCard">
		<v-card class="formCard">
			<v-subheader center>
				<i class="material-icons goBack">arrow_back</i>
				<span class="goBack">Back</span>
				<h5 text-xs-center>Add New Subnet</h5>
				<i class="material-icons goBackHidden">arrow_back</i>
				<span class="goBackHidden">Back</span>
			</v-subheader>
			<v-container grid-list-xs>
				<v-layout row wrap>
					<v-text-field box label="Subnet Name*"></v-text-field>	
				</v-layout>
				<v-layout row wrap>
					<v-text-field box label="Site*"></v-text-field>
				</v-layout>
				<v-layout row wrap>
					<v-text-field box label="Subnet IP Address*" placeholder="000.000.000.000"></v-text-field>
				</v-layout>
				<v-layout row wrap>
					<v-text-field box label="Subnet Mask Bits*" placeholder="0-30"></v-text-field>
				</v-layout>
				<v-layout row wrap>
					<v-text-field box label="VLAN Number"></v-text-field>
				</v-layout>
				<v-layout row wrap>
					<v-text-field box label="Lease Time (seconds)"></v-text-field>
				</v-layout>
				<v-layout row wrap>
					<v-text-field textarea label="Notes"></v-text-field>
				</v-layout>
				<v-flex right md-3>
					<v-btn outline id="cancelSiteChanges">Cancel</v-btn>
					<v-btn id="saveSite">Save</v-btn>
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
	text-align: left;
}

.goBackHidden {
	color: #74818A;
	text-align: right;
	visibility: hidden;
}

#saveSite {
	background-color: #C5C5C5;
	margin-bottom: 24px;
}

#cancelSiteChanges {
	color: #74818A;
	border: 1px solid #74818A;
	margin-bottom: 24px;
}

div.formCard.card {
	width: 90%;
	margin: 24px auto;
	padding-bottom: 60px;
}

div.formCard {
	padding: 60px;
}

div.container.grid-list-md {
	width: 100%;
	margin: 0 auto;
}

h5 {
	font-weight: bold;
	margin: 0 auto;
	position: relative;
	text-align: center;
}


.formHeader {
	margin: 0 auto;
	padding-top: 24px;
}


</style>