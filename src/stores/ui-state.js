import {observable, computed} from 'mobx';

class UIState {
    @observable pendingRequestCount = 0;


    // constructor() {}

    @computed get appIsInSync() {
        return this.pendingRequestCount === 0
    }
}


const uiState = new UIState();
export default uiState;
