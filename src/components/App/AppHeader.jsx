import React 		from 'react';

import {inject, observer} from 'mobx-react';
import {Link}       from 'mobx-router';

import appRoutes from '../../config/app-routes';
import logo from '../../logo.svg';
import './AppHeader.sass'


class AppHeader extends React.Component {
    render() {
        const {store} = this.props;
        const {router: {goTo}} = store;

        return (
            <header className="PrimaryHeader">
                <nav className="navbar _bg-light">
                    <span className="navbar-brand mb-0 _navbar-brand">
                        ReApp
                        <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="" />
                    </span>

                    <ul className="nav nav-pills _nav">
                        <li className="nav-item">
                            <Link className="nav-link" view={appRoutes.home} store={store}>Home</Link>
                        </li>
                        {/*<li className="nav-item">*/}
                            {/*<Link className="nav-link" activeClassName="active"*/}
                                  {/*onClick={() => props.store.router.goTo(appRoutes.home)}>Users</Link>*/}
                        {/*</li>*/}
                        <li className="nav-item">
                            <Link className="nav-link" view={appRoutes.login} store={store}>Login</Link>
                        </li>
                    </ul>
                </nav>

                <hr/>
            </header>
        )
    }
}


export default inject('store')(observer(AppHeader));
