
var map;


function initMap() {  
    
       
    
        var uluru = {lat: 29.559839, lng: -95.086824};
         map = new google.maps.Map(document.getElementById('map'), {
          zoom: 15,
          center: uluru
        });
    
     
    
    
    


  

   
        

        
      }

var contentString;
var bikeMarker;
var numberWindow;


window.setInterval(function(){
    var firebaseP = document.getElementById("txt");
 var firebaseRef = firebase.database().ref().child("BikesAt1958");

firebaseRef.on('value', function(datasnapshot){
    firebaseP.innerHTML = datasnapshot.child("NumberBikes").val();
      contentString = datasnapshot.child("NumberBikes").val();
    
    if(contentString > 1){
        var msg =  '<h2 id="firstHeading" class="firstHeading">1958 Building</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    Available: ' + contentString.toString() + ' Bikes</p>';
    }else{
        var msg =  '<h1 id="firstHeading" class="firstHeading">1958 Building</h1>' + '<p>Available: ' + contentString.toString() + ' Bike</p>';
    }
    
    
      numberWindow = new google.maps.InfoWindow({
        content: msg
    });
      bikeMarker = new google.maps.Marker({
         position: {lat: 29.559839, lng: -95.086824},
          map: map,
         title: 'pls work'
     });
  
    
    bikeMarker.addListener('click', function(){
        numberWindow.open(map,bikeMarker);
    });
    
    
     
});
    

}, 100);


 









