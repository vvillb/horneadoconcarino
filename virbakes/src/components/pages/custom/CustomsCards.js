import React from 'react'
import CardsItemCustom from './CardsItemCustom'
import './CustomCards.css'
import mix from '../../../assets/imgs/surtido_brow_alf.jpg'
import tartaDdl from '../../../assets/imgs/bizcocho_marm_ddl.jpg'
import tartaAlfajor from '../../../assets/imgs/tarta_alfajor.jpg'

function CustomCards() {
    return (
      <div className='cards_c'>
        <h1>Pide lo que quieras!</h1>

        <div className='card__container_c'>
          <div className='cards__wrapper_c'>
              <ul className='cards__items_c'>
                
                     
                  <div className='cards__item_c'>
                    
                    <CardsItemCustom
                    src={mix}
                    text="Ideales para eventos y reuniones"
                    label="Surtido varios"
                   path="./Surtidos"
                   title_above="No sabes que escoger?"
                    />
                  </div>
                
                
                  <div className='cards__item_c'>                 
                  <CardsItemCustom
                  src={tartaDdl}
                  text="Mejor algo que luzca así de bonito en la mesa, no?"
                  label="Mira qué tartas"
                  path="./Tartas"
                  title_above="Tienes un evento especial?"
                  />
                  </div>
                
                
                  <div className='cards__item_c'>  
                  <CardsItemCustom
                  src={tartaAlfajor}
                  text="Un alfajor hecho tarta...tus sueños hechos realidad 😉"
                  label="Contacta y dime!"
                  path="/contact"
                  title_above="Qué te imaginas?"
                  />
                  </div>
                 
              </ul>
          </div>
        </div>
      </div>
    );
  }

  export default CustomCards;