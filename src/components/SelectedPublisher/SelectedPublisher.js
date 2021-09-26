import React from 'react';
import './SelectedPublisher.css'

const SelectedPublisher = (props) => {
    const { stall_no, publication_name, country, established, dp, fee } = props.publisher;
    return (
        <div className="Added-Players">
            <div>
                <img src={dp} alt="" />
            </div>
            <div>
                <p>
                    <strong>{publication_name}  </strong><small>({country})</small>
                    <br />Fee: ${fee}
                </p>
            </div>

        </div>
    );
};

export default SelectedPublisher;