import React 		from 'react';
import {NavLink}        from 'react-router-dom';

import logo from '../../logo.svg';
import './PrimaryHeader.sass'


const PrimaryHeader = () => (
    <header className="PrimaryHeader">
        <nav className="navbar _bg-light">
            <span className="navbar-brand mb-0 _navbar-brand">
                ReApp
                <img src={logo} width="50" height="50" className="d-inline-block align-top" alt="" />
            </span>

            <ul className="nav nav-pills _nav">
                <li className="nav-item">
                    <NavLink to="/" exact className="nav-link" activeClassName="active">Home</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/users" className="nav-link" activeClassName="active">Users</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to="/other" className="nav-link" activeClassName="active">Other</NavLink>
                </li>
            </ul>
        </nav>

        <hr/>
    </header>
);

export default PrimaryHeader;
