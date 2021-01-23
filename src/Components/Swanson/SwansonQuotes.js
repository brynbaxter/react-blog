import useFetch from '../../useFetch';
import QuoteDisplay from './QuoteDisplay';
import { useState, useEffect } from 'react';

const SwansonQuotes = () => {
  const { data: quote, isPending, error } = useFetch(
    'https://ron-swanson-quotes.herokuapp.com/v2/quotes'
  );

  const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';
  const [quoteA, setQuote] = useState('');

  const updateQuote = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setQuote(data[0]);
  };

  useEffect(() => {
    updateQuote();
    console.log('This happens on mount');

    return () => {
      console.log('This happens on unmount');
    };
  }, []);

  return (
    <div id="quote-box" className="home">
      {error && <div>{error}</div>}
      {isPending && <div>Loading...</div>}
      {quote && <QuoteDisplay quote={quoteA} author="Ron Swanson" />}
      {quoteA && <button children={'New Quote'} onClick={updateQuote} />}
    </div>
  );
};

export default SwansonQuotes;
