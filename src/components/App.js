import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import SearchArea from './SearchArea';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Nav/>
                <SearchArea/>
            </div>
        );
    }
}

export default App;
