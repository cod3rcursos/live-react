import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Dashboard from '../dashboard/Dashboard'
import Finances from '../finances/Finances'
import Content from '../shared/template/Content'

const Routes = (props) => {
    return (
        <Content>
            <Switch>
                <Route path="/finances">
                    <Finances />
                </Route>
                <Route path="/">
                    <Dashboard />
                </Route>
            </Switch>
        </Content>
    )
}

export default Routes
