var wms_layers = [];

var format___0 = new ol.format.GeoJSON();
var features___0 = format___0.readFeatures(json___0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___0.addFeatures(features___0);
var lyr___0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___0, 
                style: style___0,
                popuplayertitle: 'محافظة_القاهرة',
                interactive: true,
                title: '<img src="styles/legend/__0.png" /> محافظة_القاهرة'
            });
var format__1 = new ol.format.GeoJSON();
var features__1 = format__1.readFeatures(json__1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__1.addFeatures(features__1);
var lyr__1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__1, 
                style: style__1,
                popuplayertitle: 'الأقسام',
                interactive: true,
                title: '<img src="styles/legend/_1.png" /> الأقسام'
            });
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource__2, 
                style: style__2,
                popuplayertitle: 'الطرق',
                interactive: true,
                title: '<img src="styles/legend/_2.png" /> الطرق'
            });
var format___3 = new ol.format.GeoJSON();
var features___3 = format___3.readFeatures(json___3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___3.addFeatures(features___3);
var lyr___3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___3, 
                style: style___3,
                popuplayertitle: 'نهر_النيل',
                interactive: true,
                title: '<img src="styles/legend/__3.png" /> نهر_النيل'
            });
var format___4 = new ol.format.GeoJSON();
var features___4 = format___4.readFeatures(json___4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource___4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource___4.addFeatures(features___4);
var lyr___4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource___4, 
                style: style___4,
                popuplayertitle: 'المناطق_التراثية',
                interactive: true,
                title: '<img src="styles/legend/__4.png" /> المناطق_التراثية'
            });

lyr___0.setVisible(true);lyr__1.setVisible(true);lyr__2.setVisible(true);lyr___3.setVisible(true);lyr___4.setVisible(true);
var layersList = [lyr___0,lyr__1,lyr__2,lyr___3,lyr___4];
lyr___0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', });
lyr__1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'اسم_ا': 'اسم_ا', 'المنط': 'المنط', 'SHAPE_Leng': 'SHAPE_Leng', 'SHAPE_Area': 'SHAPE_Area', 'اسم__1': 'اسم__1', });
lyr__2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'TYPE': 'TYPE', 'CODE': 'CODE', 'A_Name': 'A_Name', 'E_Name': 'E_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', });
lyr___3.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'Arabic_Nam': 'Arabic_Nam', 'E_Name': 'E_Name', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr___4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'id': 'id', 'Latitude': 'Latitude', 'Longitude': 'Longitude', 'name': 'name', 'descriptio': 'descriptio', 'Images': 'Images', });
lyr___0.set('fieldImages', {'OBJECTID': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', });
lyr__1.set('fieldImages', {'OBJECTID': 'TextEdit', 'اسم_ا': 'TextEdit', 'المنط': 'TextEdit', 'SHAPE_Leng': 'TextEdit', 'SHAPE_Area': 'TextEdit', 'اسم__1': 'TextEdit', });
lyr__2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'TYPE': 'TextEdit', 'CODE': 'TextEdit', 'A_Name': 'TextEdit', 'E_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', });
lyr___3.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'Arabic_Nam': 'TextEdit', 'E_Name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr___4.set('fieldImages', {'OBJECTID': 'TextEdit', 'id': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', 'name': 'TextEdit', 'descriptio': 'TextEdit', 'Images': 'TextEdit', });
lyr___0.set('fieldLabels', {'OBJECTID': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', });
lyr__1.set('fieldLabels', {'OBJECTID': 'no label', 'اسم_ا': 'inline label - always visible', 'المنط': 'no label', 'SHAPE_Leng': 'no label', 'SHAPE_Area': 'no label', 'اسم__1': 'no label', });
lyr__2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'TYPE': 'no label', 'CODE': 'no label', 'A_Name': 'no label', 'E_Name': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', });
lyr___3.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'Arabic_Nam': 'no label', 'E_Name': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr___4.set('fieldLabels', {'OBJECTID': 'no label', 'id': 'no label', 'Latitude': 'no label', 'Longitude': 'no label', 'name': 'inline label - always visible', 'descriptio': 'no label', 'Images': 'no label', });
lyr___4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});