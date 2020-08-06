export default (props) => (
  <div>
    <button
      onMouseDown={props.decreaseScale}
      disabled={!props.allowDecrease}
    >-</button>
    <span>{props.percentage}%</span>
    <button
      onMouseDown={props.increaseScale}
      disabled={!props.allowIncrease}
    >+</button>
  </div>
);
