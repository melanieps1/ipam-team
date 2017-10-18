<template>
  <header id="app-header">
    <div id="blue-navbar">
    	<img id="ipam-logo-white" src="../assets/ipamlogowhite.png">
    	<div id="user">
   	 	</div>
    </div>
    <nav id="white-navbar" class="left">
	    <ul>
	    	<li><router-link to="/">SITES</router-link></li>
	    	<li><router-link to="/components">SUBNETS</router-link></li>
	    	<li><router-link to="/equipment">EQUIPMENT</router-link></li>
	    </ul>
    </nav>
  </header>
</template>


<script>
  export default {
  	name: 'app-navbar',
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

li {
	display: inline-block;
	margin-top: 24px;
	margin-bottom: 12px;
	font-weight: bold;
	font-family: Roboto, sans-serif;
	color: #757575;
	font-size: 14px;
	line-height: 19px;
	width: 39px;
	text-align: center;
	margin-right: 37px
}

#ipam-logo-white {
	margin-top: 24px;
	margin-bottom: 24px;
	margin-left: 40px;
}

a {
	text-decoration: none;
	color: #757575;
}

</style>