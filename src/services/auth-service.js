import Backendless  from 'backendless';


class AuthService {

    login(creds, keepLogged) {
        return Backendless.UserService.login(creds.username, creds.password, keepLogged)
            .then(response => {
                window.console.log('AuthService: successfully logged.');
                return response;
            })

    }


    logout() {
        return Backendless.UserService.logout()
            .catch(this._handleError);
    }


    _handleError(error) {
        // parsing error
        if (!error.status) {
            window.console.error(`AuthService: ${error.stack}`);
            throw new Error(`Unexpected Error: ${error.message}`);
        }

        window.console.error(`AuthService: ${error.status} - ${error.message}`);

        throw new Error(error.message);
    }

}



const authService = new AuthService();
export default authService;


// Older version with axios lib

// class AuthService {
//
//     login(creds, keepLogged) {
//         window.localStorage.removeItem('user');
//
//         return axios({
//             method: 'post',
//             url:    AppValues.BASE_URL + '/login',
//             data:   creds
//         })
//             .then(response => { debugger
//                 keepLogged && window.localStorage.setItem('user', JSON.stringify(response.data));
//
//                 window.console.log('AuthService: successfully logged.');
//                 return response.data;
//             })
//
//             // todo: move to exception service
//             .catch(data => { debugger
//                 // parsing error
//                 if (!data.response) {
//                     window.console.error(`AuthService: ${data.stack}`);
//                     throw new Error(`Unexpected Error: ${data.message}`);
//                 }
//
//                 const res = data.response;
//                 window.console.error(`AuthService: ${res.status} ${res.statusText} - ${res.data.error}`);
//
//                 throw new Error(res.data.error);
//             });
//     }
//
// }
