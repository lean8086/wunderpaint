import { connect } from 'react-redux';
import { selectColor } from '../store';
import ColorPicker from '../components/ColorPicker'

const palette = {
  'Black': '#000',
  'White': '#fff',
  'Red': '#f00',
  'Green': '#0f0',
  'Blue': '#00f',
};

const ColorPickerContainer = ({ color, selectColor }) => (
  <div>
    {Object.keys(palette).map(name => (
      <ColorPicker
        key={name}
        onMouseDown={() => selectColor(palette[name])}
        name={name}
        selected={color === palette[name]}
      />
    ))}
  </div>
);

const mapStateToProps = (state) => ({
  color: state.color,
});

const mapDispatchToProps = {
  selectColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerContainer);
