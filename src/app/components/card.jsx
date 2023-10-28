// components/Card.js
import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({icon,heading1,heading2,content}) => {
    return (
        <div class="card">
            <p>{icon}</p>
            <p>{heading1}<br/> {heading2} </p>
            <p> {content}</p>
        </div>
    );
};

export default Card;
