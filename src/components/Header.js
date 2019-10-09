import React from 'react';

const Header = props => {
  return (
    <>
      <figure className="image is-160x160">
        <img src={props.car.image} alt={props.car.name} />
      </figure>
      <h2>{props.car.name}</h2>
      <div>
      <p>Amount: ${props.car.price}</p>
      </div>
    </>
  );
};

export default Header;
