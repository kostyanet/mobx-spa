import {action, observable, computed} from 'mobx';


export default class LoginView {

    @observable isPending   = false;
    @observable message     = null;
    @observable userSession = null;


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


    @action.bound _loginSuccess = (userSession) => {
        this.isPending = false;
        this.message = null;
        this.userSession = userSession;

        const whereToGo = this.store.router.params.returnUrl || 'home';
        this.store.router.goTo(this.appRoutes[whereToGo]);
    };


    @action.bound _loginError = (err) => {
        this.isPending = false;
        this.message = err.message;
    };


    @action logout = () => {
        this.userSession = null;
        window.localStorage.removeItem('user');
        // this.authService.logout...
    };

}
