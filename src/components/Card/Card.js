import React from 'react';
import './Card.css'

const Card = (props) => {
  
  const { img, activity_name, description, for_age, time_required } = props.card

  const addToList = () => {
    console.log('added!')
  }
  
  return (
      <div className="card">
          <img className='card-img' src={ img } alt="" />
          <div className="card-body">
            <h2 className="card-title">{ activity_name }</h2>
            <p className="desc">{ description }</p>
            <p className='desc'>For Age: <strong>{ for_age }</strong></p>
            <p className='desc'>Time: <strong>{ time_required }s</strong></p>
          </div>
          <button onClick={ addToList }>Add To List</button>
        </div>
  );
};

export default Card;