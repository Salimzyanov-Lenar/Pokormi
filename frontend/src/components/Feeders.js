import React from 'react';
import '../feeders.css';
import Feed from './Feed.jsx';

/* БАГА, ЕСЛИ СЛИШКОМ ДЛИННОЕ ПОЛЕ title*/


const Feeders = () => {
    return (
    <div className="FeedersPage">
        <div className="FeedersName">
            КОРМУШКИ
        </div>
        <div className="Feeders">
            <Feed title="КОШКИ" address="Парк им. Ю. Гагарина" imageSrc="/image/pictest.png"/>
            <Feed title="ОЧЕНЬ" address="Парк им. Ю. Гагарина" imageSrc="/image/pictest.png"/>
            <Feed title="РАДЫ" address="Парк им. Ю. Гагарина" imageSrc="/image/pictest.png"/>
            <Feed title="ВАШЕЙ" address="Парк им. Ю. Гагарина" imageSrc="/image/pictest.png"/>
            <Feed title="ПОМОЩИ" address="Парк им. Ю. Гагарина" imageSrc="/image/pictest.png"/>
            <Feed title="СПАСИБО" address="Парк им. Ю. Гагарина" imageSrc="/image/pictest.png"/>
        </div>
    </div>
  );
};
// <Feed title="КОШКИН ДОМ" address="г. Самара, ул. Арбузовская 57"/>


export default Feeders;
