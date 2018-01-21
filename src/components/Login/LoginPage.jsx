import React from 'react';
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
            <div className="container-fluid">
                <div className="card LoginPage">
                    <h3 className="card-header">Login</h3>

                    <div className="LoginPage__block">
                        {store.message &&
                            <div className="alert alert-danger" role="alert">
                                <strong>Error:</strong> {store.message}
                            </div>
                        }

                        <LoginForm
                            isPending={store.isPending}
                            onSubmit={this.handleSubmit} />
                    </div>
                </div>
            </div>
        );
    }

}
