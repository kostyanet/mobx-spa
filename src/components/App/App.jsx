import React from 'react';
import {Router, Route} from 'react-router-dom';
import { Provider, observer } from 'mobx-react';
import createBrowserHistory from 'history/createBrowserHistory'

import PrimaryHeader from './PrimaryHeader'

import 'bootstrap/dist/css/bootstrap.css'
// import '../../App.css';
import '../../index.css'
import LoginPage from "../Login/LoginPage";

import rootStore from "../../stores/model-store";
import uiState from "../../stores/ui-state";


const history = createBrowserHistory();
const stores = { rootStore, uiState };

@observer
class App extends React.Component {
    render() {
        return (
            <div className="_main-layout">
                <Provider {...stores}>
                    <Router history={history}>
                        <PrimaryLayout />
                    </Router>

                    {/*<p className="App-intro">*/}
                        {/*{this.props.modelStore.userStore.user.login}*/}
                    {/*</p>*/}

                    {/*<LoginPage></LoginPage>*/}
                </Provider>
            </div>
        );
    }
}

export default App;


const PrimaryLayout = () => (
    <div className="primary-layout">
        <PrimaryHeader />
        <main>
            <Route path="/" exact component={LoginPage} />
    {/*<Route path="/users" component={UsersPage} />*/}
        </main>
    </div>
)