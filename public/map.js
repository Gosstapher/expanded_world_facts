var Map = function(latLng, zoomNum){
  // var self = this;
  // this.markers = [];
  this.googleMap = new google.maps.Map(document.getElementById('map'),{
    center: latLng,
    zoom: zoomNum
  }),
  this.addMarker = function(latLng, title, icon){
    var marker = new google.maps.Marker({
      position: latLng,
      map: this.googleMap,
      title: title,
      icon: icon
    });
    return marker;
    // this.markers.push(marker);
  },
  this.bindClick = function(){
    google.maps.event.addListener(this.googleMap, 'click', function(event){
      this.addInfoWindow({lat: event.latLng.lat(), lng: event.latLng.lng()}, "meow!", "https://33.media.tumblr.com/avatar_e2fbfbcbb52d_128.png");
    }.bind(this));
  },
  this.setCentre = function(latLng){
    this.googleMap.setCenter(latLng);
  },
  this.addInfoWindow = function(latLng, title, icon){
    var marker = this.addMarker(latLng, title, icon);
    marker.addListener('click', function(){
      var infoWindow = new google.maps.InfoWindow({
        content: this.title 
      });
      infoWindow.open(this.map, marker);
    });
  }
}















