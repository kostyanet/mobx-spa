import {action, observable} from 'mobx';


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
        this.store.views.modalView.showModal();

        this.authService.login(creds, keepLogged)
            .then(this._loginSuccess)
            .catch(this._handleError);
    };


    @action.bound _loginSuccess = (userSession) => {
        this.isPending = false;
        this.message = null;
        this.userSession = userSession;

        this.store.views.modalView.closeModal();

        const whereToGo = this.store.router.params.returnUrl || 'home';
        this.store.router.goTo(this.appRoutes[whereToGo]);
    };


    @action.bound _handleError = (err) => {
        this.isPending = false;
        this.message = err.message;

        this.store.views.modalView.closeModal();
    };


    @action logout = () => {
        this.isPending = true;
        this.userSession = null;

        this.authService.logout()
            .then(action('_logoutSuccess', (x) => this.isPending = false))
            .catch(this._handleError);
    };

}
