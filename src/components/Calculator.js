import React, { useState } from 'react';
import './Calculator.css';
import maths from '../events/math';

const Calculator = () => {
  const stateOb = {
    total: 0,
    next: null,
    operation: null,
  };

  const [property, setProperty] = useState(stateOb);

  const handleClick = (button) => {
    const buttonValue = button.target.textContent;
    const newProperty = { ...property };
    setProperty(maths(newProperty, buttonValue));
  };

  return (
    <>
      <div className="calc">
        <div className="display">
          { property.total }
          { property.operation }
          { property.next }
        </div>
        <button type="button" onClick={handleClick} className="button">AC</button>
        <button type="button" onClick={handleClick} className="button">%</button>
        <button type="button" onClick={handleClick} className="button">+/-</button>
        <button type="button" onClick={handleClick} className="button dark">/</button>
        <button type="button" onClick={handleClick} className="button">7</button>
        <button type="button" onClick={handleClick} className="button">8</button>
        <button type="button" onClick={handleClick} className="button">9</button>
        <button type="button" onClick={handleClick} className="button dark">*</button>
        <button type="button" onClick={handleClick} className="button">4</button>
        <button type="button" onClick={handleClick} className="button">5</button>
        <button type="button" onClick={handleClick} className="button">6</button>
        <button type="button" onClick={handleClick} className="button dark">-</button>
        <button type="button" onClick={handleClick} className="button">1</button>
        <button type="button" onClick={handleClick} className="button">2</button>
        <button type="button" onClick={handleClick} className="button">3</button>
        <button type="button" onClick={handleClick} className="button dark">+</button>
        <button type="button" onClick={handleClick} className="button base">0</button>
        <button type="button" onClick={handleClick} className="button">.</button>
        <button type="button" onClick={handleClick} className="button dark">=</button>
      </div>
    </>
  );
};

export default Calculator;
