import React from 'react';
import './Card.css';
import CardItem from './CardItem';




function Card() {
  return (
    <div className='card'>
      <h1>Personal Home Deco. Projects</h1>
      <div className='card__container'>
        <div className='card__cover'>
          <ul className='card__items'>
            <CardItem
              src='images/Room 1.jpg'
              text='Light Project || Home Deco. || Price: 79€ || www.instagram.com/filipauldesign'
              path='/contact'
            />
            <CardItem
              src='images/ROOM 4 RENDER.jpg'
              text='Galactic Project || Nude • Home Deco. || Price: 99€ || www.instagram.com/filipauldesign'  
              path='/contact'
            />
          </ul>
          <ul className='card__items'>
            <CardItem
              src='images/design 3.jpg'
              text='Business Card • Mockup'
              path='/contact'
            />
            <CardItem
              src='images/design 4.jpg'
              text='Business Card • Mockup'
              path='/contact'
            />
            <CardItem
              src='images/design 5.jpg'
              text='Business Card • Mockup'
              path='/contact'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Card;