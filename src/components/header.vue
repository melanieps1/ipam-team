<template>
<div id="app-header">

  <v-toolbar id="blue-navbar">
    	<img id="ipam-logo-white" src="../assets/ipamlogowhite.png">
    	<v-spacer></v-spacer>
    	<span id="user">
    		<span id="loggedInAs">Logged in as <span class="username">{{ user }}</span></span>
    		<button id="logout" class="userOptions">Manage Users</button>
    		<button id="manageUsers" class="userOptions">Log Out</button>
   	 	</span>
 		<v-menu offset-y bottom left>
	 		<v-btn icon slot="activator" id="responsiveHeaderMenu" dark>
	 			<v-icon>more_vert</v-icon>
	 		</v-btn>
	 		<v-list>
	 			<v-list-tile>
	 				<v-list-tile-title>Manage Users</v-list-tile-title>
	 			</v-list-tile>
	 			<v-list-tile>
	 				<v-list-tile-title>Logout</v-list-tile-title>
	 			</v-list-tile>
	 			<v-list-tile>
	 				<v-list-tile-title></v-list-tile-title>
	 			</v-list-tile>
	 			<v-list-tile>
	 				<v-list-tile-title>Logged in as:</v-list-tile-title>
	 			</v-list-tile>
	 			<v-list-tile>
	 				<v-list-tile-title class="username">{{ user }}</v-list-tile-title>
	 			</v-list-tile>
	 		</v-list>
	 	</v-menu>
   </v-toolbar>
   <v-tabs class="elevation-2" v-model="active">
        <v-tabs-bar id="white-navbar" class="white">
          <v-tabs-item
            v-for="tab in tabs"
            :key = "tab"
            :href="'#' + tab"
          >
          <router-link v-bind:to="tab.path">
            {{ tab.name }}
          </router-link>
      	  </v-tabs-item>
          <v-tabs-slider color="blue"></v-tabs-slider>
        </v-tabs-bar>
  	</v-tabs>
</div>
</template>


<script>
  export default {
  	name: 'app-navbar',
  	data () {
  		return {
  			user: "Melanie Stoeckle",
  			tabs: [
  				{
  					name: 'sites',
  					path: '/'

  				},
  				{
  					name: 'subnets',
  					path: '/subnets'
  				},
  				{
  					name: 'equipment',
  					path: '/equipment'
  				}
  			],
  			active: null
  		}
  	}
  }
</script>

<style>

#blue-navbar {
	background-color: #3F86BA;
	height: 83px;
}

#ipam-logo-white {
	margin-top: 24px;
	margin-left: 40px;
}

#white-navbar {
	height: 55px;
	width: 100%;
	font-weight: bold;
	padding-left: 20px;
}

li.tabs__slider.blue {
	height: 4px;
}

a, a:visited {
	text-decoration: none;
	color: #757575;
}

#user {
	color: white;
	margin-right: 39.5px;
	margin-top: 23.5px;
	height: 32px;
}

.username {
	font-weight: bold;
}

#logout, #manageUsers {
	box-sizing: border-box;
	border: 1px white solid;
	border-radius: 2px;
	padding: 6.5px 12.5px;
	margin-left: 23px;
	line-height: 19px;
	font-size: 14px;
	height: 32px;
}

#responsiveHeaderMenu {
	display: none;
	margin-top: 29.5px;
}

@media only screen and (max-width: 670px) {
	[id="loggedInAs"] {
		display: none;
	}
}

@media only screen and (max-width: 550px) {
	.userOptions {
		display: none;
	}

	#responsiveHeaderMenu {
		display: inline;
	}
}

@media only screen and (max-width: 550px) {
	[id="responsiveHeaderMenu"] {
		display: inline;
	}
}

a.tabs__item.tabs__item--active {
	font-size: 14px;
	line-height: 19px;
	display: inline-block;
	height: 100%;
	width: 100%;
}

a.tabs__item.tabs__item--active > a {
	height: 100%;
	width: 100%;
	display: inline-block;
	padding-top: 24px;
	padding-left: 20px;
	padding-right: 20px;
	opacity: 0.7;
}

.router-link-exact-active{
	opacity: 1 !important;
}

@media only screen and (max-width: 409px) {
	a.tabs__item.tabs__item--active > a {
		padding-left: 8px !important;
		padding-right: 8px !important;
	}

}

</style>