firebase.auth().onAuthStateChanged(function(user)
{
    
    
  
    var refemail=firebase.database().ref("user/"+user)
    
   refemail.set({
       email:user.email,
   })
    
    
})
