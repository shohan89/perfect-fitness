import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Sidebar from '../SideBar/Sidebar';
import './Main.css'

const Main = () => {
  const [ cards, setCards ] = useState([])
  useEffect( ()=> {
    fetch( 'data.json' )
      .then( res => res.json() )
      .then( data => setCards( data ) )
  }, [] )

  return (
    <div className='main-container'>
      <div className="card-container">
        {/* Cards  */}
        {
          cards.map( card => <Card key= { card.id } card= { card }></Card> )
        }
        
      </div>
      <Sidebar></Sidebar>
    </div>
  );
};

export default Main;