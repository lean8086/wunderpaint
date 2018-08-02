import { connect } from 'react-redux';
import { selectTool } from '../store';
import tools from '../tools';
import Tool from '../components/Tool';

const ToolboxContainer = ({ tool, selectTool }) => (
  <div className="toolbox">
    {Object.keys(tools).map(name => (
      <Tool
        key={name}
        name={name}
        onMouseDown={() => selectTool(name)}
        selected={tool === name}
      />
    ))}

    <style jsx>{`
      .toolbox {
        z-index: 99;
        position: fixed;
        bottom: 20px;
        left: 0;
        right: 0;
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
