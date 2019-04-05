import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import SearchArea from './SearchArea';

class App extends Component {
    constructor(){
        super()
        this.state={
            books: [],
            searchWord: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://www.googleapis.com/books/v1/volumes?q=${this.state.searchWord}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({
                    books: [...data.items]
                })
            })
    }

    handleChange =(e) =>{
        this.setState({
            searchWord: e.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <Nav/>
                <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
            </div>
        );
    }
}

export default App;
