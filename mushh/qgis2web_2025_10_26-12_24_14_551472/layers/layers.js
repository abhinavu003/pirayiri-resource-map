var wms_layers = [];


        var lyr_GoogleTerrain_0 = new ol.layer.Tile({
            'title': 'Google Terrain',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=p&x={x}&y={y}&z={z}'
            })
        });
var format_PANCHAYAT_1 = new ol.format.GeoJSON();
var features_PANCHAYAT_1 = format_PANCHAYAT_1.readFeatures(json_PANCHAYAT_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PANCHAYAT_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PANCHAYAT_1.addFeatures(features_PANCHAYAT_1);
var lyr_PANCHAYAT_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PANCHAYAT_1, 
                style: style_PANCHAYAT_1,
                popuplayertitle: 'PANCHAYAT',
                interactive: true,
                title: '<img src="styles/legend/PANCHAYAT_1.png" /> PANCHAYAT'
            });
var format_Clipped_2 = new ol.format.GeoJSON();
var features_Clipped_2 = format_Clipped_2.readFeatures(json_Clipped_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_2.addFeatures(features_Clipped_2);
var lyr_Clipped_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_2, 
                style: style_Clipped_2,
                popuplayertitle: 'Clipped',
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_2_0.png" /> imperfectly drained<br />\
    <img src="styles/legend/Clipped_2_1.png" /> moderately well drained<br />\
    <img src="styles/legend/Clipped_2_2.png" /> <br />' });
var format_Clipped_3 = new ol.format.GeoJSON();
var features_Clipped_3 = format_Clipped_3.readFeatures(json_Clipped_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_3.addFeatures(features_Clipped_3);
var lyr_Clipped_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_3, 
                style: style_Clipped_3,
                popuplayertitle: 'Clipped',
                interactive: true,
    title: 'Clipped<br />\
    <img src="styles/legend/Clipped_3_0.png" /> Lower Plateau (Lateritic) - Dissected<br />\
    <img src="styles/legend/Clipped_3_1.png" /> Residual Mount<br />\
    <img src="styles/legend/Clipped_3_2.png" /> Valley Fill<br />\
    <img src="styles/legend/Clipped_3_3.png" /> Water Body<br />\
    <img src="styles/legend/Clipped_3_4.png" /> <br />' });
var format_Clipped_4 = new ol.format.GeoJSON();
var features_Clipped_4 = format_Clipped_4.readFeatures(json_Clipped_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clipped_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clipped_4.addFeatures(features_Clipped_4);
var lyr_Clipped_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clipped_4, 
                style: style_Clipped_4,
                popuplayertitle: 'Clipped',
                interactive: true,
                title: '<img src="styles/legend/Clipped_4.png" /> Clipped'
            });

lyr_GoogleTerrain_0.setVisible(true);lyr_PANCHAYAT_1.setVisible(true);lyr_Clipped_2.setVisible(true);lyr_Clipped_3.setVisible(true);lyr_Clipped_4.setVisible(true);
var layersList = [lyr_GoogleTerrain_0,lyr_PANCHAYAT_1,lyr_Clipped_2,lyr_Clipped_3,lyr_Clipped_4];
lyr_PANCHAYAT_1.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KERBLPAPRJ': 'KERBLPAPRJ', 'KERBLPAP_1': 'KERBLPAP_1', 'CODE': 'CODE', 'PANCHAYAT': 'PANCHAYAT', });
lyr_Clipped_2.set('fieldAliases', {'AREA': 'AREA', 'PERIMETER': 'PERIMETER', 'KERSOIL_': 'KERSOIL_', 'KERSOIL_ID': 'KERSOIL_ID', 'CODE': 'CODE', 'MAP_SYMBOL': 'MAP_SYMBOL', 'DEPTH': 'DEPTH', 'TEXTURE': 'TEXTURE', 'SLOPE': 'SLOPE', 'DRAINAGE': 'DRAINAGE', });
lyr_Clipped_3.set('fieldAliases', {'NAME': 'NAME', 'TYPE1': 'TYPE1', 'TYPE2': 'TYPE2', });
lyr_Clipped_4.set('fieldAliases', {'ORDER1': 'ORDER1', });
lyr_PANCHAYAT_1.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KERBLPAPRJ': 'Range', 'KERBLPAP_1': 'Range', 'CODE': 'Range', 'PANCHAYAT': 'TextEdit', });
lyr_Clipped_2.set('fieldImages', {'AREA': 'TextEdit', 'PERIMETER': 'TextEdit', 'KERSOIL_': 'Range', 'KERSOIL_ID': 'Range', 'CODE': 'Range', 'MAP_SYMBOL': 'TextEdit', 'DEPTH': 'TextEdit', 'TEXTURE': 'TextEdit', 'SLOPE': 'TextEdit', 'DRAINAGE': 'TextEdit', });
lyr_Clipped_3.set('fieldImages', {'NAME': 'TextEdit', 'TYPE1': 'TextEdit', 'TYPE2': 'TextEdit', });
lyr_Clipped_4.set('fieldImages', {'ORDER1': 'Range', });
lyr_PANCHAYAT_1.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KERBLPAPRJ': 'no label', 'KERBLPAP_1': 'no label', 'CODE': 'no label', 'PANCHAYAT': 'inline label - always visible', });
lyr_Clipped_2.set('fieldLabels', {'AREA': 'no label', 'PERIMETER': 'no label', 'KERSOIL_': 'no label', 'KERSOIL_ID': 'no label', 'CODE': 'no label', 'MAP_SYMBOL': 'no label', 'DEPTH': 'inline label - always visible', 'TEXTURE': 'inline label - always visible', 'SLOPE': 'inline label - always visible', 'DRAINAGE': 'inline label - always visible', });
lyr_Clipped_3.set('fieldLabels', {'NAME': 'inline label - always visible', 'TYPE1': 'no label', 'TYPE2': 'no label', });
lyr_Clipped_4.set('fieldLabels', {'ORDER1': 'inline label - always visible', });
lyr_Clipped_4.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});