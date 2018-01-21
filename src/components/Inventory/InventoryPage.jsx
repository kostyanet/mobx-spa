import React from 'react';
import {inject, observer} from 'mobx-react';

// import LoginForm from './LoginForm';
// import './LoginPage.sass';


@inject('store') @observer
export default class InventoryPage extends React.Component {

    // handleSubmit = (creds, keepLogged) => {
    //     this.props.store.views.loginView.login(creds, keepLogged);
    // };


    render() {
        const store = this.props.store.views.loginView;

        return (
            <div className="container-fluid">

            </div>
        );
    }

}
