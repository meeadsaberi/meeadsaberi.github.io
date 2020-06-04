var wms_layers = [];
		
		      var lyr_OSMMonochrome_0 = new ol.layer.Tile({
            'title': 'OSM <br />\
								<br />\
								<strong>Estimated traffic noise level (dB)<strong>	<br />\
                                <br />\
								<img src="styles/legend/PM_polygon_1_0.png" />  < 60 <br />\
								<img src="styles/legend/PM_polygon_1_1.png" /> 60 - 63 <br />\
								<img src="styles/legend/PM_polygon_1_2.png" /> 63 - 66 <br />\
								<img src="styles/legend/PM_polygon_1_3.png" /> 66 - 69 <br />\
								<img src="styles/legend/PM_polygon_1_4.png" /> 69 - 72 <br />\
								<img src="styles/legend/PM_polygon_1_5.png" /> 72 - 75 <br />\
								<img src="styles/legend/PM_polygon_1_6.png" /> 75 - 78 <br />\
								<img src="styles/legend/PM_polygon_1_7.png" /> 78 - 81 <br />\
								<img src="styles/legend/PM_polygon_1_8.png" /> 81 - 84 <br />\
								<img src="styles/legend/PM_polygon_1_9.png" /> 84 - 87 <br />\
								<img src="styles/legend/PM_polygon_1_10.png" /> 87 - 90 <br />\
								<img src="styles/legend/PM_polygon_1_11.png" />  > 90<br />',
            'type': '',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://a.tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png'
            })
        });
var lyr_PM_raster_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Afternoon peak period",
                            type:'base',
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/PM_raster_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16830908.105960, -4013476.616712, 16834048.654731, -4008314.608179]
                            })
                        });
var lyr_OffPeak_raster_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Off-peak period",
                            type:'base',
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/OffPeak_raster_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16830908.105992, -4013476.616710, 16834048.654763, -4008314.608177]
                            })
                        });
var lyr_AM_raster_3 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Morning peak period',
                            type:'base',
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/AM_raster_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16830908.105960, -4013476.616712, 16834048.654731, -4008314.608179]
                            })
                        });

lyr_OSMMonochrome_0.setVisible(true);lyr_PM_raster_1.setVisible(false);lyr_OffPeak_raster_2.setVisible(false);lyr_AM_raster_3.setVisible(true);
var layersList = [lyr_OSMMonochrome_0,lyr_PM_raster_1,lyr_OffPeak_raster_2,lyr_AM_raster_3];
