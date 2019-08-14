

$(document).ready(function(){
    
    let wincode = 'WAUPZZ8DZTA322239'
    function saveMessage(){
        registerRef.push({
         wincode:wincode,
         Make:'BMW',
         Model:'A4',
         Year:'1996',
         Type:'Passenger Car',
         Manufacturer:'Audi NSU Auto Union AG',
         Manufacturedin:'Europe',
         Plant:'Ingolstadt',
         SeqNum:'322239'
         
    })
    }
    
      // Your web app's Firebase configuration
   var firebaseConfig = {
     apiKey: "AIzaSyDiGFvnVvqeJNm0L2tmKQy5qPbg2yrzlIM",
     authDomain: "wincode-8285b.firebaseapp.com",
     databaseURL: "https://wincode-8285b.firebaseio.com",
     projectId: "wincode-8285b",
     storageBucket: "",
     messagingSenderId: "358246667336",
     appId: "1:358246667336:web:78afd27a1433849e"
   };
   // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   var database = firebase.database();
   
     $("#sub_reg").on("click",function(){
        
       

        
        saveMessage()
        database.ref('wincodes/').set(registerRef)
    })
  
})
  
  