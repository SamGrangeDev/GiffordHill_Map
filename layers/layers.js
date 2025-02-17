var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });

        var lyr_ESRISatelliteArcGISWorld_Imagery_1 = new ol.layer.Tile({
            'title': 'ESRI Satellite (ArcGIS/World_Imagery)',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Conservation_2 = new ol.format.GeoJSON();
var features_Conservation_2 = format_Conservation_2.readFeatures(json_Conservation_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Conservation_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Conservation_2.addFeatures(features_Conservation_2);
var lyr_Conservation_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Conservation_2, 
                style: style_Conservation_2,
                popuplayertitle: 'Conservation',
                interactive: false,
                title: '<img src="styles/legend/Conservation_2.png" /> Conservation'
            });
var format_MasterplannedNeighborhood_3 = new ol.format.GeoJSON();
var features_MasterplannedNeighborhood_3 = format_MasterplannedNeighborhood_3.readFeatures(json_MasterplannedNeighborhood_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasterplannedNeighborhood_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasterplannedNeighborhood_3.addFeatures(features_MasterplannedNeighborhood_3);
var lyr_MasterplannedNeighborhood_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasterplannedNeighborhood_3, 
                style: style_MasterplannedNeighborhood_3,
                popuplayertitle: 'Masterplanned Neighborhood',
                interactive: false,
                title: '<img src="styles/legend/MasterplannedNeighborhood_3.png" /> Masterplanned Neighborhood'
            });
var format_Recreation_4 = new ol.format.GeoJSON();
var features_Recreation_4 = format_Recreation_4.readFeatures(json_Recreation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recreation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recreation_4.addFeatures(features_Recreation_4);
var lyr_Recreation_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Recreation_4, 
                style: style_Recreation_4,
                popuplayertitle: 'Recreation',
                interactive: false,
                title: '<img src="styles/legend/Recreation_4.png" /> Recreation'
            });
var format_RuralLiving_5 = new ol.format.GeoJSON();
var features_RuralLiving_5 = format_RuralLiving_5.readFeatures(json_RuralLiving_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RuralLiving_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RuralLiving_5.addFeatures(features_RuralLiving_5);
var lyr_RuralLiving_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RuralLiving_5, 
                style: style_RuralLiving_5,
                popuplayertitle: 'Rural Living',
                interactive: false,
                title: '<img src="styles/legend/RuralLiving_5.png" /> Rural Living'
            });
var format_Rural_6 = new ol.format.GeoJSON();
var features_Rural_6 = format_Rural_6.readFeatures(json_Rural_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rural_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rural_6.addFeatures(features_Rural_6);
var lyr_Rural_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rural_6, 
                style: style_Rural_6,
                popuplayertitle: 'Rural',
                interactive: false,
                title: '<img src="styles/legend/Rural_6.png" /> Rural'
            });
var format_ActivityCentre_7 = new ol.format.GeoJSON();
var features_ActivityCentre_7 = format_ActivityCentre_7.readFeatures(json_ActivityCentre_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ActivityCentre_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ActivityCentre_7.addFeatures(features_ActivityCentre_7);
var lyr_ActivityCentre_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ActivityCentre_7, 
                style: style_ActivityCentre_7,
                popuplayertitle: 'Activity Centre',
                interactive: false,
                title: '<img src="styles/legend/ActivityCentre_7.png" /> Activity Centre'
            });
var lyr_MurrayBridgeStructurePlan_8 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Murray Bridge Structure Plan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/MurrayBridgeStructurePlan_8.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15494558.905200, -4187029.089400, 15509198.849700, -4175917.896400]
                            })
                        });
var lyr_GiffordHillConceptMasterplan_9 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Gifford Hill Concept Masterplan',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/GiffordHillConceptMasterplan_9.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15494604.351000, -4187033.217900, 15503919.598900, -4182344.731800]
                            })
                        });
var lyr_GHConceptMasterplanPrecinct1A_10 = new ol.layer.Image({
                            opacity: 1,
                            title: 'GH Concept Masterplan Precinct 1A',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/GHConceptMasterplanPrecinct1A_10.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15500457.765700, -4186013.118600, 15502679.690200, -4183405.822000]
                            })
                        });
var format_Masterplansubprecinct1B_11 = new ol.format.GeoJSON();
var features_Masterplansubprecinct1B_11 = format_Masterplansubprecinct1B_11.readFeatures(json_Masterplansubprecinct1B_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Masterplansubprecinct1B_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Masterplansubprecinct1B_11.addFeatures(features_Masterplansubprecinct1B_11);
var lyr_Masterplansubprecinct1B_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Masterplansubprecinct1B_11, 
                style: style_Masterplansubprecinct1B_11,
                popuplayertitle: 'Masterplan sub precinct 1B',
                interactive: false,
                title: '<img src="styles/legend/Masterplansubprecinct1B_11.png" /> Masterplan sub precinct 1B'
            });
var lyr_WWTFPotableBasins_12 = new ol.layer.Image({
                            opacity: 1,
                            title: 'WWTF Potable Basins',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/WWTFPotableBasins_12.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15499528.537500, -4187868.838100, 15501376.354500, -4186945.897100]
                            })
                        });
var lyr_Stages15LD_13 = new ol.layer.Image({
                            opacity: 1,
                            title: 'Stages 1-5 LD',
                            
                            
                            source: new ol.source.ImageStatic({
                                url: "./layers/Stages15LD_13.png",
                                attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [15501742.683012, -4185001.897719, 15502515.550316, -4184287.737940]
                            })
                        });
var format_AffordableHousing_14 = new ol.format.GeoJSON();
var features_AffordableHousing_14 = format_AffordableHousing_14.readFeatures(json_AffordableHousing_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AffordableHousing_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AffordableHousing_14.addFeatures(features_AffordableHousing_14);
var lyr_AffordableHousing_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AffordableHousing_14, 
                style: style_AffordableHousing_14,
                popuplayertitle: 'Affordable Housing',
                interactive: false,
                title: '<img src="styles/legend/AffordableHousing_14.png" /> Affordable Housing'
            });
var format_EnvironmentandFoodProductionArea_15 = new ol.format.GeoJSON();
var features_EnvironmentandFoodProductionArea_15 = format_EnvironmentandFoodProductionArea_15.readFeatures(json_EnvironmentandFoodProductionArea_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EnvironmentandFoodProductionArea_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EnvironmentandFoodProductionArea_15.addFeatures(features_EnvironmentandFoodProductionArea_15);
var lyr_EnvironmentandFoodProductionArea_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EnvironmentandFoodProductionArea_15, 
                style: style_EnvironmentandFoodProductionArea_15,
                popuplayertitle: 'Environment and Food ProductionArea',
                interactive: false,
                title: '<img src="styles/legend/EnvironmentandFoodProductionArea_15.png" /> Environment and Food ProductionArea'
            });
var format_GasandLiquidPetroleumPipelines_16 = new ol.format.GeoJSON();
var features_GasandLiquidPetroleumPipelines_16 = format_GasandLiquidPetroleumPipelines_16.readFeatures(json_GasandLiquidPetroleumPipelines_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GasandLiquidPetroleumPipelines_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GasandLiquidPetroleumPipelines_16.addFeatures(features_GasandLiquidPetroleumPipelines_16);
var lyr_GasandLiquidPetroleumPipelines_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GasandLiquidPetroleumPipelines_16, 
                style: style_GasandLiquidPetroleumPipelines_16,
                popuplayertitle: 'Gas and Liquid Petroleum Pipelines',
                interactive: false,
                title: '<img src="styles/legend/GasandLiquidPetroleumPipelines_16.png" /> Gas and Liquid Petroleum Pipelines'
            });
var format_StateSignificantNativeVegetation_17 = new ol.format.GeoJSON();
var features_StateSignificantNativeVegetation_17 = format_StateSignificantNativeVegetation_17.readFeatures(json_StateSignificantNativeVegetation_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_StateSignificantNativeVegetation_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_StateSignificantNativeVegetation_17.addFeatures(features_StateSignificantNativeVegetation_17);
var lyr_StateSignificantNativeVegetation_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_StateSignificantNativeVegetation_17, 
                style: style_StateSignificantNativeVegetation_17,
                popuplayertitle: 'State Significant Native Vegetation',
                interactive: false,
                title: '<img src="styles/legend/StateSignificantNativeVegetation_17.png" /> State Significant Native Vegetation'
            });
var format_HazardsBushfireGeneralRisk_18 = new ol.format.GeoJSON();
var features_HazardsBushfireGeneralRisk_18 = format_HazardsBushfireGeneralRisk_18.readFeatures(json_HazardsBushfireGeneralRisk_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HazardsBushfireGeneralRisk_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HazardsBushfireGeneralRisk_18.addFeatures(features_HazardsBushfireGeneralRisk_18);
var lyr_HazardsBushfireGeneralRisk_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HazardsBushfireGeneralRisk_18, 
                style: style_HazardsBushfireGeneralRisk_18,
                popuplayertitle: 'Hazards Bushfire General Risk',
                interactive: false,
                title: '<img src="styles/legend/HazardsBushfireGeneralRisk_18.png" /> Hazards Bushfire General Risk'
            });
var format_HazardsBushfireMediumRisk_19 = new ol.format.GeoJSON();
var features_HazardsBushfireMediumRisk_19 = format_HazardsBushfireMediumRisk_19.readFeatures(json_HazardsBushfireMediumRisk_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_HazardsBushfireMediumRisk_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_HazardsBushfireMediumRisk_19.addFeatures(features_HazardsBushfireMediumRisk_19);
var lyr_HazardsBushfireMediumRisk_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_HazardsBushfireMediumRisk_19, 
                style: style_HazardsBushfireMediumRisk_19,
                popuplayertitle: 'Hazards Bushfire Medium Risk',
                interactive: false,
                title: '<img src="styles/legend/HazardsBushfireMediumRisk_19.png" /> Hazards Bushfire Medium Risk'
            });
var format_LimitedLandDivision_20 = new ol.format.GeoJSON();
var features_LimitedLandDivision_20 = format_LimitedLandDivision_20.readFeatures(json_LimitedLandDivision_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LimitedLandDivision_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LimitedLandDivision_20.addFeatures(features_LimitedLandDivision_20);
var lyr_LimitedLandDivision_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LimitedLandDivision_20, 
                style: style_LimitedLandDivision_20,
                popuplayertitle: 'Limited Land Division',
                interactive: false,
                title: '<img src="styles/legend/LimitedLandDivision_20.png" /> Limited Land Division'
            });
var format_MajorUrbanTransportRoutes_21 = new ol.format.GeoJSON();
var features_MajorUrbanTransportRoutes_21 = format_MajorUrbanTransportRoutes_21.readFeatures(json_MajorUrbanTransportRoutes_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorUrbanTransportRoutes_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorUrbanTransportRoutes_21.addFeatures(features_MajorUrbanTransportRoutes_21);
var lyr_MajorUrbanTransportRoutes_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorUrbanTransportRoutes_21, 
                style: style_MajorUrbanTransportRoutes_21,
                popuplayertitle: 'Major Urban Transport Routes',
                interactive: false,
                title: '<img src="styles/legend/MajorUrbanTransportRoutes_21.png" /> Major Urban Transport Routes'
            });
var format_MurrayDarlingBasin_22 = new ol.format.GeoJSON();
var features_MurrayDarlingBasin_22 = format_MurrayDarlingBasin_22.readFeatures(json_MurrayDarlingBasin_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MurrayDarlingBasin_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MurrayDarlingBasin_22.addFeatures(features_MurrayDarlingBasin_22);
var lyr_MurrayDarlingBasin_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MurrayDarlingBasin_22, 
                style: style_MurrayDarlingBasin_22,
                popuplayertitle: 'Murray Darling Basin',
                interactive: false,
                title: '<img src="styles/legend/MurrayDarlingBasin_22.png" /> Murray Darling Basin'
            });
var format_NativeVegetation_23 = new ol.format.GeoJSON();
var features_NativeVegetation_23 = format_NativeVegetation_23.readFeatures(json_NativeVegetation_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NativeVegetation_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NativeVegetation_23.addFeatures(features_NativeVegetation_23);
var lyr_NativeVegetation_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NativeVegetation_23, 
                style: style_NativeVegetation_23,
                popuplayertitle: 'Native Vegetation',
                interactive: false,
                title: '<img src="styles/legend/NativeVegetation_23.png" /> Native Vegetation'
            });
var format_NoiseandAirEmissions_24 = new ol.format.GeoJSON();
var features_NoiseandAirEmissions_24 = format_NoiseandAirEmissions_24.readFeatures(json_NoiseandAirEmissions_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NoiseandAirEmissions_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NoiseandAirEmissions_24.addFeatures(features_NoiseandAirEmissions_24);
var lyr_NoiseandAirEmissions_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NoiseandAirEmissions_24, 
                style: style_NoiseandAirEmissions_24,
                popuplayertitle: 'Noise and Air Emissions',
                interactive: false,
                title: '<img src="styles/legend/NoiseandAirEmissions_24.png" /> Noise and Air Emissions'
            });
var format_NonstopCorridor_25 = new ol.format.GeoJSON();
var features_NonstopCorridor_25 = format_NonstopCorridor_25.readFeatures(json_NonstopCorridor_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NonstopCorridor_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NonstopCorridor_25.addFeatures(features_NonstopCorridor_25);
var lyr_NonstopCorridor_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NonstopCorridor_25, 
                style: style_NonstopCorridor_25,
                popuplayertitle: 'Nonstop Corridor',
                interactive: false,
                title: '<img src="styles/legend/NonstopCorridor_25.png" /> Nonstop Corridor'
            });
var format_PrescribedWaterResourcesArea_26 = new ol.format.GeoJSON();
var features_PrescribedWaterResourcesArea_26 = format_PrescribedWaterResourcesArea_26.readFeatures(json_PrescribedWaterResourcesArea_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrescribedWaterResourcesArea_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrescribedWaterResourcesArea_26.addFeatures(features_PrescribedWaterResourcesArea_26);
var lyr_PrescribedWaterResourcesArea_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrescribedWaterResourcesArea_26, 
                style: style_PrescribedWaterResourcesArea_26,
                popuplayertitle: 'Prescribed Water Resources Area',
                interactive: false,
                title: '<img src="styles/legend/PrescribedWaterResourcesArea_26.png" /> Prescribed Water Resources Area'
            });
var format_SignificantLandscapeProtection_27 = new ol.format.GeoJSON();
var features_SignificantLandscapeProtection_27 = format_SignificantLandscapeProtection_27.readFeatures(json_SignificantLandscapeProtection_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignificantLandscapeProtection_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignificantLandscapeProtection_27.addFeatures(features_SignificantLandscapeProtection_27);
var lyr_SignificantLandscapeProtection_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SignificantLandscapeProtection_27, 
                style: style_SignificantLandscapeProtection_27,
                popuplayertitle: 'Significant Landscape Protection',
                interactive: false,
                title: '<img src="styles/legend/SignificantLandscapeProtection_27.png" /> Significant Landscape Protection'
            });
var format_TrafficGeneratingDevelopment_28 = new ol.format.GeoJSON();
var features_TrafficGeneratingDevelopment_28 = format_TrafficGeneratingDevelopment_28.readFeatures(json_TrafficGeneratingDevelopment_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TrafficGeneratingDevelopment_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TrafficGeneratingDevelopment_28.addFeatures(features_TrafficGeneratingDevelopment_28);
var lyr_TrafficGeneratingDevelopment_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TrafficGeneratingDevelopment_28, 
                style: style_TrafficGeneratingDevelopment_28,
                popuplayertitle: 'Traffic Generating Development',
                interactive: false,
                title: '<img src="styles/legend/TrafficGeneratingDevelopment_28.png" /> Traffic Generating Development'
            });
var format_WaterResources_29 = new ol.format.GeoJSON();
var features_WaterResources_29 = format_WaterResources_29.readFeatures(json_WaterResources_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_WaterResources_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_WaterResources_29.addFeatures(features_WaterResources_29);
var lyr_WaterResources_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_WaterResources_29, 
                style: style_WaterResources_29,
                popuplayertitle: 'Water Resources',
                interactive: false,
                title: '<img src="styles/legend/WaterResources_29.png" /> Water Resources'
            });
var format_AdelaideHillsWasteManagementAuthorityBuffer_30 = new ol.format.GeoJSON();
var features_AdelaideHillsWasteManagementAuthorityBuffer_30 = format_AdelaideHillsWasteManagementAuthorityBuffer_30.readFeatures(json_AdelaideHillsWasteManagementAuthorityBuffer_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AdelaideHillsWasteManagementAuthorityBuffer_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AdelaideHillsWasteManagementAuthorityBuffer_30.addFeatures(features_AdelaideHillsWasteManagementAuthorityBuffer_30);
var lyr_AdelaideHillsWasteManagementAuthorityBuffer_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AdelaideHillsWasteManagementAuthorityBuffer_30, 
                style: style_AdelaideHillsWasteManagementAuthorityBuffer_30,
                popuplayertitle: 'Adelaide Hills Waste Management Authority Buffer',
                interactive: false,
                title: '<img src="styles/legend/AdelaideHillsWasteManagementAuthorityBuffer_30.png" /> Adelaide Hills Waste Management Authority Buffer'
            });
var format_GiffordHillParcelBoundary_31 = new ol.format.GeoJSON();
var features_GiffordHillParcelBoundary_31 = format_GiffordHillParcelBoundary_31.readFeatures(json_GiffordHillParcelBoundary_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GiffordHillParcelBoundary_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GiffordHillParcelBoundary_31.addFeatures(features_GiffordHillParcelBoundary_31);
var lyr_GiffordHillParcelBoundary_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GiffordHillParcelBoundary_31, 
                style: style_GiffordHillParcelBoundary_31,
                popuplayertitle: 'Gifford Hill Parcel Boundary',
                interactive: true,
                title: '<img src="styles/legend/GiffordHillParcelBoundary_31.png" /> Gifford Hill Parcel Boundary'
            });
var format_ProjectOwnedParcels_32 = new ol.format.GeoJSON();
var features_ProjectOwnedParcels_32 = format_ProjectOwnedParcels_32.readFeatures(json_ProjectOwnedParcels_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ProjectOwnedParcels_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ProjectOwnedParcels_32.addFeatures(features_ProjectOwnedParcels_32);
var lyr_ProjectOwnedParcels_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ProjectOwnedParcels_32, 
                style: style_ProjectOwnedParcels_32,
                popuplayertitle: 'Project Owned Parcels',
                interactive: true,
                title: '<img src="styles/legend/ProjectOwnedParcels_32.png" /> Project Owned Parcels'
            });
var group_Administrative = new ol.layer.Group({
                                layers: [lyr_GiffordHillParcelBoundary_31,lyr_ProjectOwnedParcels_32,],
                                fold: "open",
                                title: 'Administrative'});
var group_Overlays = new ol.layer.Group({
                                layers: [lyr_AffordableHousing_14,lyr_EnvironmentandFoodProductionArea_15,lyr_GasandLiquidPetroleumPipelines_16,lyr_StateSignificantNativeVegetation_17,lyr_HazardsBushfireGeneralRisk_18,lyr_HazardsBushfireMediumRisk_19,lyr_LimitedLandDivision_20,lyr_MajorUrbanTransportRoutes_21,lyr_MurrayDarlingBasin_22,lyr_NativeVegetation_23,lyr_NoiseandAirEmissions_24,lyr_NonstopCorridor_25,lyr_PrescribedWaterResourcesArea_26,lyr_SignificantLandscapeProtection_27,lyr_TrafficGeneratingDevelopment_28,lyr_WaterResources_29,lyr_AdelaideHillsWasteManagementAuthorityBuffer_30,],
                                fold: "open",
                                title: 'Overlays'});
var group_Masterplans = new ol.layer.Group({
                                layers: [lyr_MurrayBridgeStructurePlan_8,lyr_GiffordHillConceptMasterplan_9,lyr_GHConceptMasterplanPrecinct1A_10,lyr_Masterplansubprecinct1B_11,lyr_WWTFPotableBasins_12,lyr_Stages15LD_13,],
                                fold: "open",
                                title: 'Masterplans'});
var group_Zoning = new ol.layer.Group({
                                layers: [lyr_Conservation_2,lyr_MasterplannedNeighborhood_3,lyr_Recreation_4,lyr_RuralLiving_5,lyr_Rural_6,lyr_ActivityCentre_7,],
                                fold: "open",
                                title: 'Zoning'});
var group_BaseLayer = new ol.layer.Group({
                                layers: [lyr_GoogleMaps_0,lyr_ESRISatelliteArcGISWorld_Imagery_1,],
                                fold: "open",
                                title: 'Base Layer'});

lyr_GoogleMaps_0.setVisible(false);lyr_ESRISatelliteArcGISWorld_Imagery_1.setVisible(true);lyr_Conservation_2.setVisible(false);lyr_MasterplannedNeighborhood_3.setVisible(false);lyr_Recreation_4.setVisible(false);lyr_RuralLiving_5.setVisible(false);lyr_Rural_6.setVisible(false);lyr_ActivityCentre_7.setVisible(false);lyr_MurrayBridgeStructurePlan_8.setVisible(false);lyr_GiffordHillConceptMasterplan_9.setVisible(false);lyr_GHConceptMasterplanPrecinct1A_10.setVisible(false);lyr_Masterplansubprecinct1B_11.setVisible(false);lyr_WWTFPotableBasins_12.setVisible(false);lyr_Stages15LD_13.setVisible(false);lyr_AffordableHousing_14.setVisible(false);lyr_EnvironmentandFoodProductionArea_15.setVisible(false);lyr_GasandLiquidPetroleumPipelines_16.setVisible(false);lyr_StateSignificantNativeVegetation_17.setVisible(false);lyr_HazardsBushfireGeneralRisk_18.setVisible(false);lyr_HazardsBushfireMediumRisk_19.setVisible(false);lyr_LimitedLandDivision_20.setVisible(false);lyr_MajorUrbanTransportRoutes_21.setVisible(false);lyr_MurrayDarlingBasin_22.setVisible(false);lyr_NativeVegetation_23.setVisible(false);lyr_NoiseandAirEmissions_24.setVisible(false);lyr_NonstopCorridor_25.setVisible(false);lyr_PrescribedWaterResourcesArea_26.setVisible(false);lyr_SignificantLandscapeProtection_27.setVisible(false);lyr_TrafficGeneratingDevelopment_28.setVisible(false);lyr_WaterResources_29.setVisible(false);lyr_AdelaideHillsWasteManagementAuthorityBuffer_30.setVisible(false);lyr_GiffordHillParcelBoundary_31.setVisible(true);lyr_ProjectOwnedParcels_32.setVisible(true);
var layersList = [group_BaseLayer,group_Zoning,group_Masterplans,group_Overlays,group_Administrative];
lyr_Conservation_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Land use': 'Land use', });
lyr_MasterplannedNeighborhood_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Land use': 'Land use', });
lyr_Recreation_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Land use': 'Land use', });
lyr_RuralLiving_5.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Land use': 'Land use', });
lyr_Rural_6.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Land use': 'Land use', });
lyr_ActivityCentre_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Land use': 'Land use', });
lyr_Masterplansubprecinct1B_11.set('fieldAliases', {'fid': 'fid', 'id': 'id', });
lyr_AffordableHousing_14.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_EnvironmentandFoodProductionArea_15.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_GasandLiquidPetroleumPipelines_16.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_StateSignificantNativeVegetation_17.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_HazardsBushfireGeneralRisk_18.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_HazardsBushfireMediumRisk_19.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_LimitedLandDivision_20.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_MajorUrbanTransportRoutes_21.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_MurrayDarlingBasin_22.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_NativeVegetation_23.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_NoiseandAirEmissions_24.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_NonstopCorridor_25.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_PrescribedWaterResourcesArea_26.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_SignificantLandscapeProtection_27.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_TrafficGeneratingDevelopment_28.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_WaterResources_29.set('fieldAliases', {'fid': 'fid', 'objectid': 'objectid', 'id': 'id', 'name': 'name', 'description': 'description', 'value': 'value', 'legalstartdate': 'legalstartdate', 'legalenddate': 'legalenddate', 'status': 'status', 'st_area(shape)': 'st_area(shape)', 'st_perimeter(shape)': 'st_perimeter(shape)', 'systemstartdate': 'systemstartdate', 'systemenddate': 'systemenddate', });
lyr_AdelaideHillsWasteManagementAuthorityBuffer_30.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'Character': 'Character', });
lyr_GiffordHillParcelBoundary_31.set('fieldAliases', {'fid': 'fid', 'Address': 'Address', 'Gross_Ha': 'Gross_Ha', 'Zoning': 'Zoning', 'Gifford Hill Lands': 'Gifford Hill Lands', 'NDH': 'NDH', });
lyr_ProjectOwnedParcels_32.set('fieldAliases', {'fid': 'fid', 'Address': 'Address', 'Zoning': 'Zoning', 'Options': 'Options', });
lyr_Conservation_2.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Land use': 'TextEdit', });
lyr_MasterplannedNeighborhood_3.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Land use': 'TextEdit', });
lyr_Recreation_4.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Land use': 'TextEdit', });
lyr_RuralLiving_5.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Land use': 'TextEdit', });
lyr_Rural_6.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Land use': 'TextEdit', });
lyr_ActivityCentre_7.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Land use': 'TextEdit', });
lyr_Masterplansubprecinct1B_11.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', });
lyr_AffordableHousing_14.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'TextEdit', });
lyr_EnvironmentandFoodProductionArea_15.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'TextEdit', 'systemenddate': 'TextEdit', });
lyr_GasandLiquidPetroleumPipelines_16.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'TextEdit', });
lyr_StateSignificantNativeVegetation_17.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'TextEdit', });
lyr_HazardsBushfireGeneralRisk_18.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'TextEdit', });
lyr_HazardsBushfireMediumRisk_19.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'TextEdit', });
lyr_LimitedLandDivision_20.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'TextEdit', });
lyr_MajorUrbanTransportRoutes_21.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'TextEdit', 'systemenddate': 'TextEdit', });
lyr_MurrayDarlingBasin_22.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'TextEdit', });
lyr_NativeVegetation_23.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'TextEdit', });
lyr_NoiseandAirEmissions_24.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'TextEdit', });
lyr_NonstopCorridor_25.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'TextEdit', 'systemenddate': 'TextEdit', });
lyr_PrescribedWaterResourcesArea_26.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'TextEdit', });
lyr_SignificantLandscapeProtection_27.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'TextEdit', });
lyr_TrafficGeneratingDevelopment_28.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'TextEdit', });
lyr_WaterResources_29.set('fieldImages', {'fid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'TextEdit', 'name': 'TextEdit', 'description': 'TextEdit', 'value': 'TextEdit', 'legalstartdate': 'DateTime', 'legalenddate': 'TextEdit', 'status': 'TextEdit', 'st_area(shape)': 'TextEdit', 'st_perimeter(shape)': 'TextEdit', 'systemstartdate': 'DateTime', 'systemenddate': 'TextEdit', });
lyr_AdelaideHillsWasteManagementAuthorityBuffer_30.set('fieldImages', {'fid': 'TextEdit', 'id': 'TextEdit', 'Character': 'TextEdit', });
lyr_GiffordHillParcelBoundary_31.set('fieldImages', {'fid': 'TextEdit', 'Address': 'TextEdit', 'Gross_Ha': 'TextEdit', 'Zoning': 'TextEdit', 'Gifford Hill Lands': 'TextEdit', 'NDH': 'TextEdit', });
lyr_ProjectOwnedParcels_32.set('fieldImages', {'fid': 'TextEdit', 'Address': 'TextEdit', 'Zoning': 'TextEdit', 'Options': 'TextEdit', });
lyr_Conservation_2.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Land use': 'hidden field', });
lyr_MasterplannedNeighborhood_3.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Land use': 'hidden field', });
lyr_Recreation_4.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Land use': 'hidden field', });
lyr_RuralLiving_5.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Land use': 'hidden field', });
lyr_Rural_6.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Land use': 'hidden field', });
lyr_ActivityCentre_7.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Land use': 'hidden field', });
lyr_Masterplansubprecinct1B_11.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', });
lyr_AffordableHousing_14.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_EnvironmentandFoodProductionArea_15.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_GasandLiquidPetroleumPipelines_16.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_StateSignificantNativeVegetation_17.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_HazardsBushfireGeneralRisk_18.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_HazardsBushfireMediumRisk_19.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_LimitedLandDivision_20.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_MajorUrbanTransportRoutes_21.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_MurrayDarlingBasin_22.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_NativeVegetation_23.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_NoiseandAirEmissions_24.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_NonstopCorridor_25.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_PrescribedWaterResourcesArea_26.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_SignificantLandscapeProtection_27.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_TrafficGeneratingDevelopment_28.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_WaterResources_29.set('fieldLabels', {'fid': 'hidden field', 'objectid': 'hidden field', 'id': 'hidden field', 'name': 'hidden field', 'description': 'hidden field', 'value': 'hidden field', 'legalstartdate': 'hidden field', 'legalenddate': 'hidden field', 'status': 'hidden field', 'st_area(shape)': 'hidden field', 'st_perimeter(shape)': 'hidden field', 'systemstartdate': 'hidden field', 'systemenddate': 'hidden field', });
lyr_AdelaideHillsWasteManagementAuthorityBuffer_30.set('fieldLabels', {'fid': 'hidden field', 'id': 'hidden field', 'Character': 'hidden field', });
lyr_GiffordHillParcelBoundary_31.set('fieldLabels', {'fid': 'hidden field', 'Address': 'inline label - visible with data', 'Gross_Ha': 'inline label - visible with data', 'Zoning': 'inline label - visible with data', 'Gifford Hill Lands': 'hidden field', 'NDH': 'inline label - visible with data', });
lyr_ProjectOwnedParcels_32.set('fieldLabels', {'fid': 'hidden field', 'Address': 'hidden field', 'Zoning': 'hidden field', 'Options': 'inline label - visible with data', });
lyr_ProjectOwnedParcels_32.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});