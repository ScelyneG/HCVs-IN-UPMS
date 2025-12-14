ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([12586090.848793, 356213.170030, 12590753.386360, 361002.018980]);
var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleSatellite_1 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: '&nbsp;&middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_HCV1_2 = new ol.format.GeoJSON();
var features_HCV1_2 = format_HCV1_2.readFeatures(json_HCV1_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HCV1_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HCV1_2.addFeatures(features_HCV1_2);
var lyr_HCV1_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HCV1_2, 
                style: style_HCV1_2,
                popuplayertitle: 'HCV 1',
                interactive: true,
                title: '<img src="styles/legend/HCV1_2.png" /> HCV 1'
            });
var format_HCV2_3 = new ol.format.GeoJSON();
var features_HCV2_3 = format_HCV2_3.readFeatures(json_HCV2_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HCV2_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HCV2_3.addFeatures(features_HCV2_3);
var lyr_HCV2_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HCV2_3, 
                style: style_HCV2_3,
                popuplayertitle: 'HCV 2',
                interactive: true,
                title: '<img src="styles/legend/HCV2_3.png" /> HCV 2'
            });
var format_HCV3_4 = new ol.format.GeoJSON();
var features_HCV3_4 = format_HCV3_4.readFeatures(json_HCV3_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HCV3_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HCV3_4.addFeatures(features_HCV3_4);
var lyr_HCV3_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HCV3_4, 
                style: style_HCV3_4,
                popuplayertitle: 'HCV 3',
                interactive: true,
                title: '<img src="styles/legend/HCV3_4.png" /> HCV 3'
            });
var format_HCV4_5 = new ol.format.GeoJSON();
var features_HCV4_5 = format_HCV4_5.readFeatures(json_HCV4_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HCV4_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HCV4_5.addFeatures(features_HCV4_5);
var lyr_HCV4_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HCV4_5, 
                style: style_HCV4_5,
                popuplayertitle: 'HCV 4',
                interactive: true,
                title: '<img src="styles/legend/HCV4_5.png" /> HCV 4'
            });
var format_HCV5_6 = new ol.format.GeoJSON();
var features_HCV5_6 = format_HCV5_6.readFeatures(json_HCV5_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HCV5_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HCV5_6.addFeatures(features_HCV5_6);
var lyr_HCV5_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HCV5_6, 
                style: style_HCV5_6,
                popuplayertitle: 'HCV 5',
                interactive: true,
                title: '<img src="styles/legend/HCV5_6.png" /> HCV 5'
            });
var format_HCV6_7 = new ol.format.GeoJSON();
var features_HCV6_7 = format_HCV6_7.readFeatures(json_HCV6_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HCV6_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HCV6_7.addFeatures(features_HCV6_7);
var lyr_HCV6_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HCV6_7, 
                style: style_HCV6_7,
                popuplayertitle: 'HCV 6',
                interactive: true,
                title: '<img src="styles/legend/HCV6_7.png" /> HCV 6'
            });
var format_ALLHCVs_8 = new ol.format.GeoJSON();
var features_ALLHCVs_8 = format_ALLHCVs_8.readFeatures(json_ALLHCVs_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ALLHCVs_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ALLHCVs_8.addFeatures(features_ALLHCVs_8);
var lyr_ALLHCVs_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ALLHCVs_8, 
                style: style_ALLHCVs_8,
                popuplayertitle: 'ALL HCVs',
                interactive: true,
                title: '<img src="styles/legend/ALLHCVs_8.png" /> ALL HCVs'
            });

lyr_OSMStandard_0.setVisible(true);lyr_GoogleSatellite_1.setVisible(true);lyr_HCV1_2.setVisible(true);lyr_HCV2_3.setVisible(true);lyr_HCV3_4.setVisible(true);lyr_HCV4_5.setVisible(true);lyr_HCV5_6.setVisible(true);lyr_HCV6_7.setVisible(true);lyr_ALLHCVs_8.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_GoogleSatellite_1,lyr_HCV1_2,lyr_HCV2_3,lyr_HCV3_4,lyr_HCV4_5,lyr_HCV5_6,lyr_HCV6_7,lyr_ALLHCVs_8];
lyr_HCV1_2.set('fieldAliases', {'id': 'id', });
lyr_HCV2_3.set('fieldAliases', {'id': 'id', });
lyr_HCV3_4.set('fieldAliases', {'id': 'id', });
lyr_HCV4_5.set('fieldAliases', {'id': 'id', });
lyr_HCV5_6.set('fieldAliases', {'id': 'id', });
lyr_HCV6_7.set('fieldAliases', {'id': 'id', });
lyr_ALLHCVs_8.set('fieldAliases', {'id': 'id', });
lyr_HCV1_2.set('fieldImages', {'id': 'TextEdit', });
lyr_HCV2_3.set('fieldImages', {'id': 'TextEdit', });
lyr_HCV3_4.set('fieldImages', {'id': 'TextEdit', });
lyr_HCV4_5.set('fieldImages', {'id': 'TextEdit', });
lyr_HCV5_6.set('fieldImages', {'id': 'TextEdit', });
lyr_HCV6_7.set('fieldImages', {'id': 'TextEdit', });
lyr_ALLHCVs_8.set('fieldImages', {'id': 'TextEdit', });
lyr_HCV1_2.set('fieldLabels', {'id': 'no label', });
lyr_HCV2_3.set('fieldLabels', {'id': 'no label', });
lyr_HCV3_4.set('fieldLabels', {'id': 'no label', });
lyr_HCV4_5.set('fieldLabels', {'id': 'no label', });
lyr_HCV5_6.set('fieldLabels', {'id': 'no label', });
lyr_HCV6_7.set('fieldLabels', {'id': 'no label', });
lyr_ALLHCVs_8.set('fieldLabels', {'id': 'no label', });
lyr_ALLHCVs_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});