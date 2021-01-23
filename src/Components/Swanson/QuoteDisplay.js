const QuoteDisplay = ({ quote, author }) => {
  return (
    <div>
      <h2>Random Swanson Quote</h2>
      <p id="text">{quote}</p>
      <p id="author">~{author}</p>
    </div>
  );
};

export default QuoteDisplay;
