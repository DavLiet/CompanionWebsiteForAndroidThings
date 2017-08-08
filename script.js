



var markerBuilding1;
var markerBuilding2;
var markerBuilding3;
var markerBuilding4;
var markerBuilding5;

var map;

var icon = 'yes_bike.png';
var no_bike = 'no_bike.png';

function initMap() {  
    
       
    
        var uluru = {lat: 29.559839, lng: -95.086824};
         map = new google.maps.Map(document.getElementById('map'), {
          zoom: 16,
          center: uluru,
             styles: [
                        {
                            "featureType": "landscape.man_made",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "saturation": 23
                                },
                                {
                                    "lightness": "-8"
                                },
                                {
                                    "visibility": "simplified"
                                },
                                {
                                    "hue": "#00ff6c"
                                }
                            ]
                        },
                        {
                            "featureType": "landscape.natural",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "hue": "#7DC45C"
                                },
                                {
                                    "saturation": 37
                                },
                                {
                                    "lightness": -41
                                },
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        },
                        {
                            "featureType": "poi",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "hue": "#A19FA0"
                                },
                                {
                                    "saturation": -98
                                },
                                {
                                    "lightness": -20
                                },
                                {
                                    "visibility": "off"
                                }
                            ]
                        },
                        {
                            "featureType": "road",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "saturation": -100
                                },
                                {
                                    "lightness": 100
                                },
                                {
                                    "visibility": "simplified"
                                },
                                {
                                    "hue": "#ff0000"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "all",
                            "stylers": [
                                {
                                    "color": "#3498db"
                                },
                                {
                                    "saturation": "81"
                                },
                                {
                                    "lightness": "0"
                                },
                                {
                                    "weight": "2.28"
                                }
                            ]
                        },
                        {
                            "featureType": "water",
                            "elementType": "geometry",
                            "stylers": [
                                {
                                    "hue": "#71ABC3"
                                },
                                {
                                    "saturation": -10
                                },
                                {
                                    "lightness": -21
                                },
                                {
                                    "visibility": "simplified"
                                }
                            ]
                        }
             ]
             
        });
    
  
        
    
      markerBuilding1 = new google.maps.Marker({
             position: {lat:  29.555228, lng: -95.088042},
              map: map,
             title: 'Building 1'
         });
    
        
    markerBuilding2 = new google.maps.Marker({
             position: {lat:  29.555536, lng: -95.088986},
              map: map,
             title: 'Building 2'
         });
    markerBuilding3 = new google.maps.Marker({
             position: {lat:  29.555181, lng: -95.087068},
              map: map,
             title: 'Building 3'
         });
    
    markerBuilding4 = new google.maps.Marker({
             position: {lat:  29.555938, lng: -95.086674},
              map: map,
             title: 'Building 4'
         });
    
     markerBuilding5 = new google.maps.Marker({
             position: {lat:  29.556031, lng: -95.085344},
              map: map,
             title: 'Building 5'
         });
    
    
    
    
    
    
      }

var contentString;
var bikeMarker;
var numberWindow;




//building 1

window.setInterval(function(){
    var firebaseP = document.getElementById("txt");
 var firebaseRef = firebase.database().ref().child("BikesAt1958");
    

firebaseRef.on('value', function(datasnapshot){
    firebaseP.innerHTML = datasnapshot.child("NumberBikes").val();
      contentString = datasnapshot.child("NumberBikes").val();
    var numb = datasnapshot.child("BikeId").child("IdValue").val();
    

    
    
     bikeMarker = new google.maps.Marker({
         position: {lat: 29.559839, lng: -95.086824},
          map: map,
         title: 'Building 1',
          icon: icon
     });
    
    
//    switch(contentString){
//        case 0:
//            bikeMarker.setIcon(no_bike);
//            var msg =  ' <div class="cool"><h2 id="firstHeading" class="firstHeading">1958 Building</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    No Bikes Available</p>' + '<br />' + numb.toString() + '</div>';
//            break;
//            
//        case 1:
//            bikeMarker.setIcon(icon);
//        var msg =  '<h2 id="firstHeading" class="firstHeading">1958 Building</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    Available: <b>' + contentString.toString() + ' </b> Bikes</p>';
//            break;
//            
//            
//        default:
//             bikeMarker.setIcon(icon);
//        var msg =  '<h2 id="firstHeading" class="firstHeading">1958 Building</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    Available: <b>' + contentString.toString() + ' </b> Bikes</p>';
//            break;
//            
//            
//    }
    
    
    if(contentString == 0){
        
    }
    else if(contentString > 1){
        bikeMarker.setIcon(icon);
        var msg =  '<h2 id="firstHeading" class="firstHeading">1958 Building</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    Available: <b>' + contentString.toString() + ' </b> Bikes</p>';
        
        
    }else{
        bikeMarker.setIcon(icon);
        var msg =  '<h1 id="firstHeading" class="firstHeading">1958 Building</h1>' + '<p>Available: <b>' + contentString.toString() + ' </b> Bike</p>';
        
        bikeMarker.setIcon(no_bike);
         var msg =  ' <div class="cool"><h2 id="firstHeading" class="firstHeading">1958 Building</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    No Bikes Available</p>' + '<br />' + numb.toString() + '</div>';
    }
    
    
      numberWindow = new google.maps.InfoWindow({
        content: msg
    });
   
      
    
    
    
  
    
    bikeMarker.addListener('click', function(){
        numberWindow.open(map,bikeMarker);
    });
    
    
     
});
    

}, 100);


//Building 1



window.setInterval(function(){
    var buildingOneRef = firebase.database().ref().child("Building1");
    
   

    buildingOneRef.on('value', function(datasnapshot){
        
        contentStringBuilding1 = datasnapshot.child("NumberBikes").val(); //gets the number of bikes for Building 1
        
        
        if(contentStringBuilding1 == 0){
            markerBuilding1.setIcon(no_bike);
         var msgBuilding1 =  '<h2 id="firstHeading" class="firstHeading">Building 1</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    No Bikes Available</p>';
        }
        
       else if(contentStringBuilding1 > 1){
           markerBuilding1.setIcon(icon);
            var msgBuilding1 =  '<h2 id="firstHeading" class="firstHeading">Building 1</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    Available: ' + contentStringBuilding1.toString() + ' Bikes</p>';
        }else if(contentStringBuilding1 == 1){
            markerBuilding1.setIcon(icon);
            var msgBuilding1 =  '<h1 id="firstHeading" class="firstHeading">Building 1</h1>' + '<p>Available: ' + contentStringBuilding1.toString() + ' Bike</p>';
        }
        else{
            markerBuilding1.setIcon(icon);
            console.log("error");
        }


          windowBuilding1 = new google.maps.InfoWindow({   //Creates infowindow for Building 1 marker
            content: msgBuilding1
            });



          


        markerBuilding1.addListener('click', function(){
            windowBuilding1.open(map,markerBuilding1);
        });
        

    });
    

}, 500);


//Building 2
window.setInterval(function(){
    var buildingTwoRef = firebase.database().ref().child("Building2");

    buildingTwoRef.on('value', function(datasnapshot){
        
        contentStringBuilding2 = datasnapshot.child("NumberBikes").val(); //gets the number of bikes for Building 1
        
        
        
        
         if(contentStringBuilding2 == 0){
        markerBuilding2.setIcon(no_bike);
         var msgBuilding2 =  '<h2 id="firstHeading" class="firstHeading">Building 2</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    No Bikes Available</p>';
        }
        
        else if(contentStringBuilding2 > 1){
            markerBuilding2.setIcon(icon);

            var msgBuilding2 =  '<h2 id="firstHeading" class="firstHeading">Building 2</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    Available: ' + contentStringBuilding2.toString() + ' Bikes</p>';
        }else{
            markerBuilding2.setIcon(icon);
            var msgBuilding2 =  '<h1 id="firstHeading" class="firstHeading">Building 2</h1>' + '<p>Available: ' + contentStringBuilding2.toString() + ' Bike</p>';
        }


          windowBuilding2 = new google.maps.InfoWindow({   //Creates infowindow for Building 2 marker
            content: msgBuilding2
            });



        markerBuilding2.addListener('click', function(){
            windowBuilding2.open(map,markerBuilding2);
        });

    });
    

}, 500);



//Building 3
window.setInterval(function(){
    var buildingThreeRef = firebase.database().ref().child("Building3");

    buildingThreeRef.on('value', function(datasnapshot){
        
        contentStringBuilding3 = datasnapshot.child("NumberBikes").val(); //gets the number of bikes for Building 3
        
        
        
        
        
        
         if(contentStringBuilding3 == 0){
        markerBuilding3.setIcon(no_bike);
         var msg =  '<h2 id="firstHeading" class="firstHeading">Building 2</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    No Bikes Available</p>';
        }
        
        if(contentStringBuilding3 > 1){
        markerBuilding3.setIcon(icon);

            var msgBuilding3 =  '<h2 id="firstHeading" class="firstHeading">Building 3</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    Available: ' + contentStringBuilding3.toString() + ' Bikes</p>';
        }else{
         markerBuilding3.setIcon(icon);

            var msgBuilding3 =  '<h1 id="firstHeading" class="firstHeading">Building 3</h1>' + '<p>Available: ' + contentStringBuilding3.toString() + ' Bike</p>';
        }


          windowBuilding3 = new google.maps.InfoWindow({   //Creates infowindow for Building 1 marker
            content: msgBuilding3
            });



          


        markerBuilding3.addListener('click', function(){
            windowBuilding3.open(map,markerBuilding3);
        });

    });
    

}, 500);



//Building 4
window.setInterval(function(){
    
   var buildingFourRef = firebase.database().ref().child("Building 4");

    buildingFourRef.on('value', function(datasnapshot){
        
        contentStringBuilding4 = datasnapshot.child("NumberBikes").val(); //gets the number of bikes for Building 3
        
        
        
        
        
        
         if(contentStringBuilding4 == 0){
        markerBuilding4.setIcon(no_bike);
         var msg =  '<h2 id="firstHeading" class="firstHeading">Building 4</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    No Bikes Available</p>';
        }
        
        if(contentStringBuilding4 > 1){
        markerBuilding4.setIcon(icon);

            var msgBuilding4 =  '<h2 id="firstHeading" class="firstHeading">Building 4</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    Available: ' + contentStringBuilding4.toString() + ' Bikes</p>';
        }else{
         markerBuilding4.setIcon(icon);

            var msgBuilding4 =  '<h1 id="firstHeading" class="firstHeading">Building 4</h1>' + '<p>Available: ' + contentStringBuilding4.toString() + ' Bike</p>';
        }


          windowBuilding4 = new google.maps.InfoWindow({   //Creates infowindow for Building 1 marker
            content: msgBuilding4
            });



          


        markerBuilding4.addListener('click', function(){
            windowBuilding4.open(map,markerBuilding4);
        });

    });

}, 500);



//Building 5
window.setInterval(function(){
    var buildingFiveRef = firebase.database().ref().child("Building 5");

    buildingFiveRef.on('value', function(datasnapshot){
        
        contentStringBuilding5 = datasnapshot.child("NumberBikes").val(); //gets the number of bikes for Building 3
        
        
        
        
        
        
         if(contentStringBuilding5 == 0){
        markerBuilding5.setIcon(no_bike);
         var msg =  '<h2 id="firstHeading" class="firstHeading">Building 5</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    No Bikes Available</p>';
        }
        
        if(contentStringBuilding5 > 1){
        markerBuilding5.setIcon(icon);

            var msgBuilding5 =  '<h2 id="firstHeading" class="firstHeading">Building 5</h2>' + '<img class="bike" src="Webp.net-resizeimage (13).png">' +  '<p class = "description">    Available: ' + contentStringBuilding5.toString() + ' Bikes</p>';
        }else{
         markerBuilding5.setIcon(icon);

            var msgBuilding5 =  '<h1 id="firstHeading" class="firstHeading">Building 5</h1>' + '<p>Available: ' + contentStringBuilding5.toString() + ' Bike</p>';
        }


          windowBuilding5 = new google.maps.InfoWindow({   //Creates infowindow for Building 1 marker
            content: msgBuilding5
            });



          


        markerBuilding5.addListener('click', function(){
            windowBuilding5.open(map,markerBuilding5);
        });

    });
    

}, 100);

function buildingPicker(){
    switch(document.getElementById('building').value){
        case "Building 1":
            var latlng = markerBuilding1.getPosition();
            map.setCenter(latlng);
            map.setZoom(18);
            windowBuilding1.open(map,markerBuilding1);
            break;
        
        case "Building 2":
            var latlng = markerBuilding2.getPosition();
            map.setCenter(latlng);
            map.setZoom(18);
            windowBuilding2.open(map,markerBuilding2);

            break;
            
        case "Building 3":
            var latlng = markerBuilding3.getPosition();
            map.setCenter(latlng);
            map.setZoom(18);
            windowBuilding3.open(map,markerBuilding3);

            break;
            
        case "Building 4":
            var latlng = markerBuilding4.getPosition();
            map.setCenter(latlng);
            map.setZoom(18);
            
            windowBuilding4.open(map,markerBuilding4);

            break;
            
        default:
            var latlng = {lat: 29.559839, lng: -95.086824};
            map.setCenter(latlng);
            map.setZoom(16);
            break;
    }
    
}







$(document).ready(function(){
    // Defining the local dataset
    var cars = ['Building 1', 'Building 2', 'Building 3'];
    
    // Constructing the suggestion engine
    var cars = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.whitespace,
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        local: cars
    });
    
    // Initializing the typeahead
    $('.typeahead').typeahead({
        hint: true,
        highlight: true, /* Enable substring highlighting */
        minLength: 1 /* Specify minimum characters required for showing result */
    },
    {
        name: 'cars',
        source: cars
    }).on('typeahead:selected', function(event, selection) {
  
  // the second argument has the info you want
  buildingPicker();
        
         // clearing the selection requires a typeahead method
  $(this).typeahead('setQuery', '');
  
 
});
});





















