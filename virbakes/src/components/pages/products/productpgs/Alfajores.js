import React from 'react'
import CardsItemCustom from '../../custom/CardsItemCustom';
import alfajores from '../../../../assets/imgs/alfajores2.jpg'
import '../../../Cards.css'
import { useEffect } from 'react';
import { Button } from '../../../Button';
import './products.css'
import '../../../../App.css'
import alfajores2 from '../../../../assets/imgs/alfajores3.jpg'
import alfajores3 from '../../../../assets/imgs/alfajores.jpg'


function Alfajores() {
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
                      src={alfajores2}
                      text={"     Caja de 12 alfajores     "}
                      label={"15.50€"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={alfajores3}
                      text={"     Caja de 18 alfajores     "}
                      label={"22.50€"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={alfajores}
                      text={"    Caja de 24 alfajores     "}
                      label={"25€"}
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

export default Alfajores
