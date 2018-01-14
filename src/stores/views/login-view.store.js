import {action, observable, computed} from 'mobx';


export default class LoginView {

    @observable isPending   = false;
    @observable message     = null;


    constructor(store, appRoutes, authService) {
        this.authService = authService;
        this.appRoutes = appRoutes;
        this.store = store;
    }


    @action login = (creds, keepLogged) => {
        this.isPending = true;

        this.authService.login(creds, keepLogged)
            .then(this._loginSuccess)
            .catch(this._loginError);
    };


    @action.bound _loginSuccess = () => { debugger
        this.isPending = false;
        this.store.router.goTo(this.appRoutes['home']);
    };


    @action.bound _loginError = () => {
        this.isPending = false;
    };

}
