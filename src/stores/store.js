import {RouterStore} from 'mobx-router';
import LoginView     from './views/login-view.store';

import appRoutes from '../config/app-routes';
import authService   from '../services/auth-service';


class Store {
    constructor() {
        this.router = new RouterStore();

        this.views = {
            loginView:  new LoginView(this, appRoutes, authService)
        };
    }
}


export default new Store();
