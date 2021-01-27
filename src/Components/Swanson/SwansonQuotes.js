import QuoteDisplay from './QuoteDisplay';
import { useState, useEffect } from 'react';

const SwansonQuotes = () => {
  const [isPending, setIsPending] = useState(true);
  const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
  const [quote, setQuote] = useState('');

  const updateQuote = async () => {
    setIsPending(true);
    const response = await fetch(url);
    const data = await response.json();
    setQuote(data[0]);
    setIsPending(false);
  };

  useEffect(() => {
    updateQuote();
    console.log('This happens on mount');
  }, []);

  return (
    <div id="quote-box" className="home">
      {quote && (
        <QuoteDisplay
          quote={quote}
          author="Ron Swanson"
          updateQuote={updateQuote}
        />
      )}
      {isPending && <div>Loading...</div>}
    </div>
  );
};

export default SwansonQuotes;
