import React from 'react';
import './spinner.styles.css';

const Spinner = () => {
  return (
    <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
  );
};

export default Spinner;