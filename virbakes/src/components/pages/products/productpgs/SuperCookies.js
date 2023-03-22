import React from 'react'
import CardsItemCustom from '../../custom/CardsItemCustom';
import '../../../Cards.css'
import { useEffect } from 'react';
import { Button } from '../../../Button';
import './products.css'
import '../../../../App.css'
import prod1 from '../../../../assets/imgs/supercookie2.jpg';
import prod2 from '../../../../assets/imgs/supercookie1.jpg';
import prod3 from '../../../../assets/imgs/supercookie3.jpg';

function SuperCookies() {
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
                      src={prod1}
                      text={"     Caja de 4     "}
                      label={"8.00€"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod2}
                      text={"     Caja de 6     "}
                      label={"10.50€"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod3}
                      text={"    Caja de 8     "}
                      label={"14.00€"}
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

export default SuperCookies
