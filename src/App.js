import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';

const App = () => (
    <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Home} />
        </Switch>
    </BrowserRouter>
);

export default App;
