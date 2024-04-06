import React from 'react';
import '../feed.css';


const Feed = ({ title, address}) => {
    return (
        <div className="feed-container">
            <div className="feed-image-container">
                {/* Image or icon can be placed here */}
            </div>
            <div className="feed-content">
                <div className='feed-title'> {title} </div>
                <div className='feed-address'> {address} </div>
                <button className="transition-button"> Перейти </button>
            </div>
        </div>
  );
};
// <Feed title="КОШКИН ДОМ" address="г. Самара, ул. Арбузовская 57"/>


export default Feed;
