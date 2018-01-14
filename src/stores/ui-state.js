import {action, observable, computed} from 'mobx';

import authService from '../services/auth-service';

class UIState {
    //@observable pendingRequestCount = 0;

    @observable LoginPage = {
        isPending:  false,
        message:    null
    };


    constructor(authService) {
        this.authService = authService;
    }


    @action login = (creds) => {
        this.LoginPage.isPending = true;

        this.authService.login(creds)
            .then(this._loginSuccess)
            .catch(this._loginError);
    };

    @action.bound _loginSuccess = () => {
        this.LoginPage.isPending = false;
    };

    @action.bound _loginError = () => {
        this.LoginPage.isPending = false;
    };



    //@computed get appIsInSync() {
    //    return this.pendingRequestCount === 0
    //}

}


const uiState = new UIState(authService);
export default uiState;
