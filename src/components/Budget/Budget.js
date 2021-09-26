import React from 'react';
import SelectedPublisher from '../SelectedPublisher/SelectedPublisher';

const Budget = (props) => {
    const publisher = props.count;
    const { stall_no, publication_name, country, established, dp, fee } = publisher;
    let totalFee = 0;
    for (let i = 0; i < publisher.length; i++) {
        const p = publisher[i];
        totalFee += p.fee;
    }
    return (
        <div>
            <h3>Selected Publishers</h3>
            <p>No of Publishers: {props.count.length}</p>
            <p>Total Fee: $ {totalFee}</p>
            {
                publisher.map(pub => <SelectedPublisher publisher={pub}></SelectedPublisher>)
            }
        </div>
    );
};

export default Budget;