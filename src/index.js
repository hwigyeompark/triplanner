import React from 'react';
import ReactDOM from 'react-dom';
import EntryComponent from './EntryComponent';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <EntryComponent/>,
    document.getElementById('root')
);

if (module.hot){
    module.hot.accept();
}
registerServiceWorker();
