import React from 'react'
import CardsItemCustom from './CardsItemCustom';
import '../../Cards.css'
import { useEffect } from 'react';
import '../products/productpgs/products.css'
import '../../../App.css'
import prod1 from '../../../assets/imgs/tartas1.jpg';
import prod2 from '../../../assets/imgs/tartas2.jpg';
import prod3 from '../../../assets/imgs/tartas3.jpg';
import prod4 from '../../../assets/imgs/tartas4.jpg';
import prod5 from '../../../assets/imgs/tartas5.jpg';
import prod6 from '../../../assets/imgs/tartas6.jpg';
import { ContactButton } from '../../ContactButton';

function Tartas() {
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
                      text={"     Con un toque de naranja y almendras tostadas-con merengue italiano    "}
                      label={"Bizcocho de vainilla"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod4}
                      text={"     Con relleno de dulce de leche    "}
                      label={"Bizcocho marmolado"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod3}
                      text={"   El nombre es totalmente merecido...está que te mueres "}
                      label={" Death by chocolate cake"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod5}
                      text={"   Si te apetece algo más clásico  "}
                      label={"Bizcocho marmolado"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod2}
                      text={"   Heathly carrot cake   "}
                      label={"(✿◠‿◠)"}
                      path={'#'}
                      title_above=""
                  />
                </div>
                <div className='cards__item_c'>
                  <CardsItemCustom
                      src={prod6}
                      text={"   También tienes todo lo rico sin pecar    "}
                      label={"Bizcocho fit de nueces y dátiles"}
                      path={'#'}
                      title_above=""
                  />
                </div>
            </ul>
            <h1>¿Qué tienes en mente?</h1>
            <br></br>
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

export default Tartas
