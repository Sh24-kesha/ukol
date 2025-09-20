const colorBtn = document.getElementById("colorBtn");
const heading = document.getElementById("heading");

colorBtn.addEventListener("click", function() {
  let colors = ["red", "blue", "green", "purple", "orange" , "black" , "pink" , "yellow"];
  let randomColor = colors[Math.floor(Math.random() * colors.length)];
  heading.style.color = randomColor;
});

const form = document.getElementById("myForm");
const message = document.getElementById("message");

form.addEventListener("submit", function(event) {
  event.preventDefault(); 

  let name = document.getElementById("name").value.trim();
  let email = document.getElementById("email").value.trim();

  if (name === "" || email === "") {
    message.textContent = "Please fill all fields.";
    message.style.color = "red";
  } else {
    message.textContent = "Form submitted successfully!";
    message.style.color = "green";
  }
});
