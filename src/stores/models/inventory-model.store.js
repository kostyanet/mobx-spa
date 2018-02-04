import {action, observable} from 'mobx';


export default class InventoryModel {

    @observable isPending   = false;
    @observable inventory   = null;


    constructor(store, apiService) {
        this.apiService = apiService;
        this.store = store;
    }


    @action fetchInventory = () => {
        this.isPending = true;
        this.store.views.modalView.showModal();

        this.apiService.get('/data/inventory')
            .then(action('fetchInventorySuccess', (res) => this.inventory = res.data))
            .then(this._handleSuccess)
            .catch(this._handleError);
    };


    @action.bound _handleSuccess = _ => {
        this.isPending = false;
        this.store.views.modalView.closeModal();
    };


    @action.bound _handleError = (err) => {
        this.isPending = false;
        this.store.views.modalView.showModal(`<h3>${err.message}</h3>`);
    };




    // @action.bound _handleError = (err) => {
    //     this.isPending = false;
    //     this.message = err.message;
    //
    //     this.store.views.modalView.closeModal();
    // };
}
