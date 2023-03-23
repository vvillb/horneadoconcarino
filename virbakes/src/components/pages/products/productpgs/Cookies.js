import React from 'react'
import CardsItemCustom from '../../custom/CardsItemCustom';
import cookies3 from '../../../../assets/imgs/cookies3.jpg'
import '../../../Cards.css'
import { useEffect } from 'react';
import { Button } from '../../../Button';
import './products.css'
import '../../../../App.css'
import cookies1 from '../../../../assets/imgs/cookies1.jpg'
import cookies2 from '../../../../assets/imgs/cookies2.jpg'


function Cookies() {
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
                      src={cookies1}
                      text={"     Caja de 12      "}
                      label={"12.00€"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={cookies2}
                      text={"     Caja de 18      "}
                      label={"16.00€"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={cookies3}
                      text={"    Caja de 24      "}
                      label={"18.00€"}
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

export default Cookies
