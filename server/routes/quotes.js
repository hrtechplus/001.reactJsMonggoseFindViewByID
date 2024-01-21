const quotes = [
  {
    quote: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    quote:
      "Success is not final, failure is not fatal: It is the courage to continue that counts.",
    author: "Winston Churchill",
  },
  {
    quote: "Innovation distinguishes between a leader and a follower.",
    author: "Steve Jobs",
  },
  {
    quote:
      "The future belongs to those who believe in the beauty of their dreams.",
    author: "Eleanor Roosevelt",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "The journey of a thousand miles begins with one step.",
    author: "Lao Tzu",
  },
  {
    quote:
      "Success is stumbling from failure to failure with no loss of enthusiasm.",
    author: "Winston S. Churchill",
  },
  {
    quote:
      "Do not wait to strike till the iron is hot, but make it hot by striking.",
    author: "William Butler Yeats",
  },
  {
    quote: "The only impossible journey is the one you never begin.",
    author: "Tony Robbins",
  },
  {
    quote: "It's not about the cards you're dealt, but how you play the hand.",
    author: "Randy Pausch",
  },
  {
    quote: "Your time is limited, don't waste it living someone else's life.",
    author: "Steve Jobs",
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt",
  },
  {
    quote:
      "The only person you are destined to become is the person you decide to be.",
    author: "Ralph Waldo Emerson",
  },
  {
    quote: "Don't watch the clock; do what it does. Keep going.",
    author: "Sam Levenson",
  },
  {
    quote:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "The only way to achieve the impossible is to believe it is possible.",
    author: "Charles Kingsleigh",
  },
  {
    quote:
      "Success is not just about making money. It's about making a difference.",
    author: "Unknown",
  },
  {
    quote: "Your attitude, not your aptitude, will determine your altitude.",
    author: "Zig Ziglar",
  },
  {
    quote: "Life is what happens when you're busy making other plans.",
    author: "John Lennon",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "Opportunities don't happen. You create them.",
    author: "Chris Grosser",
  },
  {
    quote: "The best way to predict the future is to create it.",
    author: "Peter Drucker",
  },
  {
    quote: "Success is not in what you have, but who you are.",
    author: "Bo Bennett",
  },
  {
    quote:
      "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work.",
    author: "Steve Jobs",
  },
  {
    quote: "It always seems impossible until it's done.",
    author: "Nelson Mandela",
  },
  {
    quote:
      "Your present circumstances don't determine where you can go; they merely determine where you start.",
    author: "Nido Qubein",
  },
  {
    quote:
      "The only limit to our realization of tomorrow will be our doubts of today.",
    author: "Franklin D. Roosevelt",
  },
  {
    quote: "Don't be afraid to give up the good to go for the great.",
    author: "John D. Rockefeller",
  },
  {
    quote:
      "The difference between a successful person and others is not a lack of strength, not a lack of knowledge, but rather a lack in will.",
    author: "Vince Lombardi",
  },
  {
    quote:
      "Success is stumbling from failure to failure with no loss of enthusiasm.",
    author: "Winston S. Churchill",
  },
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
}

function getRandomQuoteJson() {
  const randomQuote = getRandomQuote();
  return randomQuote;
}

module.exports = getRandomQuoteJson;
