import React from 'react';
import ReactDOM from 'react-dom';

import {useStrict} from 'mobx';
import {Provider} from 'mobx-react';
import {MobxRouter, startRouter} from 'mobx-router';

import AppHeader    from './components/App/AppHeader';
import ModalPage    from './components/Modal/ModalPage';
import appRoutes    from './config/app-routes';
import store        from './stores/store';

import './index.css';


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
