import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import Home from '../../Views/Home';
import Storefront from '../../Views/Storefront';

class Main extends Component {
    render () {
        return (
            <main>
                <Switch>
                    <Route exact path='/' component={Home}/>
                    <Route exact path='/store' component={Storefront}/>
                </Switch>
            </main>
        );
    }
}
export default Main;