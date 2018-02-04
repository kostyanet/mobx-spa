import axios                from 'axios';
import AppValues            from '../config/app-values.js';


const api = axios.create({
    baseURL: [AppValues.API_URL, AppValues.APPLICATION_ID, AppValues.API_KEY].join('/'),
});


class ApiService {
    get(query) {
        return api({
            method: 'get',
            url: query,
        })
            .catch(this.handleApiError);
    }


    post(query, data) {
        const user = window.localStorage.getItem('user');
        const token = user ? JSON.parse(user).keepLogged : null;

        return api({
            method: 'post',
            url: query,
            data,
            headers: {
                'Content-Type': 'application/json',
                'user-token': token
            }
        })
            .catch(apiService.handleApiError);
    }


    handleApiError(err) {
        // parsing error
        if (!err.response) {
            window.console.error(err.stack);
            throw new Error(`Unexpected Error: ${err.message}`);
        }

        const res = err.response;
        window.console.error(`APIService: ${res.status} ${res.statusText} - ${res.data.message}`);

        throw new Error(res.data.message);
    }
}


const apiService = new ApiService();
export default apiService;
