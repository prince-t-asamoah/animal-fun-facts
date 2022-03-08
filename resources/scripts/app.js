import { animals } from './animals';
import React from 'react';
import ReactDOM from 'react-dom';

const title = '';
const background = <img src='./resources/images/ocean.jpg' className='background' alt='ocean'/>;
const showBackground = true;
const images = [];
const animalFacts = (
    <div>
      <h1>{title || 'Click an animal for fun fact'}</h1>
      {showBackground && background}
      <p id='fact'></p>
      <div className='animals'>
        {images}
      </div>
    </div>
);

for (let animal in animals) {
  images.push(
    <img
      key={animal}
      className='animal'
      alt={animal}
      src={animals[animal].image}
      aria-label={animal}
      role='button'
      onClick={displayFact}
      />
  );
}

const displayFact = e => {
  const selectedAnimal = e.target.alt;
  const animalInfo = animals[selectedAnimal];
  const optionIndex = Math.floor(Math.random() * animalInfo.facts.length);
  const funFact =  animalInfo.facts[optionIndex];
  document.getElementById('fact').innerHTML = funFact;
}

ReactDOM.render(animalFacts, document.getElementById('root'));