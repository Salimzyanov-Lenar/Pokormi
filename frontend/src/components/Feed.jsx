import React from 'react';
import '../feed.css';


const Feed = ({ title, address, imageSrc}) => {
    return (
        <div className="feed-container">
        <div className="feed-image-container">
                    {imageSrc && <img src={imageSrc} alt="feed" />}
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
