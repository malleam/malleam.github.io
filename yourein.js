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
  alert(" error. fuck off, check your login info, and/or rinse and repeat.");
};

function addCat() { 
  document.getElementById('cat').innerHTML = '<img src="/images/01.jpg"><br><br><img src="/images/02.jpg"><br><br><img src="/images/03.jpg"><br><br><img src="/images/04.jpg"><br><br><img src="/images/05.jpg"><br><br><img src="/images/06.jpg"><br><br><img src="/images/07.jpg"><br><br><img src="/images/08.jpg"><br><br>';

}

function activateCheats() {
  addFrame();
};

function addFrame() {
            
            document.getElementById("hidden")
                .innerHTML +=
'<iframe width="100%" src="hidden.html"><br></iframe>';
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
}};
function copyToClipboard(element) {
  var $temp = $("<input>");
  $("body").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}
