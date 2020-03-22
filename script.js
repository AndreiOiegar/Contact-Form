const letters = /^[A-Za-z]+$/;
const lettersNrs = /^[0-9A-Za-z\-]+$/; 

function validateMyForm(){

  let fName = document.forms["myForm"]["firstName"].value;
  let lName = document.forms["myForm"]["lastName"].value;
  let comment = document.forms["myForm"]["msg"].value;
  let radio = document.getElementsByName('gender');
  let radiocheck = document.querySelectorAll('input[type="radio"]:checked').length;

  if(fName.match(letters)) {
    document.getElementById('firstName').style.borderColor='green';
    document.getElementById('firstN').innerHTML = "First name: " + fName;
    console.log("First name: " + fName);
  } else{
    document.getElementById('firstName').style.borderColor='red';
  }
  if(lName.match(letters)) {
    document.getElementById('lastName').style.borderColor='green';
    document.getElementById('lastN').innerHTML = "Last name: " + lName;
    console.log("Last name: " +lName)
  } else {
    document.getElementById('lastName').style.borderColor='red'
  }


  for(let i = 0; i < radio.length; i++) {
    if(radio[i].checked){
    document.getElementById('MF').innerHTML = "Gender: " + radio[i].value;
    console.log("Gender: " + radio[i].value);
  } 
}

if (radiocheck === 0) alert("Please select your gender: Male or Female!");

if(comment.match(lettersNrs)) {
  document.getElementById("msg").style.borderColor='green';
  document.getElementById('comment_text').innerHTML = "Comment: " + comment;
  console.log("Comment: " + comment)
} else {
  document.getElementById('msg').style.borderColor='red'
}



if(fName.match(letters) && lName.match(letters) && comment.match(lettersNrs) && radiocheck !== 0){
  document.getElementById('message-box').style.display='flex';
  document.getElementById('banner').innerHTML= "Thank you for contacting us, " + fName +"!";
}
  }