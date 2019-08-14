$(document).ready(function(){
  
   $("#sub_reg").on("click",function(){
      let username=$("#inputAddress2").val()
      let email=$("#inputEmail4").val()
      let pass=$("#inputPassword4").val()
      

      firebase.auth().createUserWithEmailAndPassword(email, pass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
       }).then(function(){
         window.location.href = "./login.html"

       
       

      })
    })
})