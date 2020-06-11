import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Body from './../body/Body';

const RouterLink = () => {

    return (
        <Switch>
            <Route exact path='/' component={Body} />
        </Switch>
    );
}

export default RouterLink;