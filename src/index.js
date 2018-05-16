import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Open from './container/Open';
import Closed from './container/Closed';
import New from './container/New';
import Home from './container/Home';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, IndexRoute, hashHistory} from 'react-router';


ReactDOM.render(
<Router history={hashHistory}>
    <Route path='/' component={App}>
        <IndexRoute component={Home} />
        <Route path='/open' component={Open} />
        <Route path='/closed' component={Closed} />
        <Route path='/new' component={New} />
    </Route>
</Router>
, document.getElementById('root'));
registerServiceWorker();
