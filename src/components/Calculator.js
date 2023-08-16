import './style.css';
import { useState } from 'react';
import calculate from '../logic/calculate';

export default function Calculator() {
  const [value, setValue] = useState({
    total: '',
    next: '',
    operation: '',
  });

  const getValue = (event) => {
    const btn = event.target.innerHTML;
    setValue(calculate(value, btn));
  };

  return (
    <div className="mainSection">
      <div className="input">{value.total} {value.operation} {value.next}</div>
      <div className="row">
        <button className="simpleButton" onClick={getValue}>
          AC
        </button>
        <button className="simpleButton" onClick={getValue}>
          +/-
        </button>
        <button className="simpleButton" onClick={getValue}>
          %
        </button>
        <button className="expressionButton" onClick={getValue}>
          ÷
        </button>
      </div>
      <div className="row">
        <button className="simpleButton" onClick={getValue}>
          7
        </button>
        <button className="simpleButton" onClick={getValue}>
          8
        </button>
        <button className="simpleButton" onClick={getValue}>
          9
        </button>
        <button className="expressionButton" onClick={getValue}>
          x
        </button>
      </div>
      <div className="row">
        <button className="simpleButton" onClick={getValue}>
          4
        </button>
        <button className="simpleButton" onClick={getValue}>
          5
        </button>
        <button className="simpleButton" onClick={getValue}>
          6
        </button>
        <button className="expressionButton" onClick={getValue}>
          -
        </button>
      </div>
      <div className="row">
        <button className="simpleButton" onClick={getValue}>
          1
        </button>
        <button className="simpleButton" onClick={getValue}>
          2
        </button>
        <button className="simpleButton" onClick={getValue}>
          3
        </button>
        <button className="expressionButton" onClick={getValue}>
          +
        </button>
      </div>
      <div className="row">
        <button className="zeroButton" onClick={getValue}>
          0
        </button>
        <button className="simpleButton" onClick={getValue}>
          .
        </button>
        <button className="expressionButton" onClick={getValue}>
          =
        </button>
      </div>
    </div>
  );
}
