import React from 'react';
import ReactDOM from 'react-dom';

import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';
import {MobxRouter, startRouter} from 'mobx-router';

import AppHeader    from './components/App/AppHeader';
import Backendless  from 'backendless';
import ModalPage    from './components/Modal/ModalPage';
import appRoutes    from './config/app-routes';
import store        from './stores/store';

import './index.css';


//Backendless: defaults
var APPLICATION_ID = '14466D7D-96D8-CFEC-FFF8-4EEB942C2000';
var API_KEY = '52B35670-CDE4-43F2-FFD0-1F7D761FFA00';
Backendless.serverURL = "https://api.backendless.com";
Backendless.initApp(APPLICATION_ID, API_KEY);


useStrict(true);
startRouter(appRoutes, store);


ReactDOM.render(
    <Provider store={store}>
        <div>
            <AppHeader/>
            <MobxRouter/>
            <ModalPage />
        </div>
    </Provider>, document.getElementById('root')
);
