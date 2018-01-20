import React from 'react';
import classNames from 'classnames';
import {inject, observer} from 'mobx-react';

import LoginForm from './LoginForm';
import './LoginPage.sass';


@inject('store') @observer
export default class LoginPage extends React.Component {

    handleSubmit = (creds, keepLogged) => {
        this.props.store.views.loginView.login(creds, keepLogged);
    };


    render() {
        const store = this.props.store.views.loginView;

        return (
            <div className="container-fluid LoginPage">
                <h2>Login</h2>

                <div className={classNames('alert alert-danger', {'hidden': !store.message} )} role="alert">
                    <strong>Error:</strong> {store.message}
                </div>

                <LoginForm
                    isPending={store.isPending}
                    onSubmit={this.handleSubmit} />
            </div>
        );
    }

}
