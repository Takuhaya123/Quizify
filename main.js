/* function/s for sign up animations */
function showSignUp() {
  var div = document.getElementById("signUpPopUp");
  var container = document.getElementsByClassName("container")[0];
  div.style.top = "50%";
  container.classList.add("blur");
}
function cancelSignUp() {
  var div = document.getElementById("signUpPopUp");
  var pass = document.getElementById("sgnpassword");
  var container = document.getElementsByClassName("container")[0];
  var errorMsg = document.getElementById("sgnErrorInput");
  var field1 = document.getElementById("sgnusername");
  var field2 = document.getElementById("sgnpassword");
  div.style.top = "-100%";
  container.classList.remove("blur");
  pass.type = "password";
  errorMsg.innerHTML = "";
  errorMsg.style.display = "none";
  field1.style.border = "";
  field2.style.border = "";
}
/* function/s for login animations */
function showLogin() {
  var div = document.getElementById("loginPopUp");
  var container = document.getElementsByClassName("container")[0];
  div.style.top = "50%";
  container.classList.add("blur");
}
function cancelLogin() {
  var div = document.getElementById("loginPopUp");
  var pass = document.getElementById("lgnpassword");
  var container = document.getElementsByClassName("container")[0];
  var errorMsg = document.getElementById("lgnErrorInput");
  var field1 = document.getElementById("lgnusername");
  var field2 = document.getElementById("lgnpassword");
  div.style.top = "-100%";
  container.classList.remove("blur");
  pass.type = "password";
  errorMsg.innerHTML = "";
  errorMsg.style.display = "none";
  field1.style.border = "";
  field2.style.border = "";
}
/* function/s for showing the password */
function showPassSgn() {
  var pass = document.getElementById("sgnpassword");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}
function showPassLgn() {
  var pass = document.getElementById("lgnpassword");
  if (pass.type === "password") {
    pass.type = "text";
  } else {
    pass.type = "password";
  }
}
// for clearing the input
function clearSgnForm() {
  document.getElementById("signUpForm").reset();
}
function clearLgnForm() {
  document.getElementById("loginForm").reset();
}
/* function/s for checking user sign in info completion, and cookies */
function checkFormInput(event) {
  var x = event.target;
  if (x.value) {
    x.style.border = "2px solid green";
  } else {
    x.style.border = "2px solid red";
  }
}
function signInForm(event) {
  var username = document.getElementById("sgnusername");
  var password = document.getElementById("sgnpassword");
  var errorMsg = document.getElementById("sgnErrorInput");
  var usernamePush = document.getElementById("sgnusername").value;
  var passwordPush = document.getElementById("sgnpassword").value;
  var accounts = JSON.parse(localStorage.getItem("accounts")) || [];

  if (!username.value) {
    username.style.border = "2px solid red";
  }
  if (!password.value) {
    password.style.border = "2px solid red";
  }
  if (!username.value || !password.value) {
    event.preventDefault();
    errorMsg.innerHTML = "Please fill out all required fields.";
    errorMsg.style.display = "block";
    return false;
  } else {
      localStorage.setItem("username", usernamePush);
      localStorage.setItem("password", passwordPush);
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("aestheticAttempts", 0);
      localStorage.setItem("carAttempts", 0);
      localStorage.setItem("triviaAttempts", 0);
      localStorage.setItem("genshinAttempts", 0);
      window.location.reload();
    }
}
/* function/s for login */
function loginForm(event) {
  var username = document.getElementById("lgnusername");
  var password = document.getElementById("lgnpassword");
  var oldHeader = document.getElementById("signedOutHeader");
  var newHeader = document.getElementById("loggedInHeader");
  var errorMsg = document.getElementById("lgnErrorInput");
  var display = document.getElementById("userHeaderName");
  if (!username.value) {
    username.style.border = "2px solid red";
  }
  if (!password.value) {
    password.style.border = "2px solid red";
  }
  if (!username.value || !password.value) {
    errorMsg.innerHTML = "Please fill out all required fields.";
    errorMsg.style.display = "block";
    return false;
  } else if (username.value === localStorage.getItem("username") && password.value === localStorage.getItem("password")) {
    oldHeader.style.display = "none";
    newHeader.style.display = "flex";
    errorMsg.innerHTML = "";
    errorMsg.style.display = "none";
    cancelLogin();
    display.innerHTML = username.value;
    localStorage.setItem("isLoggedIn", "true");
  } else {
    event.preventDefault();
    errorMsg.innerHTML = "Your username or password is incorrect."
    errorMsg.style.display = "block";
  }
}
/* function/s for logout */
function logOut() {
  localStorage.removeItem("isLoggedIn");
  window.location.reload();
}
/* function/s for completely wiping user localStorage */
function wipeData() {
  var result = confirm("This will wipe out ALL of your data on this site, namely your account information and test history. This can no longer be undone and your data cannot be recovered. If you would like to do so, please click OK");
  if (result) {
    var result2 = confirm("Are you sure?");
    if (result2) {
      localStorage.clear();
      window.location.reload();
    }
  }
}
/* function/s to keep the user logged in even if the current session ends */
function onloadCheck() {
  var username = localStorage.getItem("username");
  var password = localStorage.getItem("password");
  var display = document.getElementById("userHeaderName");
  var welcmsg = document.getElementById("welcomeTo");
  var quizify = document.getElementById("quizify");
  var greeting = document.getElementById("welcome");
  var signedOut = document.getElementById("signedOutHeader");
  var loggedIn = document.getElementById("loggedInHeader");
  
if (localStorage.getItem("isLoggedIn")) {
  document.getElementById("loggedInHeader").style.display = "flex";
  document.getElementById("signedOutHeader").style.display = "none";
  display.innerHTML = username;
  if (!location.pathname.endsWith("quiz1.html") && !location.pathname.endsWith("quiz2.html") && !location.pathname.endsWith("quiz3.html") && !location.pathname.endsWith("quiz4.html")) {
  welcmsg.innerHTML = "Welcome back,";
  quizify.innerHTML = username;
  greeting.style.visibility = "visible";
  }
  loggedIn.style.visibility = "visible";
} else {
  document.getElementById("loggedInHeader").style.display = "none";
  document.getElementById("signedOutHeader").style.display = "flex";
  if (!location.pathname.endsWith("quiz1.html") && !location.pathname.endsWith("quiz2.html") && !location.pathname.endsWith("quiz3.html") && !location.pathname.endsWith("quiz4.html")) {
  welcmsg.innerHTML = "Welcome to";
  quizify.innerHTML = "Quizify";
  greeting.style.visibility = "visible";
  }
  signedOut.style.visibility = "visible";
}
}