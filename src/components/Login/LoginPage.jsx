import React from 'react';
import classNames from 'classnames';
import {inject, observer} from 'mobx-react';

import LoginForm from './LoginForm';
import './LoginPage.sass';


@inject('store') @observer
export default class LoginPage extends React.Component {

    constructor(props) {
        super(props);
    }

    handleSubmit = (creds, keepLogged) => {
        // console.log(this.props);
        this.props.store.views.loginView.login(creds, keepLogged);
    };


    render() {
        const store = this.props.store.views.loginView;

        return (
            <div className="container-fluid LoginPage">
                <h2>Login</h2>

                <div className={classNames('alert alert-danger', {'hidden': !store.message} )} role="alert">
                    Unknown user name
                </div>

                <LoginForm
                    isPending={store.isPending}
                    onSubmit={this.handleSubmit} />
            </div>
        );
    }

}
