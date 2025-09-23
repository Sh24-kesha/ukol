const textArray = [
  "Welcome to the ukol !"
];
const typingSpeed = 140; 
const delayBetweenTexts = 2000;

let textIndex = 0;
let charIndex = 0;
const typingTextElement = document.getElementById("typing-text");

function typeText() {
  if (charIndex < textArray[textIndex].length) {
    typingTextElement.textContent += textArray[textIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeText, typingSpeed);
  } else {
    setTimeout(deleteText, delayBetweenTexts);
  }
}
setTimeout(function(){
  window.location.href = "open.html";
} , 6100
);


typeText();

