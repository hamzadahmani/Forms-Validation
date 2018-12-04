document.addEventListener("click", function(event){
    if(event.target.id == "btn btn-primary btn-block btn-lg"  ) {
        testValidation()
    }
})


 

function testValidation() {
    
   

   if(  document.f.first_name.value == "" | document.f.last_name.value == "" )
   {
      alert( "Please provide your name!" );
      
      return false;
   }
   
   if( document.f.date.value == "")
   {
      alert( "Please provide your date!" );
     
      return false;
   }

  
   
   if( document.f.phone.value == "" |
   isNaN( document.f.phone.value ) |
   document.f.phone.value.length != 8 )
   {
      alert( "Please provide a phone ." );
       
      return false;
   }

   var regexEmail =  /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/ ; 
   var a=document.f.email.value
   if(  a.match(regexEmail)==false  | a==""  )
   {
      alert( "Please provide your Email!" );
      
      return false;
   }


   var pass=/^(?=.*[\d])(?=.*[A-Z])(?=.*[a-z])(?=.*[!@#$%^&*])[\w!@#$%^&*]{8,}$/;
var str=document.f.password.value
   if (pass.test(str)==false  | str==""  )
     {
       alert( "Please provide your password!" );
      
       return false;
     }

     if (pass!=document.f.password_confirmation.value  )
     {
       alert( "Please provide your password confirmation ! " );
      
       return false;
     }
     


     var regexEmail =  /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/ ; 
     var a=document.f.email.value
     if(  a.match(regexEmail)==false  | a==""  )
     {
        alert( "Please provide your Email!" );
        
        return false;
     }



     

     if( document.f.adresse.valuea==""  )
     {
        alert( "Please provide your adresse!" );
        
        return false;
     }

    
  var check=document.getElementById("chek").checked
      if( check=="" )
      {
         alert( "The required property was set. The checkbox must now be checked before submitting the form." );
         
         return false;
      }

}