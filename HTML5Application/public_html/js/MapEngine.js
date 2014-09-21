var kmlUrl = 'https://raw.githubusercontent.com/Khristophorov/GoogleMaps-Agriculture/master/HTML5Application/public_html/Agriculture_test.kml';
var map;
var kml;
function initialize() {
    map = new google.maps.Map(document.getElementById('map-canvas'));

    kml = new KmlMapParser({map: map,
        kml: 'Agriculture_test.kml',
        sidebarId: 'companies',
    });
}
google.maps.event.addDomListener(window, 'load', initialize);