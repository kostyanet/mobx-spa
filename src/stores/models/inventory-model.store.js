import {action, observable} from 'mobx';
import AppValues            from '../../config/app-values';


export default class InventoryModel {

    defaultPageSize = AppValues.DEFAULT_PAGE_SIZE;

    @observable isPending   = false;
    @observable list        = [];
    @observable pages       = 999;


    constructor(store, apiService) {
        this.apiService = apiService;
        this.store = store;
    }


    @action fetchInventory = (pageSize = this.defaultPageSize, page = 0) => {
        this.isPending = true;

        this.apiService.get(`/data/inventory?pageSize=${pageSize}&offset=${pageSize * page}`)
            .then(action('fetchInventorySuccess', (res) => this.list = res.data))
            .then(action(_ => this.isPending = false))
            .catch(this._handleError);
    };


    @action.bound _handleError = (err) => {
        this.isPending = false;
        this.store.views.modalView.showModal(`<h3>${err.message}</h3>`);
    };

}
