const quotes = [
  { quote: "The best way to get started is to quit talking and begin doing.", author: "Walt Disney" },
  { quote: "Success is not in what you have, but who you are.", author: "Bo Bennett" },
  { quote: "Your time is limited, so don’t waste it living someone else’s life.", author: "Steve Jobs" },
  { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
  { quote: "Do what you can, with what you have, where you are.", author: "Theodore Roosevelt" },
  { quote: "Everything you can imagine is real.", author: "Pablo Picasso" },
  { quote: "Dream big and dare to fail.", author: "Norman Vaughan" } ,
  { quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart." , author: "Helan Keller"} ,
  { quote: "Strength and growth come only through continuous effort and struggle." , author: "Napolean Hill"}
];

function generateQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomIndex];
  document.getElementById("quote").textContent = selected.quote;
  document.getElementById("author").textContent = `— ${selected.author}`;
}
