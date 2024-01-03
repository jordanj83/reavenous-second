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
      <img src={newBusiness.imageSrc} alt='pizza' />
      <h1>{newBusiness.name}</h1>
      <p>{newBusiness.address}</p>
      <p>{newBusiness.city}</p>
      <p>{newBusiness.state}</p>
      <p>{newBusiness.zipCode}</p>
      <p>{newBusiness.category}</p>
      <p>{newBusiness.rating}</p>
      <p>{newBusiness.reviewCount}</p>
    </div>

  );
};