import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import App from './components/App';
import Home from './components/Home';
import IndervidualTv from './components/IndervidualTv';
import Tvs from './components/Tvs';
import NewTv from './components/NewTv';
import reducer from './reducer/reducer';
import createBrowserHistory from 'history/createBrowserHistory';

const store = createStore(reducer, applyMiddleware(thunk));
const history = createBrowserHistory();

ReactDOM.render(
    <Provider store={store}>
        <Router history={history}>
            <App>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/tvs' component={Tvs} />
                    <Route path='/tvs/:tv_id' component={IndervidualTv} />
                    <Route path='/newtv' component={NewTv} />
                </Switch>
            </App>
        </Router>
    </Provider>, document.getElementById('root')); 