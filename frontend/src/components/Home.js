import React from 'react';
import Background from './Background'; // Импортируйте Background
import YmapTag from './YmapTag.jsx';
import FeederHome from './FeederHome.jsx';
import '../home.css';


const Home = () => {
    const mapStyles = {
        width: '350px',
        height: '350px',
        position: 'relative',
        marginTop: '100px',
        marginLeft: '-90px',
    };
    return (
        <div className='home'>
            <Background />
            <div className='content-layout'>
                <YmapTag mapStyles={mapStyles} />
                <div className='info-block'>
                    <h1>БОЛЬШЕ СЫТЫХ МУРЧАЩИХ</h1>
                    <p>На сегодняшний день в России насчитывается около четырёх млн. бездомных котов, миссия нашего проекта - обратить внимание на эту проблему и помочь уже оказавшимся на улице котам.</p>
                    <button>Подробнее</button>
                </div>
                <div className='mini-feeders'>
                    <FeederHome title="КОШКИН ДОМ" address="г. Самара, ул. Арбузовская 57" imageSrc="/image/pictest.png"/>
                    <FeederHome title="КОШКИН ДОМ" address="г. Самара, ул. Арбузовская 57" imageSrc="/image/pictest.png"/>
                    <FeederHome title="КОШКИН ДОМ" address="г. Самара, ул. Арбузовская 57" imageSrc="/image/pictest.png"/>
                </div>
            </div>
        </div>
  );
};

export default Home;
