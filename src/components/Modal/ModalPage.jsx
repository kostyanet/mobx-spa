import React from 'react';
import {inject, observer} from 'mobx-react';

// import LoginForm from './LoginForm';
import './ModalPage.sass';
import './spinner.css';


@inject('store') @observer
export default class ModalPage extends React.Component {

    // handleSubmit = (creds, keepLogged) => {
    //     this.props.store.views.loginView.login(creds, keepLogged);
    // };


    render() {
        const store = this.props.store.views.modalView;

        return !store.isShown ? null : (
            <div className="modal fade Modal">
                {store.content
                    ? store.content
                    : <Spinner />
                }
            </div>
        );
    }

}


const Spinner = _ => (
    <div className="loader__container">
        <div className="loader">Loading...</div>
    </div>
);
