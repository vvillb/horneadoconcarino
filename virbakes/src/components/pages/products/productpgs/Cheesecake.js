import React from 'react'
import CardsItemCustom from '../../custom/CardsItemCustom';
import '../../../Cards.css'
import { useEffect } from 'react';
import { Button } from '../../../Button';
import './products.css'
import '../../../../App.css'
import cheesecake1 from '../../../../assets/imgs/bigcheese.jpg'
import cheesecake2 from '../../../../assets/imgs/medcheese.jpg'


function Cheesecake() {
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
                      src={cheesecake1}
                      text={"     Cheesecake entera (unas 18 porciones)    "}
                      label={"23.00€"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={cheesecake2}
                      text={"     Media cheesecake (unas 10 porciones)     "}
                      label={"16.50€"}
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

export default Cheesecake
