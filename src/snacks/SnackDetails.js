import React from 'react';
import { useParams } from 'react-router-dom';
import data from '../data.json';
import { formatCurrency } from '../helper';

const SnackDetails = () => {
  const params = useParams();

  const item = params.item;

  const snack = data.snacks[item];

  if (!snack) {
    return <h1>not found</h1>;
  }

  return (
    <div>
      <img src={snack.image} alt={`An image of ${snack.name}`} height="300" />
      <h1>{snack.name}</h1>
      <div>{snack.description}</div>
      <div>{formatCurrency(snack.price)}</div>
    </div>
  );
};

export default SnackDetails;
