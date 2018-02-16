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
  handleMouseDown: ({ x, y, scale, selectedLayer }) => {
    selectedLayer.ctx.clearRect(x, y, scale, scale);
  }
}
