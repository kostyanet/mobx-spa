import {action, observable, computed} from 'mobx';


export default class ModalView {

    @observable content = null;
    @observable isShown = true;


    constructor(store) {
        this.store = store;
    }


    @action showModal = (content) => {
        this.content = content || null;
        this.isShown = true;
    }

}
