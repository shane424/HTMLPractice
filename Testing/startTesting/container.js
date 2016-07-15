document.getElementById("navcontainer").innerHTML =
		// "<ul id='menu'>" +
		// "<li><a href='Homepage.html'>Home</a></li>" +
		// "<li><a href='About.html'>About</a></li>" +
		// "<li><a href='Events.html'>Events</a></li>" +
		// "<li><a href='Members.html'>Members</a></li>" +
		// "<li><a href='FunFacts.html'>Fun Facts</a></li>" +
		// "</ul>";

"<nav class='navbar navbar-default navbar-fixed-top'>" +
"	<div class='container'>" +   /*If something messes up try making this container-fluid instead of container*/
"		<div class='navbar-header'>" +
"			<button type='button' class='navbar-toggle collapsed' data-toggle='collapse' data-target='#navbar-data' aria-expanded='false'>" +
"				<span class='sr-only'>Toggle Navigation</span>" +
"				<span class='icon-bar'></span>" +
"				<span class='icon-bar'></span>" +
"				<span class='icon-bar'></span>" +
"			</button>" +
"			<a class='navbar-brand' href='#'>Make me a picture! Maybe social icons?!</a>" +
"		</div>" +
"		<div class='collapse navbar-collapse'  id='navbar-data'>" +
"			<ul class='nav navbar-nav'>" +
"				<li><a href='Homepage.html'>Homepage</a></li>" +
"				<li><a href='About.html'>About</a></li>" +
"				<li><a href='Events.html'>Events</a></li>" +
"				<li><a href='Members.html'>Members</a></li>" +
"				<li><a href='FunFacts.html'>Fun Facts</a></li>" +
"			</ul>" +
"		</div>" +
"	</div>" +
"</nav>";

// THIS FILE IS NOT USED DUE TO DISAPPEARANCE OF THE NAVIGATION BAR BECAUSE JAVASCRIPT HAS TO LOAD OR SOMETHING
// $('#footer').css('margin-top',
//   $(document).height() 
//   - ( $('#header').height() + $('#body').height() ) 
//   - $('#footer').height()
// );