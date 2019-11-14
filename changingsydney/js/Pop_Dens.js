<!DOCTYPE html>
<html>
<head>
<meta charset='utf-8' />
<title>Population Density Comparison between 2006 and 2016</title>
<meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
<script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.js'></script>
<link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.0.0/mapbox-gl.css' rel='stylesheet' />
<style>
body { margin:0; padding:0; }
#map { position:absolute; top:0; bottom:0; width:100%; }
.label {
          line-height:25px;
        }
.map-overlay {
  position: absolute;
  bottom: 0;
  right: 0;
  background: rgba(0, 0, 0, 0);
  margin-right: 20px;
  font-family: Arial, sans-serif;
  overflow: auto;
  border-radius: 3px;
}

#features {
  top: 0;
  height: 100px;
  margin-top: 20px;
  width: 300px;
}

#legend {
  padding: 10px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  line-height: 18px;
  height: 150px;
  margin-bottom: 40px;
  width: 100px;
}

.legend-key {
  display: inline-block;
  border-radius: 20%;
  width: 10px;
  height: 10px;
  margin-right: 5px;
}
</style>
</head>

<body>
<style>
body {
overflow: hidden;
}
 
body * {
-webkit-touch-callout: none;
-webkit-user-select: none;
-moz-user-select: none;
-ms-user-select: none;
user-select: none;
}
 
.map {
position: absolute;
top: 0;
bottom: 0;
width: 100%;
}
</style>
<script src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-compare/v0.1.0/mapbox-gl-compare.js'></script>
<link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-compare/v0.1.0/mapbox-gl-compare.css' type='text/css' />
 
<div id='before' class='map'></div>
<div class='map-overlay' id='features'><h2>Sydney Population Density (P/hectare)</h2></div>
<div id='after' class='map'></div>
<div class='map-overlay' id='features'><h2>Sydney Population Density (P/hectare)</h2></div>
<div class='map-overlay' id='legend'></div>
<script>
mapboxgl.accessToken = 'pk.eyJ1IjoiamFzb256aG91IiwiYSI6ImNqdnhkeHNtdjA0M2M0OXI2cGlmZW1ndWEifQ.OtGAEdOfT1XTnnZnqYf2XQ';
var beforemap = new mapboxgl.Map({
container: 'before',
style: 'mapbox://styles/jasonzhou/cjvz451vh0ydr1cp8021dxfh5',
center: [151.210, -33.865], // initial map center in [lon, lat]
pitch: 45,
zoom: 12.5, // starting zoom
minZoom: 12.5,
maxZoom: 22
});

beforemap.on('load', function() {
  var layers = beforemap.getStyle().layers;
var labelLayerId;
for (var i = 0; i < layers.length; i++) {
if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
labelLayerId = layers[i].id;
break;
}
}
  beforemap.addLayer({
    id: 'population',
    type: 'fill-extrusion',
    source: {
      type: 'vector',
      url: 'mapbox://jasonzhou.4se11wgu'
    },
    'source-layer': 'NSW_2006_Real-9892h7',

            'paint': {

              'fill-extrusion-height': {

                'property': 'Pop_Densit',

                'stops': [

                  [0, 0],

                  [500, 500],

                  [1000, 1000],

                  [1500, 1500],

                  [2000, 2000],

                  [2500, 2500],

                  [3000, 3000],

                  [3500, 3500],

                  [4000, 4000],

                  [4500, 4500],
                ]

              },

              'fill-extrusion-color': {

                'property': 'Pop_Densit',

                'stops': [

                  [0, '#e6e6e6'],

                  [500, '#ffffb2'],

                  [1000, '#fecc5c'],

                  [1500, '#fd8d3c'],

                  [2000, '#f03b20'],

                  [5000, '#bd0026']

                ]

              },

              'fill-extrusion-opacity': 1

            }

          },labelLayerId); 

var layers = ['0', '0-500', '500-1000', '1000-1500', '1500-2000', '2000+'];
var colors = ['#e6e6e6', '#ffffb2', '#fecc5c', '#fd8d3c', '#f03b20', '#bd0026'];
for (i = 0; i < layers.length; i++) {
  var layer = layers[i];
  var color = colors[i];
  var item = document.createElement('div');
  var key = document.createElement('span');
  key.className = 'legend-key';
  key.style.backgroundColor = color;

  var value = document.createElement('span');
  value.innerHTML = layer;
  item.appendChild(key);
  item.appendChild(value);
  legend.appendChild(item);
}

        });

var aftermap = new mapboxgl.Map({
container: 'after',
style: 'mapbox://styles/jasonzhou/cjvz451vh0ydr1cp8021dxfh5', // stylesheet location
center: [151.210, -33.865], // starting position [lng, lat]
pitch: 45,
zoom: 12.5, // starting zoom
minZoom: 12.5,
maxZoom: 22 // starting zoom
});

 aftermap.on('load', function() {
  var layers = aftermap.getStyle().layers;
 
var labelLayerId;
for (var i = 0; i < layers.length; i++) {
if (layers[i].type === 'symbol' && layers[i].layout['text-field']) {
labelLayerId = layers[i].id;
break;
}
}
  aftermap.addLayer({
    id: 'population',
    type: 'fill-extrusion',
    source: {
      type: 'vector',
      url: 'mapbox://jasonzhou.3ictf4nx'
    },
    'source-layer': 'NSW_2016-4rmbq0',

            'paint': {

              'fill-extrusion-height': {

                'property': 'Pop_Dens',

                'stops': [

                  [0, 0],

                  [500, 500],

                  [1000, 1000],

                  [1500, 1500],

                  [2000, 2000],

                  [2500, 2500],

                  [3000, 3000],

                  [3500, 3500],

                  [4000, 4000],

                  [4500, 4500],
                ]

              },

              'fill-extrusion-color': {

                'property': 'Pop_Dens',

                'stops': [

                  [0, '#e6e6e6'],

                  [500, '#ffffb2'],

                  [1000, '#fecc5c'],

                  [1500, '#fd8d3c'],

                  [2000, '#f03b20'],

                  [5000, '#bd0026']

                ]

              },

              'fill-extrusion-opacity': 1

            }

          },labelLayerId); 

        });

var map = new mapboxgl.Compare(beforemap, aftermap, {
// Set this to enable comparing two maps by mouse movement:
// mousemove: true
});

</script>
 
</body>
</html>