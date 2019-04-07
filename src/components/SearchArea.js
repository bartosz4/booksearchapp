import React from 'react';

const SearchArea = (props) =>{
    return(
        <div className="container">
            <div className="row">
                <section className="col s4 offset-s4">
                    <form action="" onSubmit={props.loadBooks}>
                        <div className="input-field">
                            <input placeholder="Search book" type="text" onChange={props.handleChange}/>
                        </div>
                        <button class="btn waves-effect waves-light" type="submit" name="action">Search</button>
                    </form>
                </section>
            </div>
        </div>
    )
}

export default SearchArea;