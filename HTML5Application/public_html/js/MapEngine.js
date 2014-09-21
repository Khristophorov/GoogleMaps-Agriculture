function initialize() {
    var map = new google.maps.Map(document.getElementById('map-canvas'));
    var kmlParser = new KmlMapParser({map: map,
        kml: 'Agriculture_test.kml',
        sidebarId: 'companies'
    });
}
google.maps.event.addDomListener(window, 'load', initialize);