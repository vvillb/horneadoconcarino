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
import { ContactButton } from '../../ContactButton';

function Surtidos() {
    useEffect(()=>{
        window.scrollTo(0,0);
      
      },[])
    
   
  return (
    <div className='product_page' id="surtidosPage">
      
      <div className='cards_c'>
      <div className='card__container_c'>
          <div className='cards__wrapper_c'>
              <ul className='cards__items_c'>
              <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod1}
                      text={"     Prueba un poco de (casi) todo     "}
                      label={"consulta opciones"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod5}
                      text={"     Lo potente de un brookie, en versión mini     "}
                      label={"💣"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod3}
                      text={"    En mini, esta cheesecake también esté brutal   "}
                      label={"🍓"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod4}
                      text={"    Combínalos como quieras   "}
                      label={"🤩"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod2}
                      text={"   cupcakes así de chulos   "}
                      label={"(✿◠‿◠)"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod6}
                      text={"    Las opciones son muchas...    "}
                      label={"Victoria sponge cake"}
                      path={'#'}
                      title_above=""
                  />
                </div>
            </ul>
            <div className='prod__button'><ContactButton
              className='btns' 
              buttonStyle='btn--outline'
              buttonSize='btn--large'>
              Hablemos!
              </ContactButton>
              
            </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Surtidos
