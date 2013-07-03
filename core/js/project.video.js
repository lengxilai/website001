function closevideos() {
  $('div.videoholderInner').replaceWith('<div class="videoholderInner"></div>');
  $('#videos').collapse('hide');
    $('#closeVids').toggleClass("arrowheadup");  
	$('#closeVids').toggleClass("arrowhead");
}
 



function changeVid(vid,w,h) {
	
	
	
$('div.videoholderInner').replaceWith('<div class="videoholderInner"><iframe class="vholder" src="http://player.vimeo.com/video/'+vid+'?title=0&amp;byline=0&amp;portrait=0&amp;color=ffffff&amp;autoplay=1" width="'+w+'" height="'+h+'" frameborder="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe><a href="javascript:closevideos();"><div class="closevideos"></div></a></div>');

// $("#collapseMovie").collapse('show');
	  
}
