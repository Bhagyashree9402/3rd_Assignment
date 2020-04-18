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

    let alphabetUppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let alphabetLowercase = alphabetUppercase.toLowerCase();
    var numerics = "0123456789";
    let specialCharacters = "\!\"\#\$\%\&\'\(\)\*\+\,\-\.\/\:\;\<\=\>\?\@\[\\\]\^\_\`\{\|\}\~";

    var passwordLength = prompt("Please specify the length of the password(between 8 to 128 characters)");
    while ((passwordLength < 8) || (passwordLength > 128)) {
        passwordLength = prompt("Your password length is incorrect.Please specify the length of the password(between 8 to 128 characters)");
    }
    console.log("passwordlength is " + passwordLength);

    var passwordLowercase = confirm("Would you want lower case");
    console.log("Lower case is " + passwordLowercase);

    var passwordUppercase = confirm("Would you want Upper case");
    console.log("Upper case is " + passwordUppercase);
    while (!passwordUppercase && !passwordLowercase) {
        passwordUppercase = confirm("Upper case can not be false,please confirm your choice");
    }

    var passwordNumeric = confirm("Would you want numeric");
    console.log("Numeric is " + passwordNumeric);

    var passwordSpecialcharacter = confirm("Would you special character");
    console.log("Special character is " + passwordSpecialcharacter);

    var arrayPassword = [];
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
    var criteriaNumber = arrayPassword.length;
    var constructString = "";
    var passwordString = "";

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

