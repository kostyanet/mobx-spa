import {action, observable} from 'mobx';
import AppValues            from '../../config/app-values';


export default class InventoryModel {

    defaultPageSize = AppValues.DEFAULT_PAGE_SIZE;

    @observable isPending   = false;
    @observable list        = [];
    @observable pages       = 99;


    constructor(store, apiService) {
        this.apiService = apiService;
        this.store = store;
    }


    @action fetchInventory = (pageSize = this.defaultPageSize, page = 0) => {
        this.isPending = true;

        this.apiService.get(`/data/inventory?pageSize=${pageSize}&offset=${pageSize * page}`)
            .then(action('fetchInventorySuccess', res => this.list = res.data))
            .then(action(_ => this.isPending = false))
            .catch(this._handleError);
    };


    @action removeItems = toBeRemovedList => {
        this.isPending = true;

        return Promise.all(toBeRemovedList.map(this._removeSingleItem))
            .then(action('removeItemsSuccess', _ => this._cleanList(toBeRemovedList)))
            .then(action(_ => this.isPending = false))
            .catch(this._handleError);
    };


    _removeSingleItem = objectId => this.apiService.delete(`/data/inventory/${objectId}`);


    @action.bound _handleError = err => {
        this.isPending = false;
        this.store.views.modalView.showModal(`<h3>${err.message}</h3>`);
    };


    @action.bound _cleanList = toBeRemovedList => {
        toBeRemovedList.forEach(objectId => {
            let idx = this.list.findIndex(item => item.objectId === objectId);
            this.list.splice(idx, 1);
        });
    }
}
