import { useState } from 'react';
import './App.css';
import Quote from './Quote';

function App() {
  let quotes = [
    { quote: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { quote: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { quote: "Dream big and dare to fail.", author: "Norman Vaughan" },
    { quote: "Don’t watch the clock; do what it does. Keep going.", author: "Sam Levenson" },
    { quote: "Action is the foundational key to all success.", author: "Pablo Picasso" },
    { quote: "Success is not final, failure is not fatal: it is the courage to continue that counts.", author: "Winston Churchill" },
    { quote: "Start where you are. Use what you have. Do what you can.", author: "Arthur Ashe" },
    { quote: "Your limitation—it’s only your imagination.", author: "Unknown" },
    { quote: "Push yourself, because no one else is going to do it for you.", author: "Unknown" },
    { quote: "Great things never come from comfort zones.", author: "Unknown" },
  ];

  const [currentQuote, setCurrentQuote] = useState(quotes[0]);

  function changeQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    setCurrentQuote(quotes[randomIndex]);
  }

  return (
    <div id="box">
      <Quote quote={currentQuote} />
      <button onClick={changeQuote}>Change</button>
    </div>
  );
}

export default App;

