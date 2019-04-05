import React from 'react';

const Book = (props) => {
    return(
            <div className="col s12 m6 l4">
                <p className="z-depth-2">
                    <div className="card">
                        <div className="card-image ">
                        {
                             props.image == null ? <img src={`http://s3-ap-southeast-1.amazonaws.com/upcode/static/default-image.jpg`}/> : <img src={props.image.thumbnail} alt=""/>

                        }

                        </div>
                        <div className="card-content">
                            <h6 className="card-title">{props.title}</h6>
                            <p>{props.description}</p>
                        </div>
                    </div>
                </p>
            </div>
    )
}
export default Book;