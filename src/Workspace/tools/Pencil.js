// import React, { Component } from 'react';

// class Pencil extends Component {
//   down(algo) {
//     console.log('pencil down!', algo);
//   }
//
//   render() {
//     return (
//       <div>
//
//       </div>
//     );
//   }
// }

// export default Pencil;

export default {
  handleMouseDown: ({ x, y, scale, color, selectedLayer }) => {
    // selectedLayer.ctx.scale(scale, scale);
    selectedLayer.ctx.fillStyle = color;
    selectedLayer.ctx.fillRect(x, y, scale, scale);
  }
}
