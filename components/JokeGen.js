import PropTypes from 'prop-types';

export default function JokeGen({ joke, btnText }) {
  return (
    <>
      <h1>{ joke.setup }</h1>
      <p>{ btnText !== 'Get Punchline' ? joke.punchline : ''} </p>
    </>
  );
}

JokeGen.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }),
  btnText: PropTypes.string,
};

JokeGen.defaultProps = {
  joke: '',
  btnText: '',
};
