import React from 'react';
import './IdCard.css';

function IdCard (props) {
return(
    <div className="each-card">
        <img src={props.picture} className="ImgCard" alt=""/>
        <div className="information">
        <h3>First name: {props.firstName}</h3>
        <h3>Last name: {props.lastName}</h3>
        <h5>Gender: {props.gender}</h5>
        <h5>Height: {props.height}</h5>
        <h5>Birth date: {props.birth}</h5>
        <button onClick={() => props.removeContact(props.id)} className="btn-delete">Delete</button>
        </div>
    </div>
)
}

export default IdCard;