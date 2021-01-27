const QuoteDisplay = ({ quote, author, updateQuote }) => {
  return (
    <div>
      <h2>Random Swanson Quote</h2>
      <p id="text">"{quote}"</p>
      <p id="author">~{author}</p>
      <button children={'New Quote'} onClick={updateQuote} />
    </div>
  );
};

export default QuoteDisplay;
