import React from "react";

const Business = ({ business }) => {

  return (
    <div>
      <img src={business.imageSrc} alt='pizza' />
      <h1>{business.name}</h1>
      <p>{business.address}</p>
      <p>{business.city}</p>
      <p>{business.state}</p>
      <p>{business.zipCode}</p>
      <p>{business.category}</p>
      <p>{business.rating}</p>
      <p>{business.reviewCount}</p>
    </div>

  );
};

export default Business;