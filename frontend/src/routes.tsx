import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from './pages/home/index'
import CreatePoint from './pages/createPoint/index'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/create-point" component={CreatePoint} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes