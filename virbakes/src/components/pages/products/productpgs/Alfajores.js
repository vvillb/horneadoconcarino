import React from 'react'
import CardsItem from '../CardsItems';
import alfajores from '../../../../assets/imgs/alfajores2.jpg'
import '../../../Cards.css'
import { useEffect } from 'react';
import { Button } from '../../../Button';
import './products.css'
import '../../../../App.css'

function Alfajores() {
    useEffect(()=>{
        window.scrollTo(0,0);
      
      },[])
    
   
  return (
    <div className='product_page'>
      
    
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
            <div className='prod__button'><Button 
              className='btns' 
              buttonStyle='btn--outline'
              buttonSize='btn--large'>
              Volver a todos los productos
              </Button>
              
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Alfajores
