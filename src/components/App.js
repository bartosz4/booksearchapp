import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import SearchArea from './SearchArea';
import BookList from './BookList';


class App extends Component {
    constructor(){
        super()
        this.state={
            books: [],
            searchWord: '',
            per: 3,
            page: 0
        }
    }
    handleSubmit = (e) => {
        // e.preventDefault();   zrobić coś z tym

        const {books, searchWord, per, page} = this.state;
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchWord}&maxResults=${per}&startIndex=${page}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({
                    books: [...books, ...data.items]
                })
            })
    }

    handleChange =(e) =>{
        this.setState({
            searchWord: e.target.value
        })
    }

    loadMore = () => {
        this.setState(prevState => ({
            page: prevState.page +3
        }), this.handleSubmit)
    }

    render() {
        return (
            <div className="App">
                <div>
                    <Nav/>
                    <SearchArea handleSubmit={this.handleSubmit} handleChange={this.handleChange}/>
                    <BookList books={this.state.books}/>
                    <a onClick={this.loadMore}>Load More</a>
                </div>

            </div>
        );
    }
}

export default App;
