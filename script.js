// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    console.log("Password in writePassword is " + password);

    document.querySelector("#password").value = passwordText;
    passwordText.value = password;

}

function generatePassword() {

    //all password criteria declared as strings
    var alphabetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var alphabetLowercase = alphabetUppercase.toLowerCase();
    var numerics = "0123456789";
    var specialCharacters = "\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~";

    //prompt for length of the password
    var passwordLength = prompt("Please specify the length of the password(between 8 to 128 characters)");

    //negative conditions to see if the entered character is a number and false in the range between 8 and 128.
    while (isNaN(passwordLength)) {
        passwordLength = prompt("Your password length is incorrect.Please specify the length of the password(between 8 to 128 characters)");
    }

    while ((passwordLength < 8) || (passwordLength > 128)) {
        passwordLength = prompt("Your password length is incorrect.Please specify the length of the password(between 8 to 128 characters)");
    }

    console.log("passwordlength is " + passwordLength);

    //user confirmation for lowercase letter
    var passwordLowercase = confirm("Would you want lower case");
    console.log("Lower case is " + passwordLowercase);

    //user confirmation for choice of cases
    var passwordUppercase = confirm("Would you want Upper case");
    console.log("Upper case is " + passwordUppercase);
    while (!passwordUppercase && !passwordLowercase) {
        passwordUppercase = confirm("Upper case can not be false,please confirm your choice");
    }

    //user confirmation for numerics
    var passwordNumeric = confirm("Would you want numeric");
    console.log("Numeric is " + passwordNumeric);

    //user confirmation for special characters
    var passwordSpecialcharacter = confirm("Would you want special character");
    console.log("Special character is " + passwordSpecialcharacter);

    //An empty array is declared
    var arrayPassword = [];

    //using if condition entered password criteria is pushed into an empty array
    if (passwordLowercase) {
        arrayPassword.push(alphabetLowercase);
    }

    if (passwordUppercase) {
        arrayPassword.push(alphabetUppercase);
    }

    if (passwordNumeric) {
        arrayPassword.push(numerics);
    }

    if (passwordSpecialcharacter) {
        arrayPassword.push(specialCharacters);
    }

    //number of password criteria entered by user
    var criteriaNumber = arrayPassword.length;
    //empty string declaration
    var constructString = "";
    var passwordString = "";

    //logic for  computing the entered password criteria
    for (var j = 0; j < criteriaNumber; j++) {
        constructString = arrayPassword.pop();
        if (j == (criteriaNumber - 1)) {
            var remainingLength = passwordLength - passwordString.length;
            for (var i = 0; i < (Math.floor(remainingLength)); i++) {
                passwordString = passwordString + constructString.charAt(Math.floor(Math.random() * (constructString.length - 1)));
            }
        } else {
            for (var i = 0; i < (Math.floor(passwordLength / criteriaNumber)); i++) {
                passwordString = passwordString + constructString.charAt(Math.floor(Math.random() * (constructString.length - 1)));
            }
        }
    }

    console.log("Password string is " + passwordString);
    return passwordString;

}



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

