import React from 'react';
import {Router} from 'react-router-dom';
import { observer } from 'mobx-react';
import createBrowserHistory from 'history/createBrowserHistory'

import PrimaryHeader from './PrimaryHeader'

import 'bootstrap/dist/css/bootstrap.css'
// import '../../App.css';
import '../../index.css'
import LoginPage from "../Login/LoginPage";


const history = createBrowserHistory();


@observer
class App extends React.Component {
    render() {
        return (
            <div className="main-layout">
                <Router history={history}>
                    <PrimaryHeader />
                </Router>

                {/*<p className="App-intro">*/}
                    {/*{this.props.modelStore.userStore.user.login}*/}
                {/*</p>*/}

                <LoginPage></LoginPage>
            </div>
        );
    }
}

export default App;
