import './Quote.css';

const Quote = () => {
  const quote = 'In mathematics the art of proposing a question must be held of higher value than solving it.';
  const author = '— Georg Cantor, German mathematician';

  return (
    <div className="quotes">
      <p>{quote}</p>
      <span>{author}</span>
    </div>
  );
};

export default Quote;
