<template>
 <div class="left-content">

<div style="display:none;font-size: 20px;color:red;font-family:verdana,arial;" id="countdown">         
</div>

<div class="event">
<a href="#"><img src="images/event.png" alt=""></a>
</div>
<div class="banneradd" style="margin-bottom:20px;"><a href="#"><img src="images/bms_banner.png" alt=""></a> </div>
<div class="fbblock">
<script type="text/javascript" src="http://cdn.socialtwist.com/200901288561-3/script.js"></script>
<span>
<a class="st-taf" href="http://tellafriend.socialtwist.com:80" onclick="return false;" style="border:0;padding:0;margin:0;">
<img alt="SocialTwist Tell-a-Friend" style="border:0;padding:0;margin:0;" src="http://images.socialtwist.com/200901288561-3/button.png"onmouseout="STTAFFUNC.hideHoverMap(this)" onmouseover="STTAFFUNC.showHoverMap(this, '200901288561-3', window.location, document.title)" onclick="STTAFFUNC.cw(this, {id:'200901288561-3', link: window.location, title: document.title });"/></a>
</span>

 <div class="fbcontainer">
<div class="fbsend"> <div id="fb-root"> </div> </div>
<script src="http://connect.facebook.net/en_US/all.js#xfbml=1"></script>
<div class="like"><fb:like href="http://www.facebook.com/pages/Book-My-Seats/241258505924783" send="true" layout="button_count" width="50" show_faces="true" font=""></fb:like> </div>
</div>
</div>
 </div> 
</template>


<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
