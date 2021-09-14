const firebaseConfig = {
    apiKey: "AIzaSyBv25C9PcAOD23GxYm7-FllqGQcu7gxLyM",
    authDomain: "kwitter-db78e.firebaseapp.com",
    databaseURL: "https://kwitter-db78e-default-rtdb.firebaseio.com",
    projectId: "kwitter-db78e",
    storageBucket: "kwitter-db78e.appspot.com",
    messagingSenderId: "919847356609",
    appId: "1:919847356609:web:7a5dd820c459f049ae6c40"
  };
//ADD YOUR FIREBASE LINKS
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    function addUser()
    {
       user_name = localStorage.getItem("user_name");
       localStorage.getItem("user_name", user_name);
       console.log("The code is working!!! Here is the result-" + user_name);
    }