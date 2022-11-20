let marker, map, marker2, marker3, marker4
function initMap(){
    const posicion = {
        lat: -25.363, 
        lng:131.044}
    map = new google.maps.Map(document.getElementById("map"), {
        zoom: 4,
        center: posicion
    })
    marker = new google.maps.Marker({
        position: posicion,
        map,
        title: "Posición Inicial"
    })
    marker2 = new google.maps.Marker({
        position: {lat: 34.832149, lng: -111.7695277},
        map,
        title: "Lugar Fav2"
    })
    marker3 = new google.maps.Marker({
        position: { lat: 25.03428, lng: -77.39628 },
        map,
        title: "Lugar Fav3"
    })
    marker4 = new google.maps.Marker({
        position: { lat: 40.4165, lng: -3.70256 },
        map,
        title: "Lugar Fav3"
    })
    geoPosicion()
}

function geoPosicion(){
    if (navigator.geolocation) {
        const geoLoc = navigator.geolocation
        const opciones = {timeout: 60000}
        const watchPos = geoLoc.watchPosition(centrarMapa, onError, opciones)
    } else {
        alert("Tu navegador no admite geolocalizacion")
    } 
}

function centrarMapa(position){
    const nuevaPos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
    }
    marker.setPosition(nuevaPos)
    map.setCenter(nuevaPos)
}
function onError(error){
    console.error(error);
}