<template>
<div id="content_wrapper">
<div id="main_content">
	<div id="left_content">
		<div class="slider">
			<ul id="slider1">
				<li>
         <img src="../assets/images/imagerotator/7fe73-slider_image3.jpg"></li>
        <li>
        <img src="../assets/images/imagerotator/7fe73-slider_image3.jpg">
        </li>
        <li>
        <img src="../assets/images/imagerotator/DSC_1803.jpg"></li>
        <li>
        </li>
        <li>
        <img src="../assets/images/imagerotator/DSC_1831.jpg">
        </li>		
        </ul>
		</div>
		<div class="clear_fix"></div>
			<div class="coming_movies">
				<h2>Coming Soon</h2>
					<ul>
						<li><a href="#"><img src="../assets/images/comingsoon/d3858-new-tickets-charges.jpg"></a></li>					</ul>
			</div>
			<div class="now_showing_movie">
				<h2>Now Showing</h2>
					<ul>
						<!-- <li><a href="#"><img src="" /></a></li> -->
						<li><a href="#"><img src="../assets/images/comingsoon/71c2e-1095aca5-39f2-43c3-ba8f-08c391bf47ee.jpeg"></a></li>					</ul>
			</div>
	</div>
	<div id="right_content">
    
        <div class="playblock" style="text-align:center; margin-bottom:10px;"> 
        <a href="https://play.google.com/store/apps/details?id=com.pack.rajhans&amp;hl=en" target="_blank"> 
         <img src="../assets/images/google-play-app-icon.png" width="240px" height="auto">
        </a>
        
        </div>
    
		<div id="user_login">
			<div class="message msg_border"><h4 class="error_message"></h4></div>
						<h1>User Login</h1>
				<form autocomplete="off" action="https://lcahgoa.in/index.php/user/login" id="loginform" name="loginform" method="POST">
				<!-- updated by atul 19-6-2014-->
				<input type="hidden" name="csrf_test_name" value="e7ea1658531f7f84f540a6ddc141a08d">
				<!--end of updated by atul 19-6-2014-->
					<table class="user_login_table" cellspacing="10">
						<tbody><tr>
							<td><label>Username</label>
              <img class="username_means" src="../assets/images/question_mark.png" width="15">
              <div class="username_means_details">Please use your email id entered at the time of registration
              </div></td>
						</tr>
						<tr>
							<td><input type="text" name="username" id="username" class="input_field" required="">
              <img class="userfield_means" src="../assets/images/question_mark.png" width="15">
              <div class="userfield_means_details">Please use your email id entered at the time of registration</div></td>
						</tr>
						<tr>
							<td><label>Password</label></td>
						</tr>
						<tr>
							<td><input type="password" name="password" id="password" class="input_field" required=""></td>
						</tr>
						<tr>
						    <td><label>Security Code</label></td>
							
						</tr>
						<tr>
						    <td><input type="text" id="captcha" name="captcha" class="input_field" value="" required=""></td>					
						</tr>
						<tr>
						    <td><label> &nbsp; </label><img src="../assets/captcha/1539001245.0974.jpg" width="160" height="30" style="border:0;" alt=" "></td>
						</tr>
						<tr>
							<td align="center">
								<input type="submit" name="submit" class="button" value="Login">
							</td><td>
						</td></tr>
						<tr>
							<td align="center"><a id="forgot_pwd" href="#data" class="forgot_link">Forgot Your Password?</a></td>
						</tr>
			
					</tbody>
				</table>
				</form>
			   		</div>
		<div class="running_movie">
			<h2>Announcement</h2>
				<marquee scrollamount="2" direction="up" class="announcment_marquee" onmouseover="this.stop();" onmouseout="this.start();">
				<ul>
					<li><a href="#">The amended timings for screening of movie shows on Saturdays &amp; Sundays are as follows:- 
1st show - 1300 Hrs, 2nd Show 1600 Hrs &amp; 3rd Show 1900 Hrs.</a></li><li><a href="#">Hindi Movie “Andhadhun" will be screened at LCAH Rajhans.
Show timings are 1800 Hrs &amp; 2100 Hrs on 05 Sep 18.
Show timings are 1300 Hrs, 1600 Hrs &amp; 1900 Hrs on 06 &amp; 07 Sep 18.
Show timings are 1930 Hrs on 10 &amp; 11 Sep 18.</a></li><li><a href="#">Personnel will not be allowed to enter the hall if national anthem commenced.</a></li><li><a href="#">Please note that "CHILDREN BELOW 04 YEARS" are allowed only for 1300 hrs on SAT &amp; SUN shows only. Viewers are requested to ensure the same.</a></li><li><a href="#">The web-site is user-friendly. A simple list of 'FAQs' is also available on the web-page. Please contact Rajhans office / Rajhans staff at  9822685396 (between 0900 hrs to 1300hrs on all days except Mondays) in case of any queries / problems encountered in accessing the website for ticket bookings.</a></li>				</ul>
				</marquee>
		</div>
		<div style="display:none;">
			<div id="data">
				<div style="margin:20px;">
					<table>
						<tbody><tr class="titles">
							<th height="30" colspan="left">
								Forgot password panel
							</th>
						</tr>
						<tr>
							<td>
								<p align="justify"><b>Forgotten your Password?</b></p>
								<br>
								<p align="justify"><b>Enter your e-mail address here. <br>
									Click on 'Send Request' and a new password will be emailed to you.</b>
								</p>
							</td>
						</tr>
						<tr>
							<td>&nbsp;</td>
						</tr>
						<tr>
							<td>
								<b>Email Address</b>
								<input type="text" class="login_input" id="emailaddress">
								</td>
								</tr>
							<tr>
						    <td><b>Security Code</b>
							<input type="text" class="" id="captcha_code" name="captcha" value="">
							</td>
						</tr>
						<tr>
						    <td> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <img src="../assets/captcha/1539001245.0974.jpg" width="160" height="30" style="border:0;" alt=" ">							</td>		
							
							</tr>

								<tr><td> &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
								<input type="button" name="forgotpass" value="Send Request" style="font-weight: bold;padding:3px;" onclick="getPassword();">
							</td>
						</tr>
						<tr height="30px;">
							<td align="center">
								<div id="applyContent" style="width:100%;text-align: justify;"></div>
							</td>
						</tr>
					</tbody></table>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="clear_fix"></div>
</div>
</template>
<script>
export default {
  name: 'Home',
  data () {
    return {msg:'welcome'}
  }
}
</script>

