import axios                from 'axios';

// import AppStateService      from '../appState/app-state.service.js';
import AppValues            from '../config/app-values.js';


class AuthService {

    login(creds, keepLogged) {
        window.localStorage.removeItem('user');

        return axios({
            method: 'post',
            url:    AppValues.BASE_URL + '/login',
            data:   creds
        })

            .then(response => {
                keepLogged && window.localStorage.setItem('user', JSON.stringify(response.data));

                window.console.log('AuthService: successfully logged.');
                return response.data;
            })

            // todo: move to exception service
            .catch(data => {
                // parsing error
                if (!data.response) {
                    window.console.error(`AuthService: ${data.stack}`);
                    throw new Error(`Unexpected Error: ${data.message}`);
                }

                const res = data.response;
                window.console.error(`AuthService: ${res.status} ${res.statusText} - ${res.data.error}`);

                throw new Error(res.data.error);
            });
    }

}

const authService = new AuthService();
export default authService;