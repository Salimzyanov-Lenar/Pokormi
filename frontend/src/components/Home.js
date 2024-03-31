import React from 'react';
import Background from './Background'; // Импортируйте Background
import Menu from './Menu';
import YmapTag from './YmapTag.jsx';

const Home = () => {
    const mapStyles = {
        width: '50%', // или другой размер
        height: '300px', // или другой размер
        position: 'relative', // можно опустить или изменить на absolute в зависимости от нужд
        marginTop: '80px', // отступ сверху, если нужно
        marginLeft: '80px',
    };
  return (
    <>
      <Background />
      <YmapTag mapStyles={mapStyles} />
    </>
  );
};

export default Home;
