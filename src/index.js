import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import registerServiceWorker from './registerServiceWorker';
import shortid from 'shortid';
console.log(shortid.generate());
ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
