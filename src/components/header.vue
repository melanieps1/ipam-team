<template>
<div id="app-header">
  <v-toolbar id="blue-navbar">
    	<img id="ipam-logo-white" src="../assets/ipamlogowhite.png">
    	<v-spacer></v-spacer>
    	<span id="user">
    		Logged in as <span id="username">{{ user }}</span>
    		<button id="logout">Manage Users</button>
    		<button id="manageUsers">Log Out</button>
   	 	</span>
   </v-toolbar>
   <v-tabs v-model="active">
        <v-tabs-bar id="white-navbar" class="white">
          <v-tabs-item
            v-for="tab in tabs"
            :key = "tab"
            :href="'#' + tab"
          ><router-link v-bind:to="tab.path">
            {{ tab.name }}
          </router-link></v-tabs-item>
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
	box-shadow: 0px 1px 6px 0 rgba(0,0,0,0.3);
	font-weight: bold;
	padding-left: 20px;
}

li.tabs__slider.blue {
	height: 4px;
	width: 80%;
}

a, a:visited {
	text-decoration: none;
	color: #757575;
}

#user {
	color: white;
	margin-top: 25.5px;
	margin-right: 39.5px;
}

#username {
	font-weight: bold;
}

#logout, #manageUsers {
	box-sizing: border-box;
	border: 1px white solid;
	padding: 6.5px 12.5px;
	margin-left: 23px;
	border-radius: 2px;
	line-height: 19px;
	font-size: 14px;
	height: 39.5px;
}

a.tabs__item.tabs__item--active {
	font-size: 14px;
	line-height: 19px;
	padding-top: 24px;
	padding-left: 20px;
	padding-right: 20px;
	display: inline-block;
}


</style>