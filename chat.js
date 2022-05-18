// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE


var firebaseConfig = {
    apiKey: "AIzaSyA-0ST5kTl1KRZMSUqf19tctvp4C48q7PU",
    authDomain: "chat-app-3d7f3.firebaseapp.com",
    databaseURL: "https://chat-app-3d7f3-default-rtdb.firebaseio.com",
    projectId: "chat-app-3d7f3",
    storageBucket: "chat-app-3d7f3.appspot.com",
    messagingSenderId: "608194787709",
    appId: "1:608194787709:web:b98fa7604e2c3cfba33414"
  };
  
  // Initialize Firebase
firebase    .initializeApp(firebaseConfig);

function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



