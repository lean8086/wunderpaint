export default (props) => (
  <div className='Zoom'>
    <button
      onMouseDown={() => props.increaseScale()}
      disabled={props.blockIncrease}
    >+</button>
    <span>{props.percentage}%</span>
    <button
      onMouseDown={() => props.decreaseScale()}
      disabled={props.blockDecrease}
    >-</button>
  </div>
);
