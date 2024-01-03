import React from "react";

const Business = () => {

  const newBusiness = {
    imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
    name: 'Papa Pizza',
    address: '1010 Paddington Way',
    city: 'Flavortown',
    state: 'Texas',
    zipCode: '90210',
    category: 'Pizza',
    rating: 4.5,
    reviewCount: 90,
  };
  return (
    <div>
      <img alt='food' />
      <h1>Name</h1>
      <p>address</p>
      <p>city</p>
      <p>state</p>
      <p>zipcode</p>
      <p>category</p>
      <p>rating</p>
      <p>review count</p>
    </div>

  );
};