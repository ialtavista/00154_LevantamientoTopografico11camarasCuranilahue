ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8165128.765474, -4505840.250710, -8163720.311295, -4505013.571808]);
var wms_layers = [];


        var lyr_GoogleSatelite_0 = new ol.layer.Tile({
            'title': 'Google Satelite',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://www.google.cn/maps/vt?lyrs=s@189&gl=cn&x={x}&y={y}&z={z}'
            })
        });
var format_Colector_1 = new ol.format.GeoJSON();
var features_Colector_1 = format_Colector_1.readFeatures(json_Colector_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Colector_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Colector_1.addFeatures(features_Colector_1);
var lyr_Colector_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Colector_1, 
                style: style_Colector_1,
                popuplayertitle: 'Colector',
                interactive: false,
    title: 'Colector<br />\
    <img src="styles/legend/Colector_1_0.png" /> PENDIENTE<br />\
    <img src="styles/legend/Colector_1_1.png" /> VERIFICADO<br />\
    <img src="styles/legend/Colector_1_2.png" /> SEMI VERIFICADO<br />' });
var format_Cmara_2 = new ol.format.GeoJSON();
var features_Cmara_2 = format_Cmara_2.readFeatures(json_Cmara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cmara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cmara_2.addFeatures(features_Cmara_2);
var lyr_Cmara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cmara_2, 
                style: style_Cmara_2,
                popuplayertitle: 'Cámara',
                interactive: true,
    title: 'Cámara<br />\
    <img src="styles/legend/Cmara_2_0.png" /> INSPECCIONADA<br />\
    <img src="styles/legend/Cmara_2_1.png" /> NO ENCONTRADA<br />\
    <img src="styles/legend/Cmara_2_2.png" /> SELLADA<br />' });
var group_Levantamiento = new ol.layer.Group({
                                layers: [lyr_Colector_1,lyr_Cmara_2,],
                                fold: 'open',
                                title: 'Levantamiento'});

lyr_GoogleSatelite_0.setVisible(true);lyr_Colector_1.setVisible(true);lyr_Cmara_2.setVisible(true);
var layersList = [lyr_GoogleSatelite_0,group_Levantamiento];
lyr_Colector_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'ESTADO': 'ESTADO', 'DIAMETRO': 'DIAMETRO', 'CAMARA_INICIO': 'CAMARA_INICIO', 'CAMARA_FINAL': 'CAMARA_FINAL', 'OBSERVACIONES': 'OBSERVACIONES', });
lyr_Cmara_2.set('fieldAliases', {'fid': 'fid', 'IDENTIFICA': 'IDENTIFICA', 'ESTADO': 'ESTADO', 'ESCALINES': 'ESCALINES', 'OBSERVACIONES': 'OBSERVACIONES', 'DIRECCION': 'DIRECCION', 'FOTOGRAFIA PANORAMICA': 'FOTOGRAFIA PANORAMICA', 'FOTOGRAFIA INTERIOR': 'FOTOGRAFIA INTERIOR', 'HALLAZGO 1': 'HALLAZGO 1', 'HALLAZGO 2': 'HALLAZGO 2', 'PROFUNDIDAD FONDO': 'PROFUNDIDAD FONDO', 'FALLA ESTRUCTURAL': 'FALLA ESTRUCTURAL', 'TERRENO INACCESIBLE': 'TERRENO INACCESIBLE', 'CAMARA NUEVA': 'CAMARA NUEVA', 'REQUIERE LIMPIEZA': 'REQUIERE LIMPIEZA', 'ESTADO CANAL': 'ESTADO CANAL', 'ESTADO BANQUETA': 'ESTADO BANQUETA', 'NAPA': 'NAPA', 'EMBANCAMIENTO': 'EMBANCAMIENTO', 'ESTADO ESCALINES': 'ESTADO ESCALINES', 'E (m) SIRGAS 2025': 'E (m) SIRGAS 2025', 'N (m) SIRGAS 2025': 'N (m) SIRGAS 2025', 'COTA ANILLO (m) SIRGAS 2025': 'COTA ANILLO (m) SIRGAS 2025', 'COTA FONDO (m) SIRGAS 2025': 'COTA FONDO (m) SIRGAS 2025', });
lyr_Colector_1.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'ESTADO': 'ValueMap', 'DIAMETRO': 'Range', 'CAMARA_INICIO': 'ValueRelation', 'CAMARA_FINAL': 'ValueRelation', 'OBSERVACIONES': 'TextEdit', });
lyr_Cmara_2.set('fieldImages', {'fid': 'TextEdit', 'IDENTIFICA': 'TextEdit', 'ESTADO': 'ValueMap', 'ESCALINES': 'Range', 'OBSERVACIONES': 'TextEdit', 'DIRECCION': 'TextEdit', 'FOTOGRAFIA PANORAMICA': 'ExternalResource', 'FOTOGRAFIA INTERIOR': 'ExternalResource', 'HALLAZGO 1': 'ExternalResource', 'HALLAZGO 2': 'ExternalResource', 'PROFUNDIDAD FONDO': 'TextEdit', 'FALLA ESTRUCTURAL': 'CheckBox', 'TERRENO INACCESIBLE': 'CheckBox', 'CAMARA NUEVA': 'CheckBox', 'REQUIERE LIMPIEZA': 'CheckBox', 'ESTADO CANAL': 'TextEdit', 'ESTADO BANQUETA': 'TextEdit', 'NAPA': 'TextEdit', 'EMBANCAMIENTO': 'TextEdit', 'ESTADO ESCALINES': 'TextEdit', 'E (m) SIRGAS 2025': 'TextEdit', 'N (m) SIRGAS 2025': 'TextEdit', 'COTA ANILLO (m) SIRGAS 2025': 'TextEdit', 'COTA FONDO (m) SIRGAS 2025': 'TextEdit', });
lyr_Colector_1.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'ESTADO': 'hidden field', 'DIAMETRO': 'hidden field', 'CAMARA_INICIO': 'hidden field', 'CAMARA_FINAL': 'hidden field', 'OBSERVACIONES': 'hidden field', });
lyr_Cmara_2.set('fieldLabels', {'fid': 'hidden field', 'IDENTIFICA': 'inline label - visible with data', 'ESTADO': 'inline label - visible with data', 'ESCALINES': 'inline label - visible with data', 'OBSERVACIONES': 'inline label - visible with data', 'DIRECCION': 'inline label - visible with data', 'FOTOGRAFIA PANORAMICA': 'inline label - visible with data', 'FOTOGRAFIA INTERIOR': 'inline label - visible with data', 'HALLAZGO 1': 'inline label - visible with data', 'HALLAZGO 2': 'inline label - visible with data', 'PROFUNDIDAD FONDO': 'hidden field', 'FALLA ESTRUCTURAL': 'hidden field', 'TERRENO INACCESIBLE': 'hidden field', 'CAMARA NUEVA': 'hidden field', 'REQUIERE LIMPIEZA': 'hidden field', 'ESTADO CANAL': 'inline label - always visible', 'ESTADO BANQUETA': 'inline label - always visible', 'NAPA': 'inline label - always visible', 'EMBANCAMIENTO': 'inline label - always visible', 'ESTADO ESCALINES': 'inline label - always visible', 'E (m) SIRGAS 2025': 'inline label - visible with data', 'N (m) SIRGAS 2025': 'inline label - visible with data', 'COTA ANILLO (m) SIRGAS 2025': 'inline label - always visible', 'COTA FONDO (m) SIRGAS 2025': 'inline label - visible with data', });
lyr_Cmara_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});