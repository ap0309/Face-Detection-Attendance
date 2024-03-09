import React from 'react';
import './Card.css';

export default function CustomCard(props) {
    return (
        <div className="col text-center mb-3 mb-md-0">
            <div className="card">
                <img src={props.src} className="card-img-top" alt="Card" />
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <button href="/" className="btn btn-primary" onClick={props.onClick}>{props.btnctn}</button>
                </div>
            </div>
        </div>
    );
}
