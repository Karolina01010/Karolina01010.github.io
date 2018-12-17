$(document).ready(function(){
   var mymap = L.map('mymap',
                    {
                     center: [52.1, 21.0], 
                     zoom: 10,
                     zoomControl:true,
                     attributionControl:false
                    }
                    );
    
    var lyrORTO = L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/img/guest/ORTO/MapServer/WMSServer',
                    {
                    layers: 'Raster',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
                    }

                    );
    
    var lyrSOZO = L.tileLayer.wms('http://mapy.geoportal.gov.pl/wss/service/pub/guest/G2_SKOROWIDZE_SOZO/MapServer/WMSServer',
                    {
                    layers: 'Raster',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'          
                    }
                    );
    
    var lyrPRGWOJ = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'wojewodztwa',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrOSM = L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png');
    mymap.addLayer(lyrORTO);
    
   var baseMaps = {
       "OpenStreetMaps":lyrOSM,
       "ORTOFOTOMAPA":lyrORTO,
       "Mapa Sozologiczna":lyrSOZO
       
   };
    
    
    
    //lista obiektów typucheckbox
    
    var overlays = {"Wykaz Wojewodztw": lyrPRGWOJ};
    
    
    
    
    

    L.control.layers(baseMaps,overlays).addTo(mymap);
    
    L.control.scale({imperial:false}).addTo(mymap);

    
    
});