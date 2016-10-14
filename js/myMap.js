var apiKey = require('./../.env').apiKey;

<script async defer
src="https://maps.googleapis.com/maps/api/js?key=AIzaSyD8u72lMtNHWd5E1VLnxkSq1HXdEavoy64&callback=initMap">
</script>

MyMap.prototype.getCity = function(city, displayFunction) {
//request using googlemap apiKey
$.get('https://maps.googleapis.com/maps/api/js?key='+ apikey + '&callback=initMap').then(function(response) {

}).fail(function(error) {

});
}

exports.myMapModule = MyMap;
