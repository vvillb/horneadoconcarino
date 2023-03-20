import React from 'react'
import CardsItemCustom from '../../custom/CardsItemCustom';
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
      
    
      <div className='card__container_c'>
          <div className='cards__wrapper_c'>
              <ul className='cards__items_c'>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={alfajores}
                      text={"Alfajores rellenos de dulce de leche y con cobertura de chocolate"}
                      label={"12 uds:12 euros"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={alfajores}
                      text={"Alfajores rellenos de dulce de leche y con cobertura de chocolate"}
                      label={"12 uds:12 euros"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={alfajores}
                      text={"Alfajores rellenos de dulce de leche y con cobertura de chocolate"}
                      label={"12 uds:12 euros"}
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
    
  )
}

export default Alfajores
