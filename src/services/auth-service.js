import axios                from 'axios';

// import AppStateService      from '../appState/app-state.service.js';
import AppValues            from '../misc/app-values.js';


class AuthService {

    login(creds, keepLogged) {
        window.localStorage.removeItem('user');

        return axios({
            method: 'post',
            url:    AppValues.BASE_URL + '/login',
            data:   creds
        })
            // .then(_user => this._onSuccess(_user.data, keepLogged))
            // .catch(_error => this._onError(_error));
    }


    // _onSuccess(user, keepLogged) {
    //     AppStateService.mergeAppState({
    //         view:   {
    //             LoginPage: {state: 'authorized'}
    //         },
    //         model:  {user}
    //     });
    //
    //     AppStateService.appHistory.push(AppStateService.appState.view.LoginPage.returnUrl || '/protected');
    //
    //     keepLogged && window.localStorage.setItem('user', JSON.stringify(user));
    //     window.console.log('AuthService: successfully logged.');
    //
    //     return user;
    // }


    // _onError(error) {
    //     if (!error.response) {
    //         window.console.error(`AuthService: ${error.stack}`);
    //         // return error.message;
    //     }
    //
    //     AppStateService.mergeAppState({
    //         view:   {
    //             LoginPage: {state: 'rejected'}
    //         },
    //         model:  {user: null}
    //     });
    //
    //     // todo: move to exception service
    //     let res = error.response;
    //     let err = res.data.error;
    //
    //     window.console.error(`AuthService: ${res.status} ${res.statusText} - ${err}`);
    //     // throw new Error(err);
    // }

}

const authService = new AuthService();
export default authService;