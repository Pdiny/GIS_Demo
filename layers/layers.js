var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_GoogleMapSatellite_1 = new ol.layer.Tile({
            'title': 'Google Map Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=s&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMapsHybrid_2 = new ol.layer.Tile({
            'title': 'GoogleMaps Hybrid',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=y&hl=en&x={x}&y={y}&z={z}'
            })
        });

        var lyr_GoogleMaps_3 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=r&x={x}&y={y}&z={z}'
            })
        });
var format_CATrailtoHumbolt_4 = new ol.format.GeoJSON();
var features_CATrailtoHumbolt_4 = format_CATrailtoHumbolt_4.readFeatures(json_CATrailtoHumbolt_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CATrailtoHumbolt_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CATrailtoHumbolt_4.addFeatures(features_CATrailtoHumbolt_4);cluster_CATrailtoHumbolt_4 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_CATrailtoHumbolt_4
});
var lyr_CATrailtoHumbolt_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_CATrailtoHumbolt_4, 
                style: style_CATrailtoHumbolt_4,
                popuplayertitle: "CA Trail to Humbolt",
                interactive: true,
                title: '<img src="styles/legend/CATrailtoHumbolt_4.png" /> CA Trail to Humbolt'
            });
var format_MormonTrail_5 = new ol.format.GeoJSON();
var features_MormonTrail_5 = format_MormonTrail_5.readFeatures(json_MormonTrail_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MormonTrail_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MormonTrail_5.addFeatures(features_MormonTrail_5);
var lyr_MormonTrail_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MormonTrail_5, 
                style: style_MormonTrail_5,
                popuplayertitle: "Mormon Trail",
                interactive: false,
                title: '<img src="styles/legend/MormonTrail_5.png" /> Mormon Trail'
            });
var format_SantaFeTrail_6 = new ol.format.GeoJSON();
var features_SantaFeTrail_6 = format_SantaFeTrail_6.readFeatures(json_SantaFeTrail_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SantaFeTrail_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SantaFeTrail_6.addFeatures(features_SantaFeTrail_6);
var lyr_SantaFeTrail_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SantaFeTrail_6, 
                style: style_SantaFeTrail_6,
                popuplayertitle: "Santa Fe Trail",
                interactive: false,
                title: '<img src="styles/legend/SantaFeTrail_6.png" /> Santa Fe Trail'
            });
var format_PonyExpressTrail_7 = new ol.format.GeoJSON();
var features_PonyExpressTrail_7 = format_PonyExpressTrail_7.readFeatures(json_PonyExpressTrail_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PonyExpressTrail_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PonyExpressTrail_7.addFeatures(features_PonyExpressTrail_7);
var lyr_PonyExpressTrail_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PonyExpressTrail_7, 
                style: style_PonyExpressTrail_7,
                popuplayertitle: "Pony Express Trail",
                interactive: false,
                title: '<img src="styles/legend/PonyExpressTrail_7.png" /> Pony Express Trail'
            });
var format_CaliforniaTrail_8 = new ol.format.GeoJSON();
var features_CaliforniaTrail_8 = format_CaliforniaTrail_8.readFeatures(json_CaliforniaTrail_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CaliforniaTrail_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CaliforniaTrail_8.addFeatures(features_CaliforniaTrail_8);
var lyr_CaliforniaTrail_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CaliforniaTrail_8, 
                style: style_CaliforniaTrail_8,
                popuplayertitle: "California Trail",
                interactive: false,
                title: '<img src="styles/legend/CaliforniaTrail_8.png" /> California Trail'
            });
var format_OregonTrail_9 = new ol.format.GeoJSON();
var features_OregonTrail_9 = format_OregonTrail_9.readFeatures(json_OregonTrail_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OregonTrail_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OregonTrail_9.addFeatures(features_OregonTrail_9);
var lyr_OregonTrail_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OregonTrail_9, 
                style: style_OregonTrail_9,
                popuplayertitle: "Oregon Trail",
                interactive: false,
                title: '<img src="styles/legend/OregonTrail_9.png" /> Oregon Trail'
            });
var format_LavaRidgeArea_10 = new ol.format.GeoJSON();
var features_LavaRidgeArea_10 = format_LavaRidgeArea_10.readFeatures(json_LavaRidgeArea_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LavaRidgeArea_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LavaRidgeArea_10.addFeatures(features_LavaRidgeArea_10);
var lyr_LavaRidgeArea_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LavaRidgeArea_10, 
                style: style_LavaRidgeArea_10,
                popuplayertitle: "Lava Ridge Area",
                interactive: false,
                title: '<img src="styles/legend/LavaRidgeArea_10.png" /> Lava Ridge Area'
            });
var format_B2HRoute_11 = new ol.format.GeoJSON();
var features_B2HRoute_11 = format_B2HRoute_11.readFeatures(json_B2HRoute_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_B2HRoute_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_B2HRoute_11.addFeatures(features_B2HRoute_11);
var lyr_B2HRoute_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_B2HRoute_11, 
                style: style_B2HRoute_11,
                popuplayertitle: "B2H Route",
                interactive: false,
                title: '<img src="styles/legend/B2HRoute_11.png" /> B2H Route'
            });
var format_Development_12 = new ol.format.GeoJSON();
var features_Development_12 = format_Development_12.readFeatures(json_Development_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Development_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Development_12.addFeatures(features_Development_12);
var lyr_Development_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Development_12, 
                style: style_Development_12,
                popuplayertitle: "Development",
                interactive: true,
                title: '<img src="styles/legend/Development_12.png" /> Development'
            });
var format_Tower_13 = new ol.format.GeoJSON();
var features_Tower_13 = format_Tower_13.readFeatures(json_Tower_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tower_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tower_13.addFeatures(features_Tower_13);cluster_Tower_13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource_Tower_13
});
var lyr_Tower_13 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Tower_13, 
                style: style_Tower_13,
                popuplayertitle: "Tower",
                interactive: true,
                title: '<img src="styles/legend/Tower_13.png" /> Tower'
            });
var format_Wind_14 = new ol.format.GeoJSON();
var features_Wind_14 = format_Wind_14.readFeatures(json_Wind_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Wind_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Wind_14.addFeatures(features_Wind_14);
var lyr_Wind_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Wind_14, 
                style: style_Wind_14,
                popuplayertitle: "Wind",
                interactive: true,
                title: '<img src="styles/legend/Wind_14.png" /> Wind'
            });
var format_Solar_15 = new ol.format.GeoJSON();
var features_Solar_15 = format_Solar_15.readFeatures(json_Solar_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Solar_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Solar_15.addFeatures(features_Solar_15);
var lyr_Solar_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Solar_15, 
                style: style_Solar_15,
                popuplayertitle: "Solar",
                interactive: true,
                title: '<img src="styles/legend/Solar_15.png" /> Solar'
            });
var format_Transmission_16 = new ol.format.GeoJSON();
var features_Transmission_16 = format_Transmission_16.readFeatures(json_Transmission_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Transmission_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Transmission_16.addFeatures(features_Transmission_16);
var lyr_Transmission_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Transmission_16, 
                style: style_Transmission_16,
                popuplayertitle: "Transmission",
                interactive: true,
                title: '<img src="styles/legend/Transmission_16.png" /> Transmission'
            });
var group_PROJECTS = new ol.layer.Group({
                                layers: [lyr_Development_12,lyr_Tower_13,lyr_Wind_14,lyr_Solar_15,lyr_Transmission_16,],
                                fold: "open",
                                title: "PROJECTS"});
var group_B2H = new ol.layer.Group({
                                layers: [lyr_B2HRoute_11,],
                                fold: "open",
                                title: "B2H"});
var group_LavaRidge = new ol.layer.Group({
                                layers: [lyr_LavaRidgeArea_10,],
                                fold: "open",
                                title: "Lava Ridge"});
var group_TrailRoutes = new ol.layer.Group({
                                layers: [lyr_MormonTrail_5,lyr_SantaFeTrail_6,lyr_PonyExpressTrail_7,lyr_CaliforniaTrail_8,lyr_OregonTrail_9,],
                                fold: "open",
                                title: "Trail Routes"});
var group_BaseMap = new ol.layer.Group({
                                layers: [lyr_OpenStreetMap_0,lyr_GoogleMapSatellite_1,lyr_GoogleMapsHybrid_2,lyr_GoogleMaps_3,],
                                fold: "open",
                                title: "Base Map"});

lyr_OpenStreetMap_0.setVisible(true);lyr_GoogleMapSatellite_1.setVisible(true);lyr_GoogleMapsHybrid_2.setVisible(true);lyr_GoogleMaps_3.setVisible(true);lyr_CATrailtoHumbolt_4.setVisible(false);lyr_MormonTrail_5.setVisible(false);lyr_SantaFeTrail_6.setVisible(false);lyr_PonyExpressTrail_7.setVisible(false);lyr_CaliforniaTrail_8.setVisible(true);lyr_OregonTrail_9.setVisible(true);lyr_LavaRidgeArea_10.setVisible(false);lyr_B2HRoute_11.setVisible(false);lyr_Development_12.setVisible(true);lyr_Tower_13.setVisible(true);lyr_Wind_14.setVisible(true);lyr_Solar_15.setVisible(true);lyr_Transmission_16.setVisible(true);
var layersList = [group_BaseMap,lyr_CATrailtoHumbolt_4,group_TrailRoutes,group_LavaRidge,group_B2H,group_PROJECTS];
lyr_CATrailtoHumbolt_4.set('fieldAliases', {'Name': 'Name', 'Description': 'Description', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_MormonTrail_5.set('fieldAliases', {'Id': 'Id', 'DateSent': 'DateSent', 'mile_check': 'mile_check', 'GlobalID': 'GlobalID', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', });
lyr_SantaFeTrail_6.set('fieldAliases', {'TRNAME': 'TRNAME', 'TRALTNAME': 'TRALTNAME', 'TRNUMBER': 'TRNUMBER', 'TRTYPE': 'TRTYPE', 'TYPEROUTE': 'TYPEROUTE', 'ADMINORG': 'ADMINORG', 'MANAGINGOR': 'MANAGINGOR', 'NATTRDESIG': 'NATTRDESIG', 'NHTNSTADMI': 'NHTNSTADMI', 'NHTPUBLICU': 'NHTPUBLICU', 'SHAREDSYST': 'SHAREDSYST', 'ROADSYSTEM': 'ROADSYSTEM', 'STATE': 'STATE', 'COUNTY': 'COUNTY', 'EDITDATE': 'EDITDATE', 'MAPMETHOD': 'MAPMETHOD', 'XYACCURACY': 'XYACCURACY', 'AGENCYDATA': 'AGENCYDATA', 'NOTES': 'NOTES', 'FEATUREID': 'FEATUREID', 'GEOMETRYID': 'GEOMETRYID', 'PUBLICDISP': 'PUBLICDISP', 'DATAACCESS': 'DATAACCESS', 'UNITCODE': 'UNITCODE', 'UNITNAME': 'UNITNAME', 'GROUPCODE': 'GROUPCODE', 'GROUPNAME': 'GROUPNAME', 'REGIONCODE': 'REGIONCODE', 'CREATEDATE': 'CREATEDATE', 'CREATEUSER': 'CREATEUSER', 'EDITUSER': 'EDITUSER', 'MAPSOURCE': 'MAPSOURCE', 'SOURCEDATE': 'SOURCEDATE', 'ROUTENAME': 'ROUTENAME', 'GlobalID': 'GlobalID', });
lyr_PonyExpressTrail_7.set('fieldAliases', {'Id': 'Id', 'DateSent': 'DateSent', 'GlobalID': 'GlobalID', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', });
lyr_CaliforniaTrail_8.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_OregonTrail_9.set('fieldAliases', {'Id': 'Id', 'DateSent': 'DateSent', 'GlobalID': 'GlobalID', 'CreationDa': 'CreationDa', 'Creator': 'Creator', 'EditDate': 'EditDate', 'Editor': 'Editor', });
lyr_LavaRidgeArea_10.set('fieldAliases', {'id': 'id', 'name': 'name', 'descrption': 'descrption', });
lyr_B2HRoute_11.set('fieldAliases', {'begin': 'begin', 'end': 'end', });
lyr_Development_12.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Type': 'Type', 'Status': 'Status', 'Site_Address': 'Site_Address', 'Site_City': 'Site_City', 'Site_State': 'Site_State', 'Preservation Officer': 'Preservation Officer', 'Y-Cor': 'Y-Cor', 'X-Cor': 'X-Cor', 'Link': 'Link', 'Export': 'Export', });
lyr_Tower_13.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Type': 'Type', 'Status': 'Status', 'Site_Address': 'Site_Address', 'Site_City': 'Site_City', 'Site_State': 'Site_State', 'Preservation Officer': 'Preservation Officer', 'Y-Cor': 'Y-Cor', 'X-Cor': 'X-Cor', 'Link': 'Link', 'Export': 'Export', });
lyr_Wind_14.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Type': 'Type', 'Status': 'Status', 'Site_Address': 'Site_Address', 'Site_City': 'Site_City', 'Site_State': 'Site_State', 'Preservation Officer': 'Preservation Officer', 'Y-Cor': 'Y-Cor', 'X-Cor': 'X-Cor', 'Link': 'Link', 'Export': 'Export', });
lyr_Solar_15.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Type': 'Type', 'Status': 'Status', 'Site_Address': 'Site_Address', 'Site_City': 'Site_City', 'Site_State': 'Site_State', 'Preservation Officer': 'Preservation Officer', 'Y-Cor': 'Y-Cor', 'X-Cor': 'X-Cor', 'Link': 'Link', 'Export': 'Export', });
lyr_Transmission_16.set('fieldAliases', {'ID': 'ID', 'Name': 'Name', 'Type': 'Type', 'Status': 'Status', 'Site_Address': 'Site_Address', 'Site_City': 'Site_City', 'Site_State': 'Site_State', 'Preservation Officer': 'Preservation Officer', 'Y-Cor': 'Y-Cor', 'X-Cor': 'X-Cor', 'Link': 'Link', 'Export': 'Export', });
lyr_CATrailtoHumbolt_4.set('fieldImages', {'Name': 'TextEdit', 'Description': 'TextEdit', 'Latitude': 'Hidden', 'Longitude': 'Hidden', });
lyr_MormonTrail_5.set('fieldImages', {'Id': 'TextEdit', 'DateSent': 'DateTime', 'mile_check': 'TextEdit', 'GlobalID': 'TextEdit', 'CreationDa': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', });
lyr_SantaFeTrail_6.set('fieldImages', {'TRNAME': 'TextEdit', 'TRALTNAME': 'TextEdit', 'TRNUMBER': 'TextEdit', 'TRTYPE': 'TextEdit', 'TYPEROUTE': 'TextEdit', 'ADMINORG': 'TextEdit', 'MANAGINGOR': 'TextEdit', 'NATTRDESIG': 'TextEdit', 'NHTNSTADMI': 'TextEdit', 'NHTPUBLICU': 'TextEdit', 'SHAREDSYST': 'TextEdit', 'ROADSYSTEM': 'TextEdit', 'STATE': 'TextEdit', 'COUNTY': 'TextEdit', 'EDITDATE': 'DateTime', 'MAPMETHOD': 'TextEdit', 'XYACCURACY': 'TextEdit', 'AGENCYDATA': 'TextEdit', 'NOTES': 'TextEdit', 'FEATUREID': 'TextEdit', 'GEOMETRYID': 'TextEdit', 'PUBLICDISP': 'TextEdit', 'DATAACCESS': 'TextEdit', 'UNITCODE': 'TextEdit', 'UNITNAME': 'TextEdit', 'GROUPCODE': 'TextEdit', 'GROUPNAME': 'TextEdit', 'REGIONCODE': 'TextEdit', 'CREATEDATE': 'DateTime', 'CREATEUSER': 'TextEdit', 'EDITUSER': 'TextEdit', 'MAPSOURCE': 'TextEdit', 'SOURCEDATE': 'DateTime', 'ROUTENAME': 'TextEdit', 'GlobalID': 'TextEdit', });
lyr_PonyExpressTrail_7.set('fieldImages', {'Id': 'TextEdit', 'DateSent': 'DateTime', 'GlobalID': 'TextEdit', 'CreationDa': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', });
lyr_CaliforniaTrail_8.set('fieldImages', {'Name': 'TextEdit', 'description': 'TextEdit', 'timestamp': 'DateTime', 'begin': 'DateTime', 'end': 'DateTime', 'altitudeMode': 'TextEdit', 'tessellate': 'Range', 'extrude': 'Range', 'visibility': 'Range', 'drawOrder': 'Range', 'icon': 'TextEdit', });
lyr_OregonTrail_9.set('fieldImages', {'Id': 'TextEdit', 'DateSent': 'DateTime', 'GlobalID': 'TextEdit', 'CreationDa': 'DateTime', 'Creator': 'TextEdit', 'EditDate': 'DateTime', 'Editor': 'TextEdit', });
lyr_LavaRidgeArea_10.set('fieldImages', {'id': 'TextEdit', 'name': 'TextEdit', 'descrption': 'TextEdit', });
lyr_B2HRoute_11.set('fieldImages', {'begin': 'TextEdit', 'end': 'TextEdit', });
lyr_Development_12.set('fieldImages', {'ID': 'Hidden', 'Name': 'TextEdit', 'Type': 'Hidden', 'Status': 'TextEdit', 'Site_Address': 'Hidden', 'Site_City': 'Hidden', 'Site_State': 'Hidden', 'Preservation Officer': 'TextEdit', 'Y-Cor': 'Hidden', 'X-Cor': 'Hidden', 'Link': 'TextEdit', 'Export': 'Hidden', });
lyr_Tower_13.set('fieldImages', {'ID': 'Hidden', 'Name': 'TextEdit', 'Type': 'Hidden', 'Status': 'TextEdit', 'Site_Address': 'Hidden', 'Site_City': 'Hidden', 'Site_State': 'Hidden', 'Preservation Officer': 'TextEdit', 'Y-Cor': 'Hidden', 'X-Cor': 'Hidden', 'Link': 'TextEdit', 'Export': 'Hidden', });
lyr_Wind_14.set('fieldImages', {'ID': 'Hidden', 'Name': 'TextEdit', 'Type': 'Hidden', 'Status': 'TextEdit', 'Site_Address': 'Hidden', 'Site_City': 'Hidden', 'Site_State': 'Hidden', 'Preservation Officer': 'TextEdit', 'Y-Cor': 'Hidden', 'X-Cor': 'Hidden', 'Link': 'TextEdit', 'Export': 'Hidden', });
lyr_Solar_15.set('fieldImages', {'ID': 'Hidden', 'Name': 'TextEdit', 'Type': 'Hidden', 'Status': 'TextEdit', 'Site_Address': 'Hidden', 'Site_City': 'Hidden', 'Site_State': 'Hidden', 'Preservation Officer': 'TextEdit', 'Y-Cor': 'Hidden', 'X-Cor': 'Hidden', 'Link': 'TextEdit', 'Export': 'Hidden', });
lyr_Transmission_16.set('fieldImages', {'ID': 'Hidden', 'Name': 'TextEdit', 'Type': 'Hidden', 'Status': 'TextEdit', 'Site_Address': 'Hidden', 'Site_City': 'Hidden', 'Site_State': 'Hidden', 'Preservation Officer': 'TextEdit', 'Y-Cor': 'Hidden', 'X-Cor': 'Hidden', 'Link': 'TextEdit', 'Export': 'Hidden', });
lyr_CATrailtoHumbolt_4.set('fieldLabels', {'Name': 'no label', 'Description': 'no label', });
lyr_MormonTrail_5.set('fieldLabels', {'Id': 'header label - always visible', 'DateSent': 'inline label - visible with data', 'mile_check': 'no label', 'GlobalID': 'inline label - visible with data', 'CreationDa': 'inline label - visible with data', 'Creator': 'inline label - always visible', 'EditDate': 'inline label - visible with data', 'Editor': 'inline label - visible with data', });
lyr_SantaFeTrail_6.set('fieldLabels', {'TRNAME': 'inline label - visible with data', 'TRALTNAME': 'inline label - visible with data', 'TRNUMBER': 'inline label - visible with data', 'TRTYPE': 'inline label - visible with data', 'TYPEROUTE': 'inline label - visible with data', 'ADMINORG': 'inline label - visible with data', 'MANAGINGOR': 'inline label - visible with data', 'NATTRDESIG': 'inline label - visible with data', 'NHTNSTADMI': 'inline label - visible with data', 'NHTPUBLICU': 'inline label - visible with data', 'SHAREDSYST': 'inline label - visible with data', 'ROADSYSTEM': 'inline label - visible with data', 'STATE': 'inline label - visible with data', 'COUNTY': 'inline label - visible with data', 'EDITDATE': 'inline label - visible with data', 'MAPMETHOD': 'inline label - visible with data', 'XYACCURACY': 'inline label - visible with data', 'AGENCYDATA': 'inline label - visible with data', 'NOTES': 'inline label - visible with data', 'FEATUREID': 'inline label - visible with data', 'GEOMETRYID': 'inline label - visible with data', 'PUBLICDISP': 'inline label - visible with data', 'DATAACCESS': 'inline label - visible with data', 'UNITCODE': 'inline label - visible with data', 'UNITNAME': 'inline label - visible with data', 'GROUPCODE': 'inline label - visible with data', 'GROUPNAME': 'inline label - visible with data', 'REGIONCODE': 'inline label - visible with data', 'CREATEDATE': 'inline label - visible with data', 'CREATEUSER': 'inline label - visible with data', 'EDITUSER': 'inline label - visible with data', 'MAPSOURCE': 'header label - visible with data', 'SOURCEDATE': 'no label', 'ROUTENAME': 'inline label - visible with data', 'GlobalID': 'inline label - visible with data', });
lyr_PonyExpressTrail_7.set('fieldLabels', {'Id': 'hidden field', 'DateSent': 'inline label - visible with data', 'GlobalID': 'inline label - visible with data', 'CreationDa': 'hidden field', 'Creator': 'no label', 'EditDate': 'hidden field', 'Editor': 'inline label - visible with data', });
lyr_CaliforniaTrail_8.set('fieldLabels', {'Name': 'hidden field', 'description': 'inline label - visible with data', 'timestamp': 'inline label - visible with data', 'begin': 'inline label - visible with data', 'end': 'inline label - visible with data', 'altitudeMode': 'inline label - visible with data', 'tessellate': 'inline label - visible with data', 'extrude': 'inline label - visible with data', 'visibility': 'inline label - visible with data', 'drawOrder': 'inline label - visible with data', 'icon': 'inline label - visible with data', });
lyr_OregonTrail_9.set('fieldLabels', {'Id': 'inline label - visible with data', 'DateSent': 'inline label - visible with data', 'GlobalID': 'hidden field', 'CreationDa': 'inline label - visible with data', 'Creator': 'inline label - visible with data', 'EditDate': 'no label', 'Editor': 'inline label - visible with data', });
lyr_LavaRidgeArea_10.set('fieldLabels', {'id': 'inline label - visible with data', 'name': 'inline label - visible with data', 'descrption': 'inline label - visible with data', });
lyr_B2HRoute_11.set('fieldLabels', {'begin': 'inline label - visible with data', 'end': 'no label', });
lyr_Development_12.set('fieldLabels', {'Name': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Preservation Officer': 'inline label - visible with data', 'Link': 'inline label - visible with data', });
lyr_Tower_13.set('fieldLabels', {'Name': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Preservation Officer': 'inline label - visible with data', 'Link': 'inline label - visible with data', });
lyr_Wind_14.set('fieldLabels', {'Name': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Preservation Officer': 'inline label - visible with data', 'Link': 'inline label - visible with data', });
lyr_Solar_15.set('fieldLabels', {'Name': 'inline label - visible with data', 'Status': 'header label - visible with data', 'Preservation Officer': 'inline label - visible with data', 'Link': 'inline label - visible with data', });
lyr_Transmission_16.set('fieldLabels', {'Name': 'inline label - visible with data', 'Status': 'inline label - visible with data', 'Preservation Officer': 'inline label - visible with data', 'Link': 'inline label - visible with data', });
lyr_Transmission_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});