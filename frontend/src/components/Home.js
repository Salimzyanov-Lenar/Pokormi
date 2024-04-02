import React from 'react';
import Background from './Background'; // Импортируйте Background
import Menu from './Menu';
import YmapTag from './YmapTag.jsx';

const Home = () => {
    const mapStyles = {
        width: '400px', // или другой размер
        height: '400px', // или другой размер
        position: 'relative', // можно опустить или изменить на absolute в зависимости от нужд
        marginTop: '100px', // отступ сверху, если нужно
        marginLeft: '172px',
    };
  return (
    <div className='home'>
      <Background />
      <YmapTag mapStyles={mapStyles} />
    </div>
  );
};

export default Home;
