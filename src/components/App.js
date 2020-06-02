import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header/Header';
import Browse from './Browse/Browse';
import Search from './Search/Search';
import Home from './Home/Home';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="ui fluid container">
                <BrowserRouter>
                    <Header />
                    <div>
                        <Route path="/" exact component={Home} />
                        <Route path="/browse" exact component={Browse} />
                        <Route path="/search" exact component={Search} />
                    </div>
                </BrowserRouter>
            </div>
        )
    }
}

export default App;