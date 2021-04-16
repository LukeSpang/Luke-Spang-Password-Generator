// Assignment Code
var generateBtn = document.querySelector("#generate");
var random = ""
var newPass = ""

function generatePassword (){
  var pwdLength = prompt("How long should your password be? Enter a length between 8 and 128.");

//alerts if the the requested password length is out of the specified range.
  if (pwdLength < 8 || pwdLength > 128) {
  alert("That is an invalid length. Try again");
  return generatePassword();
  }

  if (pwdLength => 8 && pwdLength <= 128){
  low = confirm("Do you want to include lower case letters?")
  upp = confirm("Do you want to include upper case letters?")
  num = confirm("Do you want to include numbers?")
  sym = confirm("Do you want to include special characters?")

  //alerts if no criteria is selected for password. must use at least one
  if (low === false && upp === false && num === false && sym === false){
    alert('You must select at least one criteria for your password. Try again!');
    return generatePassword();
  }

  if (low === true){
    lowerCase = "abcdefghijklmnopqrstuvwxyz"
  }
  else {
      lowerCase = ""
  }
  if (upp === true){
      upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
  }
  else {
        lowerCase = ""
  }
  if (num === true){
        numbers = "0123456789"
  }
  else {
          numbers = ""
  }
  if (sym === true){
          symbols = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
  }
  else {
        symbols = ""
  }
  random = (lowerCase + upperCase + numbers + symbols)

for (let i = 0; i < pwdLength; ++i) {
  newPass += random.charAt(Math.floor(Math.random() * random.length));
}

return newPass;
  
}
}


// Write password to the #password input
function writePassword() {
  console.log('writing password');
  var password = generatePassword();
  var passwordText = document.querySelector('#password');
  passwordText.value = password;
}
// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
