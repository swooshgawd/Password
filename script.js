// Assignment Code
//Variable uses queryselector to connect with the html through an ID
var generateBtn = document.querySelector("#generate");

//Creating separate variables as arrays in order to give it a function that can be combined into generating a random password
var availNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
var availSpecial = [" ", "!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "\", ", ",", "]", "^", "_", "`", "{", "|", "}", "~"]
var availUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
var availLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

//This function gives the user a choice to pick from the correct number of available characters for their password's length
function generatePassword() {
  var chars = prompt("Choose a number between 8 and 128")

  if (chars < 8 || chars > 128) {
    alert("Please enter a valid number between 8 and 128")

    return

  }

//Used to confirm what kind of numbers/characters/special you want to include in the password
  var numbers = confirm("Do you want to include numbers in your password?")
  var special = confirm("Do you want to include special characters in your password?")
  var lower = confirm("Do you want to include lowercase characters in your password?")
  var upper = confirm("Do you want to include uppercase characters in your password?")
  
  if (numbers === false && special === false && lower === false && upper === false) {
    alert("Please choose at least one of the following:")
    return generatePassword()
  }

//If statements created to combine available characters in response to user's selection
  var superArray = []

  if (numbers === true){
    superArray = superArray.concat(availNumbers)
  }
  if (special === true){
    superArray = superArray.concat(availSpecial)
  }
  if (lower === true){
    superArray = superArray.concat(availLower)
  }
  if (upper === true){
    superArray = superArray.concat(availUpper)
  }
  
  console.log(superArray)

  var password = []

  for (let i = 0; i < chars; i++) {
    var index = Math.floor(Math.random() * superArray.length)
    var randomchar = superArray[index]
    password.push(randomchar)

  }

  return password.join("")
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
