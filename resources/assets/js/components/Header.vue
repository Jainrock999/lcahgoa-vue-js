<template>
<header id="header">
    		<div id="logo">
				<a href=""><img src="../assets/images/rajhans_banner.png" /></a>				
			</div>
				<nav>
					<ul>
						<li><router-link to="/" class="home">Home</router-link></li>						
						<li><router-link to="/faq" class="faq">FAQs</router-link></li>
						<li><a href="/user/rules/">Hiring of Hall</a></li>
						
						<li><a href="/user/personalinfo/">Personal Page</a></li>
						<li><a href="/user/logout/">Logout</a></li>
						
					</ul>	
				</nav>			
		</header>
   
</template>
<script>
export default {
  name: 'app-header',
  data () {
    return {}
  }
}
</script>
<script language="javascript">
$(document).ready(function(){
	$('#slider1') .cycle({
		
		fx: 'fade', //'scrollLeft,scrollDown,scrollRight,scrollUp',blindX, blindY, blindZ, cover, curtainX, curtainY, fade, fadeZoom, growX, growY, none, scrollUp,scrollDown,scrollLeft,scrollRight,scrollHorz,scrollVert,shuffle,slideX,slideY,toss,turnUp,turnDown,turnLeft,turnRight,uncover,ipe ,zoom
		speed:  'slow', 
   		timeout: 2000 
	});
});	
</script>
