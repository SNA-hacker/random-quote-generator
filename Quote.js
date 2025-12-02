
function Quote({ quote }) {
  return (
    <div id="container">
      <h2>"{quote.quote}"</h2>
      <p>- {quote.author}</p>
    </div>
  );
}

export default Quote;
