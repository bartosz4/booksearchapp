import React from 'react';

const Book = (props) => {
    return(
            <div className="col s12 m6 l3">
                <div className="z-depth-2">
                    <div className="card large hoverable">
                        <div className="card-image ">
                        {
                             props.image == null ? <img src={`http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`} alt={props.title}/> : <img className="responsive-img" src={props.image.thumbnail} alt={props.title}/>

                        }
                        </div>
                        <div className="card-content">
                            <h6 className="card-title">{props.title}</h6>
                            <p className="truncate">{props.description}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Book;