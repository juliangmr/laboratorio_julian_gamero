function minimapa() {
    // Coordenadas del centro del mapa
    var myLatLng = {lat: 40.7128, lng: -74.0060};
  
    // Opciones de configuración del mapa
    var mapOptions = {
      center: myLatLng,
      zoom: 12
    };
  
    // Crear el objeto del mapa
    var map = new google.maps.Map(document.getElementById('map'), mapOptions);
  
    // Marcar la ubicación en el mapa
    var marker = new google.maps.Marker({
      position: myLatLng,
      map: map,
      title: '¡Hola, aquí estoy!'
    });
  }