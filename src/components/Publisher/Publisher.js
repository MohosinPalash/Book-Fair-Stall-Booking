import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserPlus, faFacebookSquare } from '@fortawesome/free-solid-svg-icons';
import { Button } from 'react-bootstrap';
import './Publisher.css'

const Publisher = (props) => {
    const { stall_no, publication_name, country, established, dp, fee } = props.publisher;
    // console.log(props.player);
    return (
        <div className="publisher-info">

            <div class="latest-notice">
                <img src={dp} alt="" />
                <p><strong>Stall No: </strong>{stall_no}</p>
                <p><strong>Publication: </strong>{publication_name}</p>
                <p><strong>Country: </strong>{country}</p>
                <p><strong>Established: </strong>{established}</p>
                <p><strong>Fee: </strong>TK. {fee}</p>
                {/* Bootstrap is added here */}
                <Button className="btn btn-success" onClick={() => props.handleAddPublisher(props.publisher)}><FontAwesomeIcon icon={faUserPlus} /> Add {publication_name}</Button>
                <p><strong>Add ME: </strong> <FontAwesomeIcon icon={faUserPlus} /></p>

            </div>


        </div>
    );
};

export default Publisher;