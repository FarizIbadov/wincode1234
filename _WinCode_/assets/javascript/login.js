$("#login").on("click",function(){
    email=$("#inputAddress2").val()
    password=$("#inputPassword4").val()
    firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error){
       //window.location.href="after_log.html";
       var errorCode = error.code
       var errorMessage = error.message
       console.log(error.message)
     }).then(function(){
        window.location.href = "./after_log.html"
     });
    
 })
 