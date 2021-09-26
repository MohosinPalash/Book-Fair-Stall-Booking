import React, { useState, useEffect } from 'react';
import Publisher from '../Publisher/Publisher'
import Budget from '../Budget/Budget'
import './PublisherField.css'
import publications from '../../PublisherData/publications.json';

const PublisherField = () => {

    const [publisher, setPublisher] = useState([]);
    const [count, setCount] = useState([]);

    const handleAddPublisher = (Publisher) => {
        const newCount = [...count, Publisher];
        setCount(newCount);
        console.log(count);
    }

    useEffect(() => {


        setPublisher(publications);
        // console.log(PublisherInfo);
        console.log(publications);
    }, [publisher]);
    return (
        <div className='publisher-field'>
            <div className='each-publisher'>
                {
                    publisher.map(pub => <Publisher
                        publisher={pub}
                        handleAddPublisher={handleAddPublisher}
                    ></Publisher>)
                }

            </div>
            <div className='budget-field'>
                <Budget count={count}></Budget>
            </div>
        </div>
    );
};

export default PublisherField;