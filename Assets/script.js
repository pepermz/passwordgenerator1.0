// Assignment code here
var generateBtn = document.querySelector("#generate");
var uppercasechar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowercasechar = "abcdefghijklmnopqrstuvwxyz";
var numberchar = "1234567890";
var specialchar = "!@#$%^&*()_-+={}|";
var charlenght;
var UppercaseCharCheck;
var NumberCharCheck;
var SpecialCharCheck;

generateBtn.addEventListener("click", function(){
  ps=generatePassword();
  document.getElementById("password").placehoder=ps;
});

//Function to determine if uppercase characters want to be included
function uppercasedetermine(){
  UppercaseCharCheck = prompt(" Do you wish to include uppercase characters in your password? \n(YES or NO)");
    
    if(UppercaseCharCheck === null ||UppercaseCharCheck === ""){
      alert("Please reply with YES or NO");
      uppercasedetermine();

    }else if(UppercaseCharCheck === "YES" || "yes"){
      UppercaseCharCheck =true;
      return UppercaseCharCheck;

    }else if (UppercaseCharCheck === "NO" || "no"){
      UppercaseCharCheck=false;
      return UppercaseCharCheck;

    }else{
      alert("Please reply with YES or NO");
      uppercasedetermine();
    }
    return UppercaseCharCheck;
}

//Function to determine what the length limit will be 

function determinelength(){
  charlenght= prompt("How many characters would you like your new password to be? (between 8-50):");

    if(charlenght<8){
      alert("Password must be longer than 8 characters please choose another value");
      determinelength();

    }else if (charlenght>50){
      alert("Password must be shorter than 50 characters please choose another value");
      determinelength();

    }else if (isNaN(charlenght)){
      alert("Password must be between 8-50 characters please choose another value");
      determinelength();
    }
    return charlenght;
}

//Function to determine if numbers will be included in the password

function determinenumbers(){
  NumberCharCheck =prompt("Do you wish to include numbers in your password? \n(Yes or No)");

    if (NumberCharCheck === null || NumberCharCheck ===""){
      alert("Answer YES or NO");
      determinenumbers();

    }else if (NumberCharCheck === "YES" || "yes"){
      NumberCharCheck = true;
      return NumberCharCheck;

    }else if (NumberCharCheck === "NO" || "no"){
      NumberCharCheck = false;
      return NumberCharCheck;

    }else{
      alert("Answer YES or NO");
      determinenumbers();
    }
    return NumberCharCheck
}

//Function to determine if special characters will be used

function determinespecial(){
  SpecialCharCheck = prompt(" Do you wish to include special characters in your new password? \n(Yes or No)");

    if (SpecialCharCheck === null || SpecialCharCheck === ""){
      alert(" Answer YES or NO");
      determinespecial();

    }else if (SpecialCharCheck === "YES" || SpecialCharCheck === "yes"){
      SpecialCharCheck = true;
      return SpecialCharCheck;

    }else if (SpecialCharCheck === "NO" || SpecialCharCheck === "no"){
      SpecialCharCheck = false;
      return SpecialCharCheck;

    }else {
      alert("Answer YES or NO");
      determinespecial();
    }
    return determinespecial;
}

//Function to combine all inputs
function generatePassword(){
  uppercasedetermine();
  console.log(UppercaseCharCheck);
  determinelength();
  console.log(charlenght);
  determinenumbers();
  console.log(NumberCharCheck);
  determinespecial();
  console.log(SpecialCharCheck);

  var characters = lowercasechar;
  var password = "";
  if (UppercaseCharCheck && NumberCharCheck && SpecialCharCheck){
    characters += uppercasechar + numberchar + specialchar;
  }

    for(var i = 0; i < charlenght; i++){
      password += characters.charAt(Math.floor(Math.random()* characters.length));
    }
    return password;
}

// Write password to the #password input
function writePassword() {
  var password = "";
  password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
