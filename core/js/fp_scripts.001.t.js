// ie

document.write('<!--[if lte IE 7]><link rel="stylesheet" href="http://164.177.132.128/core/css/ie7.css" type="text/css" media="screen" /><![endif]-->');
//document.write('<!--[if IE 6]> <script type="text/javascript" src="http://riverside.rbmtest.com/core/js/ie6.js"></script> <![endif]-->');


var _gaq = _gaq || []; 
_gaq.push(['_setAccount', 'UA-5906878-1']); 
_gaq.push(['_trackPageview']);

(function() { 
  var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; 
  ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; 
  var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); 
})();


// the bars

$(".srch").click(function(event) {
      $(this).toggleClass("greysrch");
});

// $(".navbarInner").click(function() {
//      $(".navblock").slideToggle();
// 	 $(".menutoggle").toggleClass("menuup");  
// 	 $(".navbar").toggleClass("mymarg"); 
// 	  $(".subcol").toggleClass("nomarg");  
// });
// 
// $(".navbarInner").onselectstart = function() { return false; }; 
// $(".navbarInner").unselectable = "on"; 
// $(".navbarInner").css({ "-moz-user-select": 'none', "-webkit-user-select": 'none' }); 

$(".clickable").click(function() {
	  $(this).toggleClass("arrowhead");  
	  $(this).toggleClass("arrowheadup"); 
});

// navigation menu
jQuery('.subcol a').hover(function(){
    $(this).stop().animate({ color:'#b4e114'}, "fast");
}, function() {
    $(this).stop().delay(256).animate({color:'#ffffff'}, "slow");
});

// UP
// jQuery('.up, .upx').hover(function(){
// 	$(this).css('cursor', 'pointer');
//     $(this).stop().animate({ color:'#b4e114'}, "fast");
// }, function() {
//     $(this).stop().delay(256).animate({color:'#fff'}, "slow");
// });

jQuery(".up").click(function() { window.location.href = "../"; });
jQuery(".upx").click(function() { window.location.href = "../../"; });

// main headings
jQuery('a.headline').hover(function(){
    $(this).stop().animate({ color:'#b4e114'}, "fast");
}, function() {
    $(this).stop().delay(256).animate({color:'#cccccc'}, "slow");
});

jQuery('.column a, .bio a, .footer a').hover(function(){
	$(this).css('cursor', 'pointer');
    $(this).stop().animate({ color:'#b4e114'}, "fast");
}, function() {
    $(this).stop().delay(256).animate({color:'#ffffff'}, "slow");
});


jQuery('.up, .upx').hover(function(){
	$(this).css('cursor', 'pointer');
    $(this).stop().animate({ color:'#ffffff'}, "fast");
}, function() {
    $(this).stop().delay(256).animate({color:'#b4e114'}, "slow");
});

jQuery('table.txt, .news, .biobutton, .biobuttonpdf, .pdfbarbutt').hover(function(){
    $(this).stop().animate({ backgroundColor:'#2a2a2a'}, "fast");
}, function() {
    $(this).stop().delay(256).animate({backgroundColor:'#1c1c1c'}, "slow");
});

// jQuery('.logo').hover(function(){
//     $(this).stop().animate({ opacity:'0.65'}, "fast");
// }, function() {
//     $(this).stop().animate({ opacity:'1'}, "fast");
// });

// jQuery('.logo').click(function(){
// 	window.location = "http://164.177.132.128";
// });

$('.socialbutt').click(function() {
  $('.socialzone').slideToggle('fast', function() { $('.socialzoneinner').fadeIn('fast'); });
  $("html, body").animate({ scrollTop: $(document).height() }, "fast");
    return false;
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