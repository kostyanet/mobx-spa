import {RouterStore} from 'mobx-router';

import appRoutes   from '../config/app-routes';
import authService from '../services/auth-service';

import LoginView     from './views/login-view.store';
import ModalView   from './views/modal-view.store';


class Store {
    constructor() {
        this.router = new RouterStore();

        this.views = {
            loginView:  new LoginView(this, appRoutes, authService),
            modalView:  new ModalView(this),
        };
    }
}


export default new Store();
