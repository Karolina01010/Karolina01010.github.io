$(document).ready(function(){
   var mymap = L.map('mymap',
                    {
                     center: [50.02, 22.0], 
                     zoom: 12,
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
    
    var lyrPRGWody_liniowe = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'woda_l',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRGWody_powierz = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'woda_p',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRG_Drogi = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'drogi',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRG_Kolej = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'kolej',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRG_Szkoly = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'szkola',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRG_Wiezenia = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'wiezienia',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRG_Cmentarze = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'cmentarze',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRG_Rekreacja = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 't_rekre',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRG_Mieszkaniowe = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 't_mieszkaniowe',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    
    var lyrPRG_Szkoly = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'szkoly',
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
    

    var overlays = {"Wykaz Wojewodztw": lyrPRGWOJ,
                    "Wody liniowe": lyrPRGWody_liniowe,
                    "Wody powierzchniowe": lyrPRGWody_powierz,
                    "Drogi": lyrPRG_Drogi,
                    "Kolej": lyrPRG_Kolej,
                    "Szkoły": lyrPRG_Szkoly,
                    "Więzienia": lyrPRG_Wiezenia,
                    "Cmentarze": lyrPRG_Cmentarze,
                    "Tereny rekreacyjne": lyrPRG_Rekreacja,
                    "Osiedla mieszkaniowe": lyrPRG_Mieszkaniowe,
               
                              
                   };



    
    

    L.control.layers(baseMaps,overlays).addTo(mymap);
    
    L.control.scale({imperial:false}).addTo(mymap);

    
    
});