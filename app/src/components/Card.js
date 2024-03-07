import React from 'react';
import './Card.css';

export default function CustomCard(props) {
    const handleHover = () => {
        props.onMouseOver();
    };

    const handleMouseOut = () => {
        props.onMouseOut();
    };


    return (
        <>
            <div className="card" onMouseOver={handleHover} onMouseOut={handleMouseOut}>
                <img src={props.src} className="card-img-top" alt="Card" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                    <a href="/" className="btn btn-primary">{props.btnctn}</a>
                </div>
            </div>
        </>
    );
}
