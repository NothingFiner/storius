import React from 'react';

const Errors = ({ errorsArray }) => {
  if (!errorsArray) return null;
  const errors = errorsArray.map((error, i) => <li key={`error-${i}`}>{error}</li>);
  return (
    <ul className="errors">
      {errors}
    </ul>
  );
};

Errors.propTypes = {
  errorsArray: React.PropTypes.arrayOf(React.PropTypes.string).isRequired,
};

Errors.defaultProps = {
  errorsArray: [],
};

export default Errors;
