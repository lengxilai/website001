

<!DOCTYPE html>
<html>
<head>

<title>Project Map</title>

<meta http-equiv="content-type" content="text/html; charset=utf-8" >

<link href='../../core/css/reset.css' rel='stylesheet' />
<link href='http://api.tiles.mapbox.com/mapbox.js/v0.6.7/mapbox.css' rel='stylesheet' />

<style>

#map_canvas_proj { width:281px;height:281px; }
 .marker-image { width: 72px;height:72px;margin-left:-36px;margin-top:-46px;pointer-events:all;position:absolute }
</style>

</head>

<body>
	
<div id='map_canvas_proj'></div>

</body>

<!-- scripts -->

<script type="text/javascript" src="../../core/js/head.min.js"></script>

<script type="text/javascript">



head.js(
	

"http://api.tiles.mapbox.com/mapbox.js/v0.6.7/mapbox.js",

function() {

	var lt = ;var ln = ;
	 var map = mapbox.map('map_canvas_proj');
	 	map.addLayer(mapbox.layer().id('redbox.map-v3kwa30o'));
	   
	 	var markerLayer = mapbox.markers.layer();
	 	mapbox.markers.interaction(markerLayer);
	 
	 	var markerLayer = mapbox.markers.layer().features([ {
	 	        "geometry": { "type": "Point", "coordinates": [ln, lt]},
	 	        "properties": { "image": "../../data/projects//t3.png" }
	 	}]).factory(function(f) {
	 	        var img = document.createElement('img');
	 	        img.className = 'marker-image';
	 	        img.setAttribute('src', f.properties.image);
	 	        return img;
	 	});
	 
	 	map.addLayer(markerLayer).centerzoom({ lat: lt, lon: ln }, 14).setZoomRange(9, 18).setPanLimits(new MM.Extent(lt, ln, lt, ln));
	 	map.ui.zoomer.add();

		// 
		// map.addCallback("drawn", function(map) {
		//   console.log("map drawn!");
		// });






}); // end head 

</script>



<!-- end scripts -->

</html>