import './bootstrap';
import React from 'react';
import { render } from 'react-snapshot'
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import domtoimage from 'dom-to-image';
import FileSaver from 'file-saver';

const rootEl = document.getElementById('root');
render(<App />, rootEl);

if (module.hot) {
  module.hot.accept('./App', () => {
    const NextApp = require('./App').default;
    render(<NextApp />, rootEl);
  });
}

var node = document.getElementById('cv');

domtoimage
.toBlob(node)
.then(function (blob) {
  FileSaver.saveAs(blob, 'cv.png');
});

registerServiceWorker();
