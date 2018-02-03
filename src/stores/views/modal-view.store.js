import {action, observable} from 'mobx';


export default class ModalView {

    @observable content = null;
    @observable isShown = false;


    constructor(store) {
        this.store = store;
    }


    @action showModal = (content) => {
        this.content = content || null;
        this.isShown = true;
    };


    @action closeModal = () => {
        this.content = null;
        this.isShown = false;
    };

}
