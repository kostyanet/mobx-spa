import {observable} from 'mobx'

class RootStore {
    constructor() {
        this.userStore = new UserStore(this);
    }
}

class UserStore {
    @observable user = {
        login: 'me'
    };

    constructor(rootStore) {
        this.rootStore = rootStore;
    }


    // @observable todos = []
    // getTodos(user) {
    //     // access todoStore through the root store
    //     return this.rootStore.todoStore.todos.filter(todo => todo.author === user)
    // }
}


const rootStore = new RootStore();
export default rootStore;
