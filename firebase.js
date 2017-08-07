

var firebaseRef= firebase.database().ref().child("testing");
var counter;

var list;
var entry;

function showInput(){
    var key = document.getElementById("key").value;
    firebaseRef.push(key);
}

var listy = [];

firebaseRef.on('value', function(snapshot) {
     document.getElementById("demo").innerHTML = " ";
    
    
    
            snapshot.forEach(function(childSnapshot) {
            var childKey = childSnapshot.key;          //tells user all the random keys
            var childData = childSnapshot.val();
            //alert(childKey + " , "+ childData);
            
            listy.push(childData);
             list = document.getElementById('demo');
             entry = document.createElement('li');
            entry.appendChild(document.createTextNode(childData));
            list.appendChild(entry);
            counter++;
            
            
                
            });
    
    
    });









