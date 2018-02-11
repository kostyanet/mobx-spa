import React from 'react';
import {Route} from 'mobx-router';

import HomePage      from '../components/App/HomePage';
import InventoryPage from '../components/Inventory/InventoryPage';
import LoginPage     from '../components/Login/LoginPage';
// import ProtectedPage from '../components/App/ProtectedPage';


const appRoutes = {
    home: new Route({
        path: '/',
        component: <HomePage/>
    }),

    login: new Route({
        path: '/login',
        component: <LoginPage/>
    }),

    inventory: new Route({
        path: '/inventory',
        component: <InventoryPage/>,

        // beforeEnter: (route, params, store) => {
        //     if (!store) return true;
        //
        //     if (!store.views.loginView.userSession) {
        //         alert('Please, log in to visit this page!');
        //         return false;
        //     }
        // }
    }),


    // userProfile: new Route({
    //     path: '/profile/:username/:tab',
    //     component: <UserProfile/>,
    //     onEnter: () => {
    //         console.log('entering user profile!');
    //     },
    //     beforeExit: () => {
    //         console.log('exiting user profile!');
    //     },
    //     onParamsChange: (route, params) => {
    //         console.log('params changed to', params);
    //     }
    // }),
    // gallery: new Route({
    //     path: '/gallery',
    //     component: <Gallery/>,
    //     beforeExit: () => {
    //         const result = window.confirm('Are you sure you want to leave the gallery?');
    //         return result;
    //     },
    //     onEnter: (route, params, store, queryParams)=> {
    //         console.log('queryParams', queryParams);
    //     }
    // }),
    // document: new Route({
    //     path: '/document/:id',
    //     component: <Document/>,
    //     beforeEnter: (route, params, store) => {
    //         const userIsLoggedIn = store.app.user;
    //         if (!userIsLoggedIn) {
    //             alert('Only logged in users can enter this route!');
    //             return false;
    //         }
    //     },
    //     onEnter: (route, params) => {
    //         console.log(`entering document with params`, params);
    //     }
    // }),
    // book: new Route({
    //     path: '/book/:id/page/:page',
    //     component: <Book/>,
    //     onEnter: (route, params, store) => {
    //         console.log(`entering book with params`, params);
    //         store.app.setTitle(route.title);
    //     }
    // })
};
export default appRoutes;
