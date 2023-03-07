
//ADICIONE SEUS LINKS DO FIREBASE
const firebaseConfig = {
  apiKey: "AIzaSyB58nQ8YkcM0B4o4TVcZ1nsDePBY8yEEPg",
  authDomain: "kwitter-f24ea.firebaseapp.com",
  databaseURL: "https://kwitter-f24ea-default-rtdb.firebaseio.com",
  projectId: "kwitter-f24ea",
  storageBucket: "kwitter-f24ea.appspot.com",
  messagingSenderId: "502213637",
  appId: "1:502213637:web:9f3dd1f51cbeddade0406c"
};

firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Bem vindo(a) " + user_name + "!";

function addRoom()
{
  //room_name - document.getElementById("room_name").value;
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose: "adicionado nome da sala"});

  localStorage .setItem("room_name", room_name);

  window.location = "kwitter_page.html";
}

function getData()
{  
    firebase.database().ref("/").on('value', function(snapshot)
    {
        document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot)
        {
            childKey  = childSnapshot.key;
            Room_names = childKey;
            console.log("Nome da sala:" + Room_names);
            //row = "<div class'room_name'id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names+"</div><hr>";
            row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
            document.getElementById("output").innerHTML += row;
        });
    });
}


getData();

function redirectToRoomName (name)
{
  console.log(name);
  localStorage.setItem("room_name", name)
  window.location = "kwitter_page.html";
}
function logout()
{
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}