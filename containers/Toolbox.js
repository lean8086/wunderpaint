import { connect } from 'react-redux';
import { selectTool } from '../store';
import tools from '../tools';
import Tool from '../components/Tool';

const ToolboxContainer = ({ tool, selectTool }) => (
  <div>
    {Object.keys(tools).map(name => (
      <Tool
        key={name}
        name={name}
        onMouseDown={() => selectTool(name)}
        selected={tool === name}
      />
    ))}

    <style jsx>{`
      div {
        z-index: 99;
        position: fixed;
        bottom: 20px;
      }
      `}</style>
  </div>
);

const mapStateToProps = (state) => ({
  tool: state.tool,
});

const mapDispatchToProps = {
  selectTool,
};

export default connect(mapStateToProps, mapDispatchToProps)(ToolboxContainer);
