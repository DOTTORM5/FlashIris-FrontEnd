import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards(props) {
  return (
    <div className={props.showConfirmationPopup ? 'cards-opacity'  : 'cards'}>
      <h1>Prova i nostri fantastici prodotti!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/flash/FLASH 600 and FLASH 1600 presentation EN.jpg'
              text='Gusta la nostra FLASH 600'
              label=''
              path='/products/flash'
            />
            <CardItem
              src='images/voom/VOOM IRIS MINI prezentacija EN WEB_.jpg'
              text='Esplora la nostra VOOM IRIS MINI'
              label='Luxury'
              path='/'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
              label='Mystery'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Experience Football on Top of the Himilayan Mountains'
              label='Adventure'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Ride through the Sahara Desert on a guided camel tour'
              label='Adrenaline'
              path='/sign-up'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;