// script.js
const textArray = [
  "Welcome to the infinite typing effect!",
  "This is a cool background animation.",
  "You can customize the text as you like.",
  "Enjoy coding and creating amazing effects!"
];
const typingSpeed = 100; // Speed of typing (ms per character)
const delayBetweenTexts = 2000; // Delay between texts (ms)

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

function deleteText() {
  if (charIndex > 0) {
    typingTextElement.textContent = textArray[textIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(deleteText, typingSpeed / 2);
  } else {
    textIndex = (textIndex + 1) % textArray.length; // Loop through texts
    setTimeout(typeText, typingSpeed);
  }
}

// Start the typing effect
typeText();
