import React from 'react';
import {inject, observer} from 'mobx-react';

import appRoutes from '../../config/app-routes';
import getDisplayName from './getDisplayName';


@inject('store') @observer
export default function withAuth(WrappedComponent) {
    class WithAuth extends React.Component {

        goToLogin = _ => {
            const returnUrl = WrappedComponent.returnUrl || null;
            this.props.store.router.goTo(appRoutes['login'], {returnUrl});
        };


        render() {
            return this.props.store.views.loginView.userSession
                ? <WrappedComponent {...this.props} />
                : <UnauthPage handleClick={this.goToLogin}/>
        }
    }

    WithAuth.displayName = `WithAuth(${getDisplayName(WrappedComponent)})`;

    return WithAuth;
}



const UnauthPage = props => (
    <div className="container">
        <div className="alert alert-warning" role="alert">
            <strong>Unauthorized!</strong> Please,&nbsp;
            <button type="button" className="btn btn-primary btn-sm" onClick={props.handleClick}>login</button>
            &nbsp;to see this page.
        </div>
    </div>
);
