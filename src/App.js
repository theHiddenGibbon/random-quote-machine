import React, {useState, useEffect} from 'react';
import './App.css';

const QUOTE_ARRAY = [
 {quote: "You must be the change you wish to see in the world", author: "Mahatma Gandhi"},
 {quote: "Spread love everywhere you go. Let no one ever come to you without leaving happier.", author: "Mother Teresa"},
 {quote: "The only thing we have to fear is fear itself.", author: "Franklin D. Roosevelt"},
 {quote: "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.", author: "Martin Luther King Jr."},
 {quote: "Do one thing every day that scares you.", author: "Eleanor Roosevelt"},
 {quote: "Well done is better than well said.", author: "Benjamin Franklin"},
 {quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.", author: "Helen Keller"},
 {quote: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle"},
 {quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson"},
 {quote: "Be yourself; everyone else is already taken.", author: "Oscar Wilde"}
];

const COLORS_ARRAY = [
 "black", "brown", "crimson", "tomato", "lightcoral", "firebrick", "sienna", "chocolate", "red", "darkorange", "orange", "indianred", "goldenrod", "darkkhaki", "darkgoldenrod", "green", "darkolivegreen", "forestgreen", "limegreen", "mediumseagreen", "seagreen", "blue", "navy", "dodgerblue", "cornflowerblue", "royalblue", "steelblue", "cadetblue", "midnightblue", "teal", "slateblue", "darkmagenta", "violet", "mediumvioletred", "darkslategrey", "slategrey", "dimgrey"
];

function App() {
 const [quote, setQuote] = useState('');
 const [author, setAuthor] = useState('');
 const [randomNumber, setRandomNumber] = useState('');

 const [fade, setFade] = useState('fade-out');

 const headTag = document.getElementsByTagName('head')[0];
 const styleTag = document.createElement('style');

 const newQuote = () => {
   setFade('fade-out');
   let rand;
   do {
     rand = Math.floor(Math.random() * QUOTE_ARRAY.length);
   } while (rand === randomNumber);
   setRandomNumber(rand);
   setTimeout(() => {
     styleTag.innerHTML = `:root {--theme-color: ` 
     + COLORS_ARRAY[Math.floor(Math.random() * COLORS_ARRAY.length)] 
     + `};`
     setFade('fade-in');
     setQuote(QUOTE_ARRAY[rand].quote);
     setAuthor("- " + QUOTE_ARRAY[rand].author + " -");
     headTag.appendChild(styleTag);
   }, 500);
 };

 useEffect(() => 
   {newQuote();},  
   // eslint-disable-next-line
   []
 );

 return (
   <div className="App">
     <header className="App-header">
       <h1>Random Quote Machine App</h1>
     </header>
     <main className="App-main">
       <div id="quote-box">
           <div className={"quote-text " + fade}>
             <h2 id="text">
               <i className="fa-solid fa-quote-left fa-xs"></i> {quote} <i className="fa-solid fa-quote-right fa-xs"></i>
             </h2>
             <h3 id="author">{author}</h3>
           </div>          
         <div className="quote-actions">
           <a className="fa-brands fa-square-twitter"
             title="share this quote on twitter"
             href={encodeURI(`https://twitter.com/intent/tweet?text="${quote}" ${author}`)} 
             id="tweet-quote" target="_blank" rel="noreferrer">
           </a>
           <button id="new-quote" onClick={() => newQuote()}>
             New Random Quote
           </button>
         </div>
       </div>
     </main>
     <footer className="App-footer">
       <p>by <a href="https://github.com/theHiddenGibbon" target="_blank" rel="noreferrer">theHiddenGibbon</a></p>
     </footer>
   </div>
 );
}

export default App;
