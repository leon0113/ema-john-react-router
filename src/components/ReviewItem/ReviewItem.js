import React from 'react';
import './ReviewItem.css';

const ReviewItem = (props) => {
    const { name, price, shipping, quantity, img } = props.product;
    return (
        <div className='review-items'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="item-details-container">
                <div className="review-details">
                    <p className="product-name" title={name}>{name.length > 20 ? name.slice(0, 20) + '...' : name}</p>
                    <p className="price">Price : <span className='orange-color'>{price}</span></p>
                    <p><small>Shipping fee : {shipping}</small></p>
                    <p><small>Quantity : {quantity}</small></p>
                </div>
                <div className="delete-button">
                    <button>Delete</button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;