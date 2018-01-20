import React from 'react';

import Button from '../common/Button';
import InputCheckbox from '../common/InputCheckbox';
import InputField from '../common/InputField';

import './LoginPage.sass'


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


    handleKeepLogged = (event) =>  this.setState({isKeepLogged: event.target.checked});


    handleSubmit = (event) => {
        event.preventDefault();

        this.props.onSubmit({
            username:   this.state.username.trim(),
            password:   this.state.password.trim()
        },  this.state.isKeepLogged);
    };


    updateProperty = (event) =>  this.setState({[event.target.name]: event.target.value});


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
            disabled:       this.props.isPending,
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
