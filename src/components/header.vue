<template>
<div id="app-header">
  <v-toolbar id="blue-navbar" class="pt-3 pr-1 pl-2">
    	<img id="ipam-logo-white" class="pb-2" src="../assets/ipamlogowhite.png">
    	<v-spacer></v-spacer>
    	<span id="user">
    		Logged in as <span id="username">{{ user }}</span>
    		<button id="logout">Manage Users</button>
    		<button id="manageUsers">Log Out</button>
   	 	</span>
   </v-toolbar>
   <v-tabs id="white-navbar">
    <nav>
	    <ul>
	    	<li class="nav"><router-link to="/">SITES</router-link></li>
	    	<li class="nav"><router-link to="/components">SUBNETS</router-link></li>
	    	<li class="nav"><router-link to="/equipment">EQUIPMENT</router-link></li>
	    </ul>
    </nav>
  	</v-tabs>
</div>
</template>


<script>
  export default {
  	name: 'app-navbar',
  	data () {
  		return {
  			user: "Melanie Stoeckle"
  		}
  	}
  }
</script>

<style>


#blue-navbar {
	background-color: #3F86BA;
	height: 83px;
}


#white-navbar {
	background-color: #FFFFFF;
	height: 55px;
	width: 100%;
	box-shadow: 0px 1px 6px 0 rgba(0,0,0,0.3);
}

li.nav {
	display: inline-block;
	margin: 24px 37px 12px 0px;
	font-weight: bold;
	font-family: Roboto, sans-serif;
	color: #757575;
	font-size: 14px;
	line-height: 19px;
	width: 39px;
	text-align: center;
}

a, a:visited {
	text-decoration: none;
	color: #757575;
}

#user {
	color: white;
}

#username {
	font-weight: bold;
}

#logout, #manageUsers {
	box-sizing: border-box;
	border: 1px white solid;
	padding: 6.5px 12.5px;
	margin-left: 48px;
	border-radius: 2px;
}

</style>