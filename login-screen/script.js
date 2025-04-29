
const createAccountLink = document.getElementById('create-account');
const signinLink = document.getElementById('signin-account');
const loginContainer =  document.getElementById('login-container');
const loginForm =  document.getElementById('login-form');

controlUserName();
showPasswordFunc();

/*Change the form if user click auth-links*/ 
createAccountLink.addEventListener('click', function (event) {
    event.preventDefault();

    loginContainer.style.height = "680px";
    loginForm.action = "/login-screen/php/create_account.php";

    loginForm.innerHTML = `
    <div class="username-container">
        <label for="username">User Name:</label>
        <input type="text" name="username" id="username" required>
        <span class="info" id="username-info"></span> 
    </div>
    <div>
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" required>      
    </div>
    <div class="password-container">
        <label for="password2">Password Again:</label>
        <input type="password" name="password2"  id="password2" required>
        <span class="info" id="password-info"></span>  
    </div> 
        <button type="submit" id="submit">Create</button>     
     
`;

    controlPasswordMatch();
    controlCraetedPassword();
    controlCraetedUserName();
});

signinLink.addEventListener('click', function(event) {
    event.preventDefault();

    loginContainer.style.height = "600px";
    loginForm.action = "/login-screen/php/login.php";

    loginForm.innerHTML = `
    <div class="username-container">
        <label for="username">User Name:</label>
        <input type="text" name="username" id="username" required>
        <span class="info" id="text-info"></span>
    </div>
    <div class="password-container">
        <label for="password">Password:</label>
        <input type="password" name="password" id="password" required>
        <span class="info" id="password-info"></span>
    </div>
        <button type="submit">Login</button>      
`;
    controlUserName();
    showPasswordFunc();
});

/*control the pass1 and pass2 match func*/
function controlPasswordMatch() {
loginForm.addEventListener('submit', function(event) {
    const password = document.getElementById('password');
    const password2 = document.getElementById('password2');
    const passwordValue = password.value;
    const password2Value = password2.value;

    if(passwordValue !== password2Value) {
        event.preventDefault(); // dont send form if pass1 and pass2 do not match
        alert("Passwords do not match");
    }
});
}

/*control the username true form func*/
function controlUserName() {
const text = document.getElementById('username');
const textInfo = document.getElementById('text-info'); 
const submitButton = document.getElementById('submit');

text.addEventListener("input",function () {
    console.log(text.value)
    if(text.value.indexOf(' ') !== -1) {
       textInfo.textContent= "Username cannot contain spaces !";
       submitButton.disabled= true;
    }else {
        submitButton.disabled= false;
        textInfo.textContent= "";
    }
});
}

/*login page password visible func*/ 
function showPasswordFunc() {
    const passwordCheckBox = document.getElementById('password-checkbox');
    const passwordText = document.getElementById('password');

    passwordCheckBox.addEventListener("change",function() {
        if(passwordCheckBox.checked) {
            passwordText.type = "text";
        }else {
            passwordText.type = "password";
        }
    })
}

/*control the createaccount page pasword control func*/ 
function controlCraetedPassword() {
    const passwordText = document.getElementById('password');
    const passwordInfo = document.getElementById('password-info');
    const submitButton = document.getElementById('submit');
    
    console.log(passwordText.value);
    passwordText.addEventListener("input",function () {
        if(passwordText.value.indexOf(' ') !== -1) {
            passwordInfo.textContent= "Password cannot contain spaces !";
            submitButton.disabled = true;
        }else {
            passwordInfo.textContent= "";
            submitButton.disabled = false;
        }
    });
    }

/*control the createaccount page username control func*/ 
function controlCraetedUserName() {
    const usernameText = document.getElementById('username');
    const usernameInfo = document.getElementById('username-info');
    const submitButton = document.getElementById('submit');
    
    usernameText.addEventListener("input",function () {
        if(usernameText.value.indexOf(' ') !== -1) {
            usernameInfo.textContent= "Username cannot contain spaces !";
            submitButton.disabled = true;
        }else {
            usernameInfo.textContent= "";
            submitButton.disabled = false;
        }
    });
    }




