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
};

function addCat() { 
  document.getElementById('cat').innerHTML = '<img width="600" src="01.jpg"><br><img width="600" src="02.jpg"><br><img width="600" src="03.jpg"><br><img width="600" src="04.jpg"><br><img width="600" src="05.jpg"><br><img width="600" src="06.jpg"><br><img width="600" src="07.jpg"><br><img width="600" src="08.jpg"><br>';

}

function activateCheats() {
  addFrame();
};

function addFrame() {
            
            document.getElementById("hidden")
                .innerHTML +=
'<iframe style="background: #000000; background-color: black" width="300px" height="128px" src="hidden.html"></iframe>';
document.getElementById("hide").style.visibility = "hidden";
document.getElementById("hide").style.display = "none";
            addCat();
};
window.addEventListener("keydown", (e) => {
        console.log(e.key);
        pressed.push(e.key);
       
        console.log(pressed);
});

//login
function validate(){
var username = document.getElementById("username").value;
var password = document.getElementById("password").value;
if ( username == "fuckface" && password == "weed420"){
  
    window.location = "success.html"; // Redirecting to other page.
    return false;
  }
else{
tryAgain();
return false;
}
}


