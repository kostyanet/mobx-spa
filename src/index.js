import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import {useStrict} from 'mobx';

import App from './components/App/App.jsx';
import modelStore from './stores/model-store';
import uiStore from './stores/ui-store';
import './index.css';

useStrict(true);


ReactDOM.render(<App
    modelStore={modelStore}
    uiStore={uiStore}
/>, document.getElementById('root'));

registerServiceWorker();
