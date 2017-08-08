var bikes = ["Building 1", "Building 2", "Building 3"];


function findBuilding(){
    var building = document.getElementById("buildingPicker").value;
    //alert(building);
    
//    for(var i = 0; i < bikes.length; i++){
//        
//        
//    }
    

    switch(building){
    
            
        case 'Building 1':
            var building1Ref= firebase.database().ref().child("Building 1**").child("BikeId");
            building1Ref.on('value', function(snapshot) {
                document.getElementById("one").innerHTML = " ";

                snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;          //tells user all the random keys
                    var childData = childSnapshot.val();
                    var list = document.getElementById('one');
                    var entry = document.createElement('li');
                    entry.appendChild(document.createTextNode(childData));
                    list.appendChild(entry);



                });
    
    
            });
            break;
            
            
            
        case 'Building 2':
            var building1Ref= firebase.database().ref().child("Building 2**").child("BikeId");
            building1Ref.on('value', function(snapshot) {
                document.getElementById("two").innerHTML = " ";

                snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;          //tells user all the random keys
                    var childData = childSnapshot.val();
                    var list = document.getElementById('two');
                    var entry = document.createElement('li');
                    entry.appendChild(document.createTextNode(childData));
                    list.appendChild(entry);



                });
    
    
            });
            break;
            
            
            
          case 'Building 3':
            var building1Ref= firebase.database().ref().child("Building 3**").child("BikeId");
            building1Ref.on('value', function(snapshot) {
                document.getElementById("three").innerHTML = " ";

                snapshot.forEach(function(childSnapshot) {
                    var childKey = childSnapshot.key;          //tells user all the random keys
                    var childData = childSnapshot.val();
                    var list = document.getElementById('three');
                    var entry = document.createElement('li');
                    entry.appendChild(document.createTextNode(childData));
                    list.appendChild(entry);



                });
    
    
            });
            break;
            
        
        default:
            console.log("It's a Party");
            break;
    
            
    }
    
}





function showInput(){    //this function sends data to firebase with a random key. This is meant to simulate the android app
    var firebaseRef = firebase.database().ref().child("Building 4**");
    var key = document.getElementById("key").value;
    firebaseRef.child("BikeId").push(key);
    //alert("sent");
    
    var liList = document.getElementById("list").getElementsByTagName("li");

   var largo = liList.length

   alert(largo);
}





//var list;
//var entry;
//
//
//var firebaseRef= firebase.database().ref().child("Building 1**").child("BikeId");
//firebaseRef.on('value', function(snapshot) {
//     document.getElementById("one").innerHTML = " ";
//    
//    
//    
//            snapshot.forEach(function(childSnapshot) {
//            var childKey = childSnapshot.key;          //tells user all the random keys
//            var childData = childSnapshot.val();
//            //alert(childKey + " , "+ childData);
//            
//            list = document.getElementById('one');
//            entry = document.createElement('li');
//            entry.appendChild(document.createTextNode(childData + "  (Building 1)"));
//            list.appendChild(entry);
//            
//            
//                
//            });
//    
//    
//    
//    
//    
//    });
//
//
//    
//
//
//
//var firebaseRe= firebase.database().ref().child("Building 2**").child("BikeId");
//firebaseRe.on('value', function(snapshot) {
//     document.getElementById("two").innerHTML = " ";
//    
//    
//    
//            snapshot.forEach(function(childSnapshot) {
//            var childKey = childSnapshot.key;          //tells user all the random keys
//            var childData = childSnapshot.val();
//            //alert(childKey + " , "+ childData);
//             list = document.getElementById('two');
//             entry = document.createElement('li');
//            entry.appendChild(document.createTextNode(childData + "  (Building 2)"));
//            list.appendChild(entry);
//            
//            
//                
//            });
//    
//    
//    });
//
//
//
//
//var firebase3= firebase.database().ref().child("Building 3**").child("BikeId");
//firebase3.on('value', function(snapshot) {
//     document.getElementById("three").innerHTML = " ";
//    
//    
//    
//            snapshot.forEach(function(childSnapshot) {
//            var childKey = childSnapshot.key;          //tells user all the random keys
//            var childData = childSnapshot.val();
//            //alert(childKey + " , "+ childData);
//            
//             list = document.getElementById('three');
//             entry = document.createElement('li');
//            entry.appendChild(document.createTextNode(childData + "  (Building 3)"));
//            list.appendChild(entry);
//            
//            
//                
//            });
//    
//    
//    });
//
//var firebase4= firebase.database().ref().child("Building 4**").child("BikeId");
//firebase4.on('value', function(snapshot) {
//     document.getElementById("four").innerHTML = " ";
//    
//    
//    
//            snapshot.forEach(function(childSnapshot) {
//            var childKey = childSnapshot.key;          //tells user all the random keys
//            var childData = childSnapshot.val();
//            //alert(childKey + " , "+ childData);
//            
//             list = document.getElementById('four');
//             entry = document.createElement('li');
//            entry.appendChild(document.createTextNode(childData + "  (Building 4)"));
//            list.appendChild(entry);
//            
//            
//                
//            });
//    
//    
//    });
//
//
//
//





    
    











