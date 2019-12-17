import React from 'react';
import {
	BrowserRouter as Router,
    Route,
    Switch
} from 'react-router-dom';

import './App.scss';

import { Header, AdminHeader, Footer, ScrollToTop, PrivateRoute } from './common';
import * as Pages from './pages';

function App() {  
    const path = window.location.pathname.split('/')[1];
    
    return (
        <Router>
            <ScrollToTop>
                <div className={`mdl-layout mdl-layout--no-desktop-drawer-button mdl-layout--fixed-header home ${path === 'administration' ? 'admin' : ''}`}>
                    {path !== 'administration' && path !== 'blog' && (
                        <>
                            <Header />
                            <main>
                                <Switch>
                                    <Route exact path='/' component={Pages.Home} /> 
                                    <Route exact path='/contact-us' component={Pages.Home} /> 
                                    <Route path='/order-brochures' component={Pages.Brochures} />
                                    <Route path='/locations' component={Pages.Locations} />
                                    <Route exact path='/catalog' component={Pages.Catalog} />
                                    <Route path='/catalog/:id' component={Pages.Game} />
                                    <Route path='/checkout' component={Pages.Checkout} />
                                    <Route component={Pages.NoMatch} /> 
                                </Switch>
                            </main>
                            <Footer />
                        </>
                    )} 
                    {path === 'administration' && (
                        <>
                            <AdminHeader />
                            <main className="admin-main">
                                <div className="administration">
                                    <Switch>
                                        <PrivateRoute exact path='/administration' component={Pages.Administration} />
                                        <Route path='/administration/login' component={Pages.Login} /> 
                                        <PrivateRoute exact path='/administration/games' component={Pages.GamesList} /> 
                                        <PrivateRoute path='/administration/games/new' component={Pages.NewGame} /> 
                                        <PrivateRoute path='/administration/games/:id' component={Pages.EditGame} /> 
                                        <PrivateRoute exact path='/administration/locations' component={Pages.LocationsList} />
                                        <PrivateRoute path='/administration/locations/new' component={Pages.NewLocation} />
                                        <PrivateRoute path='/administration/locations/:id' component={Pages.EditLocation} />
                                        <PrivateRoute exact path='/administration/orders' component={Pages.OrdersList} />
                                        <Route component={Pages.NoMatch} /> 
                                    </Switch>
                                </div>
                            </main>
                        </>
                    )} 
                </div>
            </ScrollToTop>
        </Router>
    );
}

export default App;
