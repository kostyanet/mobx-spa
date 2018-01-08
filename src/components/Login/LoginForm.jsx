import React from 'react';

import Button from "../common/Button";
import InputCheckbox from "../common/InputCheckbox";
import InputField from "../common/InputField";

import './LoginPage.sass'

// import AuthService          from '../../services/auth.service.js';
// import LoginForm            from './LoginForm.jsx';


export default class LoginForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            isKeepLogged:   false,
            isPending:      false,
            password:       '',
            username:       '',
        };
    }


    // handleChange = event => {
    //     let obj = (event.target.type === 'text')
    //         ? {nameValue: event.target.value}
    //         : {passValue: event.target.value};
    //
    //     this.setState(Object.assign({
    //         nameMsg:    '',
    //         passMsg:    ''
    //     }, obj));
    // };


    // handleSubmit = event => {
    //     event.preventDefault();
    //
    //     let creds = {
    //         username: this.state.nameValue.trim(),
    //         password: this.state.passValue.trim()
    //     };
    //
    //     AuthService.login(creds, this.checkboxRef.checked)
    //         .catch(err => this.onError(err))
    //         // todo remove completely later
    //         // .finally(() => setTimeout(() => this.setState({isLoading: false}), 1000));
    //
    //     this.setState({isLoading: true});
    // };


    // onError(err) {
    //     let obj = (/password/i.test(err.message))
    //         ? {passMsg: err.message, nameMsg: ''}
    //         : {nameMsg: err.message, passMsg: ''};
    //
    //     this.setState(obj);
    // }


    handleKeepLogged = () => {};

    handleSubmit = () => {};

    updateProperty = (key, value) => this.setState({[key]: value});


    render() {
        const nameProps = {
            className:      'form-group',
            label:          'UserName',
            name:           'username',
            onChange:       this.updateProperty,
            placeholder:    'Username',
            required:       true,
            type:           'text',
            value:          this.state.username
        };
        const passProps = {
            className:      'form-group',
            label:          'Password',
            name:           'password',
            onChange:       this.updateProperty,
            placeholder:    'Password',
            required:       true,
            type:           'password',
            value:          this.state.password
        };
        const checkboxProps = {
            className:      'form-check',
            isChecked:      this.state.isKeepLogged,
            onChange:       this.handleKeepLogged,
            label:           'Keep me logged'
        };
        const buttonProps = {
            className:      'btn btn-primary',
            content:        'Login',
            disabled:       this.state.isPending,
            handleClick:    this.handleSubmit,
            type:           'submit',
        };

        return (
            <form className="LoginForm">
                <InputField { ...nameProps} />
                <InputField { ...passProps} />

                <InputCheckbox { ...checkboxProps} />
                <Button { ...buttonProps} />
            </form>
        );
    }
}
