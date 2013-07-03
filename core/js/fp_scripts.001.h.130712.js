document.write('<!--[if lte IE 7]><link rel="stylesheet" href="http://www.fosterandpartners.com/core/css/ie7.css" type="text/css" media="screen" /><![endif]-->');


var _gaq = _gaq || []; 
_gaq.push(['_setAccount', 'UA-5906878-1']); 
_gaq.push(['_trackPageview']);

(function() { 
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; 
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; 
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); 
})();


jQuery('.subcol a').hover(function(){
    $(this).stop().animate({ color:'#b4e114'}, "fast");
}, function() {
    $(this).stop().delay(256).animate({color:'#eee'}, "slow");
});


 // main headings
jQuery('a.headline').hover(function(){
     $(this).stop().animate({ color:'#b4e114'}, "fast");
 }, function() {
     $(this).stop().animate({color:'#ffffff'}, "fast");
});

 // navigation menu
jQuery('.column a, .container a').hover(function(){
     $(this).stop().animate({ color:'#b4e114'}, "fast");
 }, function() {
     $(this).stop().delay(256).animate({color:'#fff'}, "slow");
});
 
$(".srch").click(function(event) {
       $(this).toggleClass("greysrch");
});

$(".mnubutton").click(function() {
	// alert(canClick);
	if (canClick == true) {
	
     $(".navblock").slideToggle();
 	 $(".menutoggle").toggleClass("menuup");  
 	 $(".navbar").toggleClass("mymarg");  

 }
});

$(".tw16").click(function() {
	window.open('http://twitter.com/FosterPartners', '_blank')
});

$(".fb16").click(function() {
	window.open('http://www.facebook.com/fosterpartners', '_blank')
});

$(".li16").click(function() {
	window.open('http://www.linkedin.com/company/foster-&-partners', '_blank')
});

$(".yt16").click(function() {
	window.open('http://www.youtube.com/user/FOSTERANDPARTNERS1', '_blank')
});

$(".we16").click(function() {
	window.open('http://e.weibo.com/u/3040745577?type=0', '_blank')
});

$(".rss16").click(function() {
	window.open('http://www.fosterandpartners.com/feed.xml', '_blank')
});

$(".rss16").click(function() {
	window.open('http://www.fosterandpartners.com/feed.xml', '_blank')
});