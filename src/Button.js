import React from 'react';

function Button({ text, color, className }) {
  return <div className={`button button__${color} ${className}`}>{text}</div>;
}

export default Button;
