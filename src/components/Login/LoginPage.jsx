import React from 'react';
import classNames from 'classnames';

import LoginForm from "./LoginForm";
import './LoginPage.sass'


export default class LoginPage extends React.Component {

    // constructor(props) {
    //     super(props);
    //
    //     this.state = {
    //         isKeepLogged:   false,
    //         isPending:      false,
    //         password:       '',
    //         username:       '',
    //     };
    // }


    render() {
        return (
            <div className="container-fluid LoginPage">
                <h2>Login</h2>

                <div className={classNames('alert alert-danger', {'hidden': !this.props.message} )} role="alert">
                    Unknown user name
                </div>

                <LoginForm></LoginForm>
            </div>
        );
    }

}