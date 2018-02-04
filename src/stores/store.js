import {RouterStore} from 'mobx-router';

import appRoutes   from '../config/app-routes';
import apiService  from '../services/api.service';
import authService from '../services/auth.service';

import InventoryModel from './models/inventory-model.store';
import LoginView      from './views/login-view.store';
import ModalView      from './views/modal-view.store';


class Store {
    constructor() {
        this.router = new RouterStore();

        this.views = {
            loginView:  new LoginView(this, appRoutes, authService),
            modalView:  new ModalView(this),
        };

        this.models = {
            inventory:  new InventoryModel(this, apiService)
        };
    }
}


export default new Store();
