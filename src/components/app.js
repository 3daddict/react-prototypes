import React from 'react';
import {Route} from 'react-router-dom';
import Welcome from './welcome';

export default () => (
    <div className="container">
        <h1>Heading 1 here!</h1>
        <Route path="/" component={Welcome} />
    </div>
)