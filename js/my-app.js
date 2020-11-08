
var $$ = Dom7;

var app = new Framework7({
    // App root element
    root: '#app',
    // App Name
    name: 'My App',
    // App id
    id: 'com.myapp.test',
    // Enable swipe panel
    panel: {
      swipe: 'left',
    },
    // Add default routes
    routes: [
      {
        path: '/about/',
        url: 'about.html',
      },
    ]
    // ... other parameters
  });

var mainView = app.views.create('.view-main');
var idLugar=0, infoClima, lugar, arrayProv=[], arrayLocal=[], idProv, idLocal;


$$(document).on('deviceready', function() {
    console.log("Device is ready!");
});



$$(document).on('page:init', '.page[data-name="index"]', function (e) {
    obtenerInfoClima();
    var abrirPopup=app.popup.open(".popup-inicio");
    $$('#iniciar').on('click',function(){
        ordenarArrayJSON(infoClima,'name');
        ordenarArrayJSON(infoClima,'province');
        obtenerMatriz();
        completarMenuProv();
        $$('.prov').on('click',function(){
            idProv=parseInt(this.id);
            $$('#selectProv').html(arrayProv[idProv]);
            $$('#selectLocal').html('----');
            completarMenuLocal();
            $$('.local').on('click',function(){
                idLocal=parseInt(this.id)-100;
                $$('#selectLocal').html(arrayLocal[idProv][idLocal]);
                obtenerLugar(arrayProv[idProv],arrayLocal[idProv][idLocal]);
                completarInfoClima();
                iniciarMap();
            });
        });
    });
})



$$(document).on('page:init','.page[data-name="pronostico"]', function (e) {
    completarInfoClima();
})



function completarInfoClima(){
    $$('#temp_m').html(lugar[0].weather.morning_temp+'°C');
    $$('#desc_m').html(lugar[0].weather.morning_desc);
    $$('#temp_t').html(lugar[0].weather.afternoon_temp+'°C');
    $$('#desc_t').html(lugar[0].weather.afternoon_desc);    
    $$('#img_m').attr('src','https://www.weather-atlas.com/weather/images/128x128/'+lugar[0].weather.afternoon_id+'.png');
    $$('#img_t').attr('src','https://www.weather-atlas.com/weather/images/128x128/'+lugar[0].weather.afternoon_id+'.png');
}

function obtenerInfoClima(){
    url="https://ws.smn.gob.ar/map_items/forecast/1";
    app.request.json(url,function(datosRecibidos){
        infoClima=JSON.parse(JSON.stringify(datosRecibidos));
    });
}
/* Ordena tal array por tal key */
function ordenarArrayJSON(array,key){
    array.sort(function(a,b){
        if(a[key].toLowerCase()<b[key].toLowerCase())return -1;
        if(a[key].toLowerCase()>b[key].toLowerCase())return 1;
        return 0;
    });
}
/* Devuelve un array con todos los objetos de tal array que tengan tal value en tal key */
function filtroArrayJSON(array,key,value){
    x=array.filter(function(obj){
        return(obj[key]===value);
    });
    return JSON.parse(JSON.stringify(x));
}

/* cargar lista de provincias, y matriz de ciudades, analizando InfoClima (previamente ordenado)*/
function obtenerMatriz(){
    i=0,j=0,m=0;
    while(m<infoClima.length){
        arrayProv[i]=infoClima[m].province;
        aux=filtroArrayJSON(infoClima,'province',arrayProv[i]);
        n=aux.length;
        arrayLocal.push([]);
        for(j=0;j<n;j++){
            arrayLocal[i][j]=aux[j].name;
            m++;
        }
        console.log(i);
        console.log(arrayProv);
        console.log(arrayLocal);
        i++;
    }
}

function completarMenuProv(){
    for(i=0;i<arrayProv.length;i++){
        $$('#menu-provincia').append('<a class="menu-dropdown-link menu-close prov" id="'+i+'">'+arrayProv[i]+'</a>');
    }
}

function completarMenuLocal(){
    $$('#menu-localidad').html('');
    for(i=0;i<arrayLocal[idProv].length;i++){
        $$('#menu-localidad').append('<a class="menu-dropdown-link menu-close local" id="'+(100+i)+'">'+arrayLocal[idProv][i]+'</a>');
    }
}

function obtenerLugar(value1,value2){
    aux=filtroArrayJSON(infoClima,'province',value1);
    lugar=filtroArrayJSON(aux,'name',value2);
}

function iniciarMap(){
    var coord = {lat: parseFloat(lugar[0].lat) ,lng: parseFloat(lugar[0].lon)};
    var map = new google.maps.Map(document.getElementById('map'),{
      zoom: 10,
      center: coord
    });
    var marker = new google.maps.Marker({
      position: coord,
      map: map
    });
} 