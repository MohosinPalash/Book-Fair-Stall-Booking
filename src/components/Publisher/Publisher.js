import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import './Publisher.css'

const Publisher = (props) => {
    const { stall_no, publication_name, country, established, dp, fee } = props.publisher;
    // console.log(props.player);
    return (
        <div className="player-info">
            <div className="dp">
                <img src={dp} alt="" />
            </div>
            <div className="info">
                <h1><strong>Stall No: </strong>{stall_no}</h1>
                <h1><strong>Publication: </strong>{publication_name}</h1>
                <p><strong>Country: </strong>{country}</p>
                <p><strong>Established: </strong>{established}</p>
                <p><strong>Fee: </strong>TK. {fee}</p>
                {/* Bootstrap is added here */}
                <Button className="btn btn-success" onClick={() => props.handleAddPublisher(props.publisher)}><FontAwesomeIcon icon={faUserPlus} /> Add {publication_name}</Button>
            </div>
        </div>
    );
};

export default Publisher;