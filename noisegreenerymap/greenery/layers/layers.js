var wms_layers = [];


        var lyr_OpenStreetMapmonochrome_0 = new ol.layer.Tile({
            'title': 'OSM <br />\
								<br />\
								<strong>Sydney Greenery Map <strong>	<br />\
								<img src="styles/legend/RasterLegend.png" />  <br />',
            'type': '',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Sydney_CBD_Summer_Clipped_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Summer",
                            'type': 'base',
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sydney_CBD_Summer_Clipped_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16830934.157843, -4013441.436650, 16833947.576459, -4008341.728625]
                            })
                        });
var lyr_Sydney_CBD_Winter_Clipped_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Winter",
                            'type': 'base',
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sydney_CBD_Winter_Clipped_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16831124.291534, -4013153.672129, 16833493.281617, -4009493.954822]
                            })
                        });
var lyr_Sydney_CBD_Vegetation_Interpolated_Combined_Clipped_EditedFeatures_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Combined",
                            'type': 'base',
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sydney_CBD_Vegetation_Interpolated_Combined_Clipped_EditedFeatures_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16830934.157843, -4013441.436650, 16833947.576459, -4008341.728625]
                            })
                        });
var lyr_Sydney_CBD_Vegetation_45Degrees_Interpolated_Clipped_4 = new ol.layer.Image({
                            opacity: 1,
                            title: "-45 Degrees",
                            'type': 'base',
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sydney_CBD_Vegetation_45Degrees_Interpolated_Clipped_4.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16830934.157843, -4013441.436650, 16833947.576459, -4008341.728625]
                            })
                        });
var lyr_Sydney_CBD_Vegetation_Interpolated_45Degrees_Clipped_5 = new ol.layer.Image({
                            opacity: 1,
                            title: "45 Degrees",
                            'type': 'base',
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sydney_CBD_Vegetation_Interpolated_45Degrees_Clipped_5.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16830934.157843, -4013441.436650, 16833947.576459, -4008341.728625]
                            })
                        });
var lyr_Sydney_CBD_Vegetation_0Degrees_Clipped_6 = new ol.layer.Image({
                            opacity: 1,
                            title: "0 Degrees",
                            'type': 'base',
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Sydney_CBD_Vegetation_0Degrees_Clipped_6.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [16830934.157843, -4013441.436650, 16833947.576459, -4008341.728625]
                            })
                        });

lyr_OpenStreetMapmonochrome_0.setVisible(true);lyr_Sydney_CBD_Summer_Clipped_1.setVisible(true);lyr_Sydney_CBD_Winter_Clipped_2.setVisible(true);lyr_Sydney_CBD_Vegetation_Interpolated_Combined_Clipped_EditedFeatures_3.setVisible(true);lyr_Sydney_CBD_Vegetation_45Degrees_Interpolated_Clipped_4.setVisible(true);lyr_Sydney_CBD_Vegetation_Interpolated_45Degrees_Clipped_5.setVisible(true);lyr_Sydney_CBD_Vegetation_0Degrees_Clipped_6.setVisible(true);
var layersList = [lyr_OpenStreetMapmonochrome_0,lyr_Sydney_CBD_Summer_Clipped_1,lyr_Sydney_CBD_Winter_Clipped_2,lyr_Sydney_CBD_Vegetation_Interpolated_Combined_Clipped_EditedFeatures_3,lyr_Sydney_CBD_Vegetation_45Degrees_Interpolated_Clipped_4,lyr_Sydney_CBD_Vegetation_Interpolated_45Degrees_Clipped_5,lyr_Sydney_CBD_Vegetation_0Degrees_Clipped_6];
