// For Phone Number Input validation
function validate(){
   var name=document.getElementById("name").value;
   var lname=document.getElementById("lname").value; 
   var x=document.getElementById("email").value;  
   var atposition=x.indexOf("@");  
   var dotposition=x.lastIndexOf("."); 
   var num=document.getElementById("num").value;
   var textarea=document.getElementById("writtext").value;
   
   // For Name validation
   if ( name==null || name=="" ){  
      alert("You Should Must Include First Name");
      return false;  
    }
    if ( lname==null || lname=="" ){  
      alert("You Should Must Include Last Name");  
      return false;  
    }

    // For Phone Number validation
    if ( isNaN(num) ){
      alert('Enter Only Number');
      return false;
    }
   if ( num=="" ){
     alert('You Must Add Number');
     return false;
   }
   if ( num.length<9 ) {
      alert("Minmum 9 Number Require");
      return false;
   }

    // For Email validation
   if (atposition<1 || dotposition<atposition+2 || dotposition+2>=x.length){  
      alert("Please enter a valid e-mail address \n atpostion:"+atposition+"\n dotposition:"+dotposition);
      return false; 
   }

   // For Textarea validation
   if ( textarea.length < 50) {
      alert("You Should Write Maximum 50 Letter");
      return false;
   }
   else{
     return true;
     }
}
