// a key map of allowed keys
var allowedKeys = {
  67: 'c',
  85: 'u',
  78: 'n',
  84: 't',
};

// the 'official' Konami Code sequence
var konamiCode = ['c', 'u', 'n', 't'];

// a variable to remember the 'position' the user has reached so far.
var konamiCodePosition = 0;

// add keydown event listener
document.addEventListener('keydown', function(e) {
  // get the value of the key code from the key map
  var key = allowedKeys[e.keyCode];
  // get the value of the required key from the konami code
  var requiredKey = konamiCode[konamiCodePosition];

  // compare the key with the required key
  if (key == requiredKey) {

    // move to the next key in the konami code sequence
    konamiCodePosition++;

    // if the last key is reached, activate cheats
    if (konamiCodePosition == konamiCode.length) {
      activateCheats();
      addCode();
      konamiCodePosition = 0;
      
    }
  } else {
    konamiCodePosition = 0;
  }
});

const pressed = [];

function tryAgain() {
  var paragraph = document.getElementById("p");
  alert(" error. ckeck your login info and/or try again later.");
}

function activateCheats() {
document.body.style.backgroundImage = "url('https://scontent-ord5-1.xx.fbcdn.net/v/t39.30808-6/370539027_10161011701759390_1851754097289374655_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=49d041&_nc_ohc=2qqaKyLQ2OIAX9Q5k8D&_nc_ht=scontent-ord5-1.xx&oh=00_AfD6yOiyTW-jKxEKHNYdUdQgmB0uMaY6ZwhB-8aeA51OiA&oe=64F4531D')";
  
};
function addCode() {
            document.getElementById("hidden")
                .innerHTML +=
'<iframe style="background: #000000; background-color: black" width="300px" height="200px" src="hidden.html"></iframe>';
document.getElementById("hide").style.visibility = "hidden";
     
};
window.addEventListener("keydown", (e) => {
        console.log(e.key);
        pressed.push(e.key);
       
        console.log(pressed);
});
document.getElementById("login").value;

//login
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "fuckface" && password == "weed420"){
  
    window.location = "hidden.html"; // Redirecting to other page.
    return false;
  }
else{
tryAgain();
return false;
}
}


