import React from 'react';
import '../feeders.css';
import Feed from './Feed.jsx';



const Feeders = () => {
  return (
    <div className="Feeders">
        <Feed title="КОШКИ" address="Парк им. Ю. Гагарина"/>
        <Feed title="ОЧЕНЬ" address="Парк им. Ю. Гагарина"/>
        <Feed title="РАДЫ" address="Парк им. Ю. Гагарина"/>
        <Feed title="ВАШЕЙ" address="Парк им. Ю. Гагарина"/>
        <Feed title="ПОМОЩИ" address="Парк им. Ю. Гагарина"/>
        <Feed title="СПАСИБООООООООО" address="Парк им. Ю. Гагарина"/>
    </div>
  );
};
// <Feed title="КОШКИН ДОМ" address="г. Самара, ул. Арбузовская 57"/>


export default Feeders;
