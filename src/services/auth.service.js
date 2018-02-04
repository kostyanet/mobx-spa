import apiService           from './api.service';


class AuthService {

    login(creds, keepLogged) {
        window.localStorage.removeItem('user');

        return apiService.post('/users/login', creds)
            .then(response => {
                const userObj = Object.assign({}, response.data, {keepLogged});
                window.localStorage.setItem('user', JSON.stringify(userObj));

                window.console.log('AuthService: successfully logged.');
                return response.data;
            });
    }


    logout(token) {
        window.localStorage.removeItem('user');

        return apiService.get('/users/logout');
    }
}


const authService = new AuthService();
export default authService;
