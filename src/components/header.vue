<template>
  <header id="app-header">
    <div id="blue-navbar">
    	<img id="ipam-logo-white" src="../assets/ipamlogowhite.png">
    	<span id="user">
    		Logged in as <span id="username">{{ user }}</span>
    		<button id="logout">Manage Users</button>
    		<button id="manageUsers">Log Out</button>
   	 	</span>
    </div>
    <nav id="white-navbar" class="left">
	    <ul>
	    	<li class="nav"><router-link to="/">SITES</router-link></li>
	    	<li class="nav"><router-link to="/components">SUBNETS</router-link></li>
	    	<li class="nav"><router-link to="/equipment">EQUIPMENT</router-link></li>
	    </ul>
    </nav>
  </header>
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
	width: 100%;
	height: 83px;
	background-color: #3F86BA;
}

#white-navbar {
	width: 100%;
	height: 55px;
	background-color: #FFFFFF;
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

#ipam-logo-white {
	margin-top: 24px;
	margin-bottom: 24px;
	margin-left: 40px;
}

a, a:visited {
	text-decoration: none;
	color: #757575;
}

#user {
	float: right;
	margin-top: 25.5px;
	margin-right: 52px;
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