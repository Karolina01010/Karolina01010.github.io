$(document).ready(function(){
   var mymap = L.map('mymap',
                    {
<<<<<<< HEAD
                     center: [50.02, 22.0], 
                     zoom: 12,
=======
                     center: [52.1, 21.0], //zmienic tutaj współrzędne na ten teren !!! dla buforów puste tła 
                     zoom: 10,
>>>>>>> f28aba968f54e9750c796ba4c9d1b1d522ee7289
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
                    layers: 'Raster',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRGWody_powierz = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'Raster',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRG_Drogi = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'Raster',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRG_Kolej = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'Raster',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRG_Szkoly = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'Raster',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRG_Wiezenia = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'Raster',
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
                    layers: 'Raster',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRG_Mieszkaniowe = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'Raster',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRG_Najlep_szkoly = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'Raster',
                    format:'image/png',
                    transparent: 'true',
                    version:'1.1.1'
    } 
    );
    
    var lyrPRG_Szkoly = L.tileLayer.wms('http://localhost:8080/geoserver/ATE_Workspace/wms',
                    {
                    layers: 'Raster',
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
    
<<<<<<< HEAD
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
                    "Szkoły w gminie": lyrPRG_Szkoly,
                    "Najlepsza lokalizacja szkół": lyrPRG_Najlep_szkoly                    
                   };
=======
    var overlays = {"Wykaz Wojewodztw": lyrPRGWOJ};
>>>>>>> f28aba968f54e9750c796ba4c9d1b1d522ee7289
    
    

    L.control.layers(baseMaps,overlays).addTo(mymap);
    
    L.control.scale({imperial:false}).addTo(mymap);

    
    
});