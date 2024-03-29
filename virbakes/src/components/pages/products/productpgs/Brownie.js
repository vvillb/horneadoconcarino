import React from 'react'
import CardsItemCustom from '../../custom/CardsItemCustom';
import '../../../Cards.css'
import { useEffect } from 'react';
import { Button } from '../../../Button';
import './products.css'
import '../../../../App.css'
import brownies from '../../../../assets/imgs/brownie2.jpg'


function Brownie() {
    useEffect(()=>{
        window.scrollTo(0,0);
      
      },[])
    
   
  return (
    <div className='product_page'>
      
      <div className='cards_c'>
      <div className='card__container_c'>
          <div className='cards__wrapper_c'>
              <ul className='cards__items_c'>
              <div className='cards__item_c'>
                  <CardsItemCustom
                      src={brownies}
                      text={"     Caja (unas 12 porciones)    "}
                      label={"15.00€"}
                      path={'#'}
                      title_above=""
                  />
                </div>
               
                
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

export default Brownie
