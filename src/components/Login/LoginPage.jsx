import React from 'react';
import classNames from 'classnames';
import {inject, observer} from "mobx-react";

import LoginForm from "./LoginForm";
// import UIState from '../../stores/ui-state'
import './LoginPage.sass'


@inject('uiState') @observer
export default class LoginPage extends React.Component {

//    constructor(props) {
//        super(props);
//debugger
//    //     this.state = {
//    //         isKeepLogged:   false,
//    //         isPending:      false,
//    //         password:       '',
//    //         username:       '',
//    //     };
//    }


    handleSubmit = creds => { debugger
        console.log(this.props)
        this.props.uiState.login(creds);
    };

    render() {
        return (
            <div className="container-fluid LoginPage">
                <h2>Login</h2>

                <div className={classNames('alert alert-danger', {'hidden': !this.props.message} )} role="alert">
                    Unknown user name
                </div>

                <LoginForm
                    isPending={this.props.uiState.LoginPage.isPending}
                    onSubmit={this.handleSubmit} />
            </div>
        );
    }

}