import React from 'react'
import CardsItemCustom from './CardsItemCustom';
import '../../Cards.css'
import { useEffect } from 'react';
import { Button } from '../../Button';
import '../products/productpgs/products.css'
import '../../../App.css'
import prod1 from '../../../assets/imgs/surtido1.jpg';
import prod2 from '../../../assets/imgs/surtido2.jpg';
import prod3 from '../../../assets/imgs/surtido3.jpg';
import prod4 from '../../../assets/imgs/surtido4.jpg';
import prod5 from '../../../assets/imgs/surtido5.jpg';
import prod6 from '../../../assets/imgs/surtido6.jpg';

function Surtidos() {
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
                      path={'/contact'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod2}
                      text={"     Caja de 6     "}
                      label={"10.50€"}
                      path={'/contact'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod3}
                      text={"    Caja de 8     "}
                      label={"14.00€"}
                      path={'/contact'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod4}
                      text={"    Caja de 8     "}
                      label={"14.00€"}
                      path={'/contact'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod5}
                      text={"    Caja de 8     "}
                      label={"14.00€"}
                      path={'/contact'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod6}
                      text={"    Caja de 8     "}
                      label={"14.00€"}
                      path={'/contact'}
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

export default Surtidos
