import React from "react";
import Business from '.Business.js';

const BusinessList = () => {
  const businesses = [
    {
      id: 1,
      name: 'Papa Pizza',
      address: '1010 Paddington Way',
      city: 'Flavortown',
      state: 'Texas',
      zipCode: '90210',
      category: 'Pizza',
      rating: 4.5,
      reviewCount: 90,
    },
    {
      id: 2,
      name: 'Sushi Sushi',
      address: '1234 Fake Street',
      city: 'Flavortown',
      state: 'Texas',
      zipCode: '81452',
      category: 'Sushi',
      rating: 4.7,
      reviewCount: 95,
    }
  ];

  const businessComponents = businesses.map((business) => (
    <Business
      key={business.id}
      business={business}
    />
  ));

  return (
    <div>
      {businessComponents}
    </div>
  );
};

export default BusinessList;