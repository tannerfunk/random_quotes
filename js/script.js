/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

//My object filled quotes array, where I store my quotes and the corresponding information.
const quotes = [
  { 
    quote: "Believe with no evidence of how you will do it.",
    source: "Brooke Castillo",
    citation: "The Life Coach School"
  },
  { 
    quote: "Without hard work, nothing grows but weeds.",
    source: "Gordon B. Hinckley"
  },
  { 
    quote: "My reading of history convinces me that most bad government results from too much government.",
    source: "Thomas Jefferson"
  },
  {
    quote: "Don't trade your authenticity for approval.",
    source: "Kanye West"
  },
  { quote: "Some sincerely wish for more power in order to do good, but only a few individuals are good enough to be powerful.",
    source: "Neal A. Maxwell",
    year: "2000"
  },
];

//The function to "pick out" a random quote.
const getRandomQuote = () => {
  let randomNumber = Math.floor( Math.random() * quotes.length);
  let randomQuote = quotes[randomNumber];
  return randomQuote;
};

//The function to print that function nicely to the browser.
const printQuote = () => {
  let randomQuoteObject = getRandomQuote();
  let html = `<p class="quote"> ${randomQuoteObject.quote} </p>
  <p class="source"> ${randomQuoteObject.source}`;
  if (randomQuoteObject.citation) {
    html += `<span class="citation"> ${randomQuoteObject.citation} </span>`;
  }
  if (randomQuoteObject.year) {
    html += `<span class="year"> ${randomQuoteObject.year} </span>`;
  }
  html += `</p>`;
  document.getElementById('quote-box').innerHTML = html;
  return html;
};



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);