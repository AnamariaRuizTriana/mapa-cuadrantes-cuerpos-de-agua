var wms_layers = [];

var format_actualizacion2_cuadrantes_censo_2024_0 = new ol.format.GeoJSON();
var features_actualizacion2_cuadrantes_censo_2024_0 = format_actualizacion2_cuadrantes_censo_2024_0.readFeatures(json_actualizacion2_cuadrantes_censo_2024_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_actualizacion2_cuadrantes_censo_2024_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_actualizacion2_cuadrantes_censo_2024_0.addFeatures(features_actualizacion2_cuadrantes_censo_2024_0);
var lyr_actualizacion2_cuadrantes_censo_2024_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_actualizacion2_cuadrantes_censo_2024_0, 
                style: style_actualizacion2_cuadrantes_censo_2024_0,
                popuplayertitle: "actualizacion2_cuadrantes_censo_2024",
                interactive: true,
    title: 'actualizacion2_cuadrantes_censo_2024<br />\
    <img src="styles/legend/actualizacion2_cuadrantes_censo_2024_0_0.png" /> Alto<br />\
    <img src="styles/legend/actualizacion2_cuadrantes_censo_2024_0_1.png" /> Bajo<br />\
    <img src="styles/legend/actualizacion2_cuadrantes_censo_2024_0_2.png" /> Medio<br />\
    <img src="styles/legend/actualizacion2_cuadrantes_censo_2024_0_3.png" /> <br />'
        });
var format_SitiosCriticos_CAgua_2024_1 = new ol.format.GeoJSON();
var features_SitiosCriticos_CAgua_2024_1 = format_SitiosCriticos_CAgua_2024_1.readFeatures(json_SitiosCriticos_CAgua_2024_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitiosCriticos_CAgua_2024_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitiosCriticos_CAgua_2024_1.addFeatures(features_SitiosCriticos_CAgua_2024_1);
var lyr_SitiosCriticos_CAgua_2024_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitiosCriticos_CAgua_2024_1, 
                style: style_SitiosCriticos_CAgua_2024_1,
                popuplayertitle: "SitiosCriticos_CAgua_2024",
                interactive: true,
                    title: '<img src="styles/legend/SitiosCriticos_CAgua_2024_1.png" /> SitiosCriticos_CAgua_2024'
                });
var format_c_agua_cuadrantes_2 = new ol.format.GeoJSON();
var features_c_agua_cuadrantes_2 = format_c_agua_cuadrantes_2.readFeatures(json_c_agua_cuadrantes_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_c_agua_cuadrantes_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_c_agua_cuadrantes_2.addFeatures(features_c_agua_cuadrantes_2);
var lyr_c_agua_cuadrantes_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_c_agua_cuadrantes_2, 
                style: style_c_agua_cuadrantes_2,
                popuplayertitle: "c_agua_cuadrantes",
                interactive: true,
                    title: '<img src="styles/legend/c_agua_cuadrantes_2.png" /> c_agua_cuadrantes'
                });

lyr_actualizacion2_cuadrantes_censo_2024_0.setVisible(true);lyr_SitiosCriticos_CAgua_2024_1.setVisible(true);lyr_c_agua_cuadrantes_2.setVisible(true);
var layersList = [lyr_actualizacion2_cuadrantes_censo_2024_0,lyr_SitiosCriticos_CAgua_2024_1,lyr_c_agua_cuadrantes_2];
lyr_actualizacion2_cuadrantes_censo_2024_0.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Codigo_mun': 'Codigo_mun', 'codigo_cen': 'codigo_cen', 'Localidad': 'Localidad', 'codigo_geo': 'codigo_geo', 'Ubicacione': 'Ubicacione', 'Area_metro': 'Area_metro', 'Shape_Leng': 'Shape_Leng', 'Complejida': 'Complejida', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_SitiosCriticos_CAgua_2024_1.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'Name': 'Name', 'Latitud': 'Latitud', 'Longitud': 'Longitud', });
lyr_c_agua_cuadrantes_2.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'NOMBRE': 'NOMBRE', 'SUBTIPO': 'SUBTIPO', 'SECTOR': 'SECTOR', 'CODCUE': 'CODCUE', 'CUENCA': 'CUENCA', 'CODSCUE': 'CODSCUE', 'SUBCUENCA': 'SUBCUENCA', 'CODMCUE': 'CODMCUE', 'MICROCUENC': 'MICROCUENC', 'VINCULO': 'VINCULO', 'AREA': 'AREA', 'VOLUMEN': 'VOLUMEN', 'OBSERVACIO': 'OBSERVACIO', 'IDTABINV': 'IDTABINV', 'CODHIDRO': 'CODHIDRO', 'Shape_Length': 'Shape_Length', 'Shape_Area': 'Shape_Area', });
lyr_actualizacion2_cuadrantes_censo_2024_0.set('fieldImages', {'OBJECTID': 'TextEdit', 'Codigo_mun': 'Range', 'codigo_cen': 'TextEdit', 'Localidad': 'TextEdit', 'codigo_geo': 'TextEdit', 'Ubicacione': 'Range', 'Area_metro': 'Range', 'Shape_Leng': 'TextEdit', 'Complejida': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_SitiosCriticos_CAgua_2024_1.set('fieldImages', {'OBJECTID': 'TextEdit', 'Name': 'TextEdit', 'Latitud': 'TextEdit', 'Longitud': 'TextEdit', });
lyr_c_agua_cuadrantes_2.set('fieldImages', {'OBJECTID': 'TextEdit', 'NOMBRE': 'TextEdit', 'SUBTIPO': 'Range', 'SECTOR': 'TextEdit', 'CODCUE': 'TextEdit', 'CUENCA': 'TextEdit', 'CODSCUE': 'TextEdit', 'SUBCUENCA': 'TextEdit', 'CODMCUE': 'TextEdit', 'MICROCUENC': 'TextEdit', 'VINCULO': 'TextEdit', 'AREA': 'TextEdit', 'VOLUMEN': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'IDTABINV': 'TextEdit', 'CODHIDRO': 'TextEdit', 'Shape_Length': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_actualizacion2_cuadrantes_censo_2024_0.set('fieldLabels', {'OBJECTID': 'no label', 'Codigo_mun': 'no label', 'codigo_cen': 'no label', 'Localidad': 'no label', 'codigo_geo': 'no label', 'Ubicacione': 'no label', 'Area_metro': 'no label', 'Shape_Leng': 'no label', 'Complejida': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_SitiosCriticos_CAgua_2024_1.set('fieldLabels', {'OBJECTID': 'no label', 'Name': 'no label', 'Latitud': 'no label', 'Longitud': 'no label', });
lyr_c_agua_cuadrantes_2.set('fieldLabels', {'OBJECTID': 'no label', 'NOMBRE': 'no label', 'SUBTIPO': 'no label', 'SECTOR': 'no label', 'CODCUE': 'no label', 'CUENCA': 'no label', 'CODSCUE': 'no label', 'SUBCUENCA': 'no label', 'CODMCUE': 'no label', 'MICROCUENC': 'no label', 'VINCULO': 'no label', 'AREA': 'no label', 'VOLUMEN': 'no label', 'OBSERVACIO': 'no label', 'IDTABINV': 'no label', 'CODHIDRO': 'no label', 'Shape_Length': 'no label', 'Shape_Area': 'no label', });
lyr_c_agua_cuadrantes_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});