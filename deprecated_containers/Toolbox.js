import { connect } from 'react-redux';
import { selectTool } from '../store';
import tools from '../tools';
import Tool from '../components/Tool';
import Toolbox from '../components/Toolbox';

const ToolboxContainer = ({ tool, selectTool }) => (
  <Toolbox>
    {Object.keys(tools).map(name => (
      <Tool
        key={name}
        name={name}
        onMouseDown={() => selectTool(name)}
        selected={tool === name}
      />
    ))}
  </Toolbox>
);

const mapStateToProps = (state) => ({
  tool: state.tool,
});

const mapDispatchToProps = {
  selectTool,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolboxContainer);
