import React from 'react'
import CardsItemCustom from '../../custom/CardsItemCustom';
import '../../../Cards.css'
import { useEffect } from 'react';
import { Button } from '../../../Button';
import './products.css'
import '../../../../App.css'
import cinammon1 from '../../../../assets/imgs/cinammon1.jpg'
import cinammon2 from '../../../../assets/imgs/cinammon2.jpg'


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
                      src={cinammon2}
                      text={"     Caja  (8 rollitos grandes)    "}
                      label={"24.00€"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={cinammon1}
                      text={"     Media (4 rollitos grandes)     "}
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

export default Cheesecake
