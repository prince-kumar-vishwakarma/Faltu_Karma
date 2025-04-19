import React from 'react';
import Button from '../../../components/buttons/button';
import './card2.css';

const Card2 = ({ img, heading, para, price, sem }) => {
    return (
        <div className='pricing-card'>
            <div className='pricing-card-logo'>
                {Array.isArray(img)
                    ? img.map((icon, index) => <span key={index}>{icon}</span>)
                    : <span>{img}</span>}
            </div>

            <h3 className='pricing-card-heading'>{heading}</h3>
            <p className='pricing-card-para'>{para}</p>
            <h2 className='pricing-card-price'>₹{price}</h2>
            <p className='pricing-card-sem'>{sem}</p>

            <Button name="Check Availability" />
        </div>
    );
};

export default Card2;
