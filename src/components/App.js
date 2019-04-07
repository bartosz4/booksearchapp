import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav';
import SearchArea from './SearchArea';
import BookList from './BookList';


class App extends Component {
    constructor(props){
        super(props)
        this.state={
            books: [],
            searchWord: '',
            per: 6,
            page: 0,
            loadingState: false
        }
    }

    componentDidMount() {
        this.refs.iScroll.addEventListener("scroll", () => {
            if (this.refs.iScroll.scrollTop + this.refs.iScroll.clientHeight >= this.refs.iScroll.scrollHeight -100){
                this.loadMoreBooks();
            }
        });
    }

    loadBooks = (e) => {
        e.preventDefault();

        const {searchWord, per, page} = this.state;
        fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchWord}&maxResults=${per}&startIndex=${page}`)
            .then(data => data.json())
            .then(data => {
                console.log(data);
                this.setState({
                    books: [...data.items]
                })
            })
    }

    loadMoreBooks = () =>{
        this.setState({
            loadingState: true
        });
        setTimeout(() => {
            this.setState({
                page: this.state.page + 6,
                loadingState: false
            });
            const {books, searchWord, per, page} = this.state;
            fetch(`https://www.googleapis.com/books/v1/volumes?q=${searchWord}&maxResults=${per}&startIndex=${page}`)
                .then(data => data.json())
                .then(data => {
                    console.log(data);
                    this.setState({
                        books: [...books, ...data.items]
                    })
                })
        }, 1000);
    }

    handleChange =(e) =>{
        this.setState({
            searchWord: e.target.value
        })
    }

    render() {
        return (
            <div className="App">
                <div className="vc"
                     ref="iScroll"
                     style={{ height: "100vh", overflow: "auto" }}
                >
                    <Nav/>
                    <SearchArea loadBooks={this.loadBooks} handleChange={this.handleChange}/>
                    <BookList books={this.state.books}/>

                </div>

            </div>
        );
    }
}

export default App;
