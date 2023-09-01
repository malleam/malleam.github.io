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
  var img = document.createElement("img");
  img.src = "01.jpg"; 
  img.width= '600';
  document.body.appendChild(img);

  var img2 = document.createElement("img");
  img2.src = "02.jpg"; 
  img2.width = 600;
  document.body.appendChild(img2);

  var img3 = document.createElement("img");
  img3.src = "03.jpg"; 
  img3.width = 600;
  document.body.appendChild(img3);

  var img4 = document.createElement("img");
  img4.src = "04.jpg"; 
  img4.width = 600;
  document.body.appendChild(img4);

  var img5 = document.createElement("img");
  img5.src = "05.jpg"; 
  img5.width = 600;
  document.body.appendChild(img5);

  var img6 = document.createElement("img");
  img6.src = "06.jpg"; 
  img6.width = 600;
  document.body.appendChild(img6);

  var img7 = document.createElement("img");
  img7.src = "07.jpg"; 
  img7.width = 600;
  document.body.appendChild(img7);

  var img8 = document.createElement("img");
  img8.src = "08.jpg"; 
  img8.width = 600;
  document.body.appendChild(img8);

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


