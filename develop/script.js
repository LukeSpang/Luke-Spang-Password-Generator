// Assignment Code
var generateBtn = document.querySelector("#generate");
var random = ""
var newPass = ""

function generatePassword (){
  var pwdLength = prompt("How long should your password be? Enter a length between 8 and 128.");
}

if (pwdLength < 8 || pwdLength > 128) {
  alert("That is an invalid length. Try again")
}

if (pwdLength => 8 && pwdLength <= 128){
  low = confirm("Do you want to include lower case letters?")
  upp = confirm("Do you want to include upper case letters?")
  num = confirm("Do you want to include numbers?")
  sym = confirm("Do you want to include special symbols?")

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
          lowerCase = "!\"#$%&'()*+,-./:;<=>?@[\]^_`{|}~"
        }
        if (low === true){
          symbols = ""
        }
          else {
            symbols = ""
          }
          random = (lowerCase + upperCase + numbers + symbols)

for (let i = 0, n = random.length; i < pwdLength; ++i) {
  newPass += random.charAt(Math.floor(Math.random() * n));
}

return newPass;
  
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
