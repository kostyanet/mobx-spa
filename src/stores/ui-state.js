import {action, observable, computed} from 'mobx';

class UIState {
    //@observable pendingRequestCount = 0;

    @observable LoginPage = {
        isPending:  false,
        message:    null
    };


     constructor() {}


    @action login() => {
        this.LoginPage.isPending = true;
    }



    //@computed get appIsInSync() {
    //    return this.pendingRequestCount === 0
    //}

}


const uiState = new UIState();
export default uiState;
