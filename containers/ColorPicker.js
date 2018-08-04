import { connect } from 'react-redux';
import { selectColor } from '../store';
import Color from '../components/Color';
import ColorPicker from '../components/ColorPicker';

const palette = {
  'Black': '#000',
  'White': '#fff',
  'Red': '#f00',
  'Green': '#0f0',
  'Blue': '#00f',
};

const ColorPickerContainer = ({ color, selectColor }) => (
  <ColorPicker>
    {Object.keys(palette).map(name => (
      <Color
        key={name}
        name={name}
        onMouseDown={() => selectColor(palette[name])}
        selected={color === palette[name]}
      />
    ))}
  </ColorPicker>
);

const mapStateToProps = (state) => ({
  color: state.color,
});

const mapDispatchToProps = {
  selectColor,
};

export default connect(mapStateToProps, mapDispatchToProps)(ColorPickerContainer);
