import React from 'react'
import CardsItem from '../CardsItems';
import alfajores from '../../../../assets/imgs/alfajores2.jpg'
import '../../../Cards.css'
import { useEffect } from 'react';
import { Button } from '../../../Button';

import '../../../../App.css'
import './productppg.css'

function Alfajores() {
    useEffect(()=>{
        window.scrollTo(0,0);
      
      },[])
    
   
  return (
    <div>
      <Button 
            className='btns' 
            buttonStyle='btn--outline'
            buttonSize='btn--large'>
              Volver a todos los productos
              </Button>
    
    <div className='cards'>
        <div className='cards__container'>
        <div className='cards__wrapper'>
            <ul className='cards__items'>
            <CardsItem    
            src={alfajores}
            text={"Alfajores rellenos de dulce de leche y con cobertura de chocolate"}
            label={"12 uds:12 euros"}
            path={'#'}
            title_above=""
            />
            </ul>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Alfajores
