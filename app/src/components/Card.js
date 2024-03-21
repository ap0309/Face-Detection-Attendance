import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function CustomCard(props) {
    return (
        <div className="col text-center mb-3 mb-md-0">
            <div className="card">
                <Link to={props.to}>
                    <img src={props.src} className="card-img-top" alt="Card" />
                </Link>
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <p className="card-text">{props.text}</p>
                    <Link to={props.to} className="btn btn-primary">
                        {props.btnctn}
                    </Link>
                </div>
            </div>
        </div>
    );
}
