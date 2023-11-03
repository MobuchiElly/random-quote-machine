'use client'

import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { FaTwitter, FaTumblr, FaQuoteLeft } from 'react-icons/fa'
import fetchQuotes from './FetchPosts'
import colors from './colors';


const RandomQuoteMachine = () => {
  const [data, setData] = useState([]);
  const [randomNum, setRandomNum] = useState(0)
  const [quote, setQuote] = useState('loading quote...............')
  const [author, setAuthor] = useState('author')
  const [color, setColor] = useState('red')
  const [fadeIn, setFadeIn] = useState(false)

  const fetchQuotes = async () => {
    try {
    const res = await axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const dataVal = res.data;
      setData(dataVal)
    console.log(data);
    } catch(err) {
      console.error('Error fetching data:', err);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, [])

  // useEffect((quote) => {
  //   getRandomQuote();
  //   getRandomColor();
  
  //   return () => {
  //     second
  //   }
  // }, [quote])
  

  const getRandomQuote = () => {
    if (data.quotes && data.quotes.length > 0) {
      let num = Math.floor(Math.random() * data.quotes.length)
      setRandomNum(num);
  
      setQuote(data.quotes[num]['quote']);
      setAuthor(data.quotes[num]['author']); 
    }
  }

  const getRandomColor = () => {
    if (colors.length > 0) {
      const randIndex = Math.floor(Math.random() * colors.length);
      setColor(colors[randIndex]);
    }
  }

  const setAll = () => {
    setFadeIn(true);
    getRandomColor();
    setTimeout(() => {
      getRandomQuote();
    }, 500)
    

    setTimeout(() => {
      setFadeIn(false)
    }, 500);
   }

 console.log(color);

   const fade = {
    opacity: 0,
    transition: `opacity 0.5s ease-in`,
   }

   const tweetURL = `https://twitter.com/intent/tweet?hashtags=quotes&text="${quote}" ${author}`;
   const tumblrURL = 'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=' +
   encodeURIComponent(author) +
   '&content=' +
   encodeURIComponent(quote) +
   '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
  
console.log(author);
 return (
  <main className={`border-4 border-green-700 w-screen h-screen flex justify-center transition-background-color`} style={{backgroundColor: `${color}`, color: `${color}`}}>


      <div className={`my-auto`}>
      <div id="wrapper" >
        <div id="quote-box" >

          {/* Animation needed here. opacity 0, 500 then opacity 1, 500 */}
          <div className='transition-background-color' styles={fadeIn && 'fade-in'}>
            <FaQuoteLeft style={{display: 'inline'}} className='mr-2'/>
            <span id="text">{quote}</span>
          </div>

          {/* Animation needed here. opacity 0, 500 then opacity 1, 500 */}
          <div className={`quote-author ${fadeIn ? 'fade-in' : ''} fade-in`} style={{color: `${color}`}}>- {author}<span id="author"></span></div>

          <div className="buttons">
            <a href={tweetURL}
              className="button transition-background-color flex justify-center" style={{backgroundColor: `${color}`}}
              id="tweet-quote"
              title="Tweet this quote!"
              target="_top"
            >
              <FaTwitter className='mx-auto'/>
            </a>
            <a href={tumblrURL} style={{backgroundColor: `${color}`}}
              className="flex justify-center button transition-background-color"  id="tumblr-quote"
              title="Post this quote on tumblr!" 
              target="_blank" 
            >
              <FaTumblr className='mx-auto'/>
            </a>
            <button onClick={setAll} className="button transition-background-color" style={{backgroundColor: `${color}`}} id="new-quote">New quote</button>
          </div>
        </div>
        <div className="footer">by <a href="https://github.com/MobuchiElly">ellydev</a></div>
      </div>
      </div>
    </main>
  )
}

export default RandomQuoteMachine
