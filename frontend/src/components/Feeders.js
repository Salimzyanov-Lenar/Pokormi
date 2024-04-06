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
            <Feed title="КОШКИ" address="Парк им. Ю. Гагарина"/>
            <Feed title="ОЧЕНЬ" address="Парк им. Ю. Гагарина"/>
            <Feed title="РАДЫ" address="Парк им. Ю. Гагарина"/>
            <Feed title="ВАШЕЙ" address="Парк им. Ю. Гагарина"/>
            <Feed title="ПОМОЩИ" address="Парк им. Ю. Гагарина"/>
            <Feed title="СПАСИБО" address="Парк им. Ю. Гагарина"/>
        </div>
    </div>
  );
};
// <Feed title="КОШКИН ДОМ" address="г. Самара, ул. Арбузовская 57"/>


export default Feeders;
