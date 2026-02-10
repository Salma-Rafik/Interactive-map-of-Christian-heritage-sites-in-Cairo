var wms_layers = [];

var format_Cairo_Governorate_0 = new ol.format.GeoJSON();
var features_Cairo_Governorate_0 = format_Cairo_Governorate_0.readFeatures(json_Cairo_Governorate_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cairo_Governorate_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cairo_Governorate_0.addFeatures(features_Cairo_Governorate_0);
var lyr_Cairo_Governorate_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cairo_Governorate_0, 
                style: style_Cairo_Governorate_0,
                popuplayertitle: 'Cairo_Governorate',
                interactive: true,
                title: '<img src="styles/legend/Cairo_Governorate_0.png" /> Cairo_Governorate'
            });
var format_Districts_1 = new ol.format.GeoJSON();
var features_Districts_1 = format_Districts_1.readFeatures(json_Districts_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Districts_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Districts_1.addFeatures(features_Districts_1);
var lyr_Districts_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Districts_1, 
                style: style_Districts_1,
                popuplayertitle: 'Districts',
                interactive: true,
                title: '<img src="styles/legend/Districts_1.png" /> Districts'
            });
var format_Heritage_Sites_2 = new ol.format.GeoJSON();
var features_Heritage_Sites_2 = format_Heritage_Sites_2.readFeatures(json_Heritage_Sites_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Heritage_Sites_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Heritage_Sites_2.addFeatures(features_Heritage_Sites_2);
var lyr_Heritage_Sites_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Heritage_Sites_2, 
                style: style_Heritage_Sites_2,
                popuplayertitle: 'Heritage_Sites',
                interactive: true,
                title: '<img src="styles/legend/Heritage_Sites_2.png" /> Heritage_Sites'
            });

lyr_Cairo_Governorate_0.setVisible(true);lyr_Districts_1.setVisible(true);lyr_Heritage_Sites_2.setVisible(true);
var layersList = [lyr_Cairo_Governorate_0,lyr_Districts_1,lyr_Heritage_Sites_2];
lyr_Cairo_Governorate_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GOV_NAME_E': 'GOV_NAME_E', 'GOV_CODE': 'GOV_CODE', 'GOV_NAME_A': 'GOV_NAME_A', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr_Districts_1.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID_2': 'OBJECTID_2', 'FID_1': 'FID_1', 'OBJECTID': 'OBJECTID', 'SHYK_ENAME': 'SHYK_ENAME', 'GOV_ID': 'GOV_ID', 'QISM_ID': 'QISM_ID', 'SHYK_ID': 'SHYK_ID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHYK_ANA_1': 'SHYK_ANA_1', 'Distance': 'Distance', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Le_2': 'Shape_Le_2', 'Shape_Area': 'Shape_Area', });
lyr_Heritage_Sites_2.set('fieldAliases', {'Id': 'Id', 'Site_Name': 'Site_Name', 'Descriotio': 'Descriotio', });
lyr_Cairo_Governorate_0.set('fieldImages', {'OBJECTID': '', 'GOV_NAME_E': '', 'GOV_CODE': '', 'GOV_NAME_A': '', 'SHAPE_Leng': '', 'SHAPE_Area': '', });
lyr_Districts_1.set('fieldImages', {'OBJECTID_1': '', 'OBJECTID_2': '', 'FID_1': '', 'OBJECTID': '', 'SHYK_ENAME': '', 'GOV_ID': '', 'QISM_ID': '', 'SHYK_ID': '', 'SHAPE_Leng': '', 'SHYK_ANA_1': '', 'Distance': '', 'Shape_Le_1': '', 'Shape_Le_2': '', 'Shape_Area': '', });
lyr_Heritage_Sites_2.set('fieldImages', {'Id': '', 'Site_Name': '', 'Descriotio': '', });
lyr_Cairo_Governorate_0.set('fieldLabels', {'OBJECTID': 'no label', 'GOV_NAME_E': 'no label', 'GOV_CODE': 'no label', 'GOV_NAME_A': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr_Districts_1.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID_2': 'no label', 'FID_1': 'no label', 'OBJECTID': 'no label', 'SHYK_ENAME': 'no label', 'GOV_ID': 'no label', 'QISM_ID': 'no label', 'SHYK_ID': 'no label', 'SHAPE_Leng': 'no label', 'SHYK_ANA_1': 'no label', 'Distance': 'no label', 'Shape_Le_1': 'no label', 'Shape_Le_2': 'no label', 'Shape_Area': 'no label', });
lyr_Heritage_Sites_2.set('fieldLabels', {'Id': 'no label', 'Site_Name': 'no label', 'Descriotio': 'no label', });
lyr_Heritage_Sites_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});