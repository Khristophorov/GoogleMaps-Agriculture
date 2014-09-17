function initialize() {
    var map = new google.maps.Map(document.getElementById('map-canvas'));
    var ctaLayer = new google.maps.KmlLayer({
        url: 'https://raw.githubusercontent.com/Khristophorov/GoogleMaps-Agriculture/master/HTML5Application/public_html/Agriculture_test.kml'
    });
    ctaLayer.setMap(map);
}
google.maps.event.addDomListener(window, 'load', initialize);