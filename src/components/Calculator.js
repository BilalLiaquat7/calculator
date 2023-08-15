import './style.css';

export default function Calculator() {
  return (
    <div className='mainSection'>
      <input className='input'/>
      <div className='row'>
        <button className="simpleButton">AC</button>
        <button className="simpleButton">+/-</button>
        <button className="simpleButton">%</button>
        <button className="expressionButton">÷</button>
      </div>
      <div className='row'>
        <button className="simpleButton">7</button>
        <button className="simpleButton">8</button>
        <button className="simpleButton">9</button>
        <button className="expressionButton">x</button>
      </div>
      <div className='row'>
        <button className="simpleButton">4</button>
        <button className="simpleButton">5</button>
        <button className="simpleButton">6</button>
        <button className="expressionButton">-</button>
      </div>
      <div className='row'>
        <button className="simpleButton">1</button>
        <button className="simpleButton">2</button>
        <button className="simpleButton">3</button>
        <button className="expressionButton">+</button>
      </div>
    </div>
  );
}
