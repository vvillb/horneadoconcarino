import React from 'react';
import '../../../App.css';
import alfajores from '../../../assets/imgs/alfajores.jpg';
import '../../../index.css';
import Cardsreuse from './Cardsreuse';
import cheesecake from '../../../assets/imgs/cheesecake.jpg'
import granola from '../../../assets/imgs/granola.jpg'
import bizcochoMarmolado from '../../../assets/imgs/bizcocho_aurora.jpg'
import brownie from '../../../assets/imgs/brownie.jpg'
import cinammonRolls from '../../../assets/imgs/cinammon_rolls.jpg'
import carrotCake from '../../../assets/imgs/carrot_cake_fit.jpg'
import cookies from '../../../assets/imgs/cookies.jpg'
import miniBrookies from '../../../assets/imgs/mini_brookies.jpg'
import spongeCake from '../../../assets/imgs/sponge_cake.jpg'
import superCookie from '../../../assets/imgs/super_cookie.jpg'
import bizcochoDatiles from '../../../assets/imgs/bizch_nuecesydatiles_fit.jpg'
import superCookieChoco from '../../../assets/imgs/super_cookie_choco.jpg'
import brookie from '../../../assets/imgs/brookie.jpg'
import bizcochos from '../../../assets/imgs/bizcochos.jpg'
import trufitas from '../../../assets/imgs/trufitas.jpg'

import { useEffect } from 'react';

function Products(){
  useEffect(()=>{
    window.scrollTo(0,0);
  
  },[])
const productos=[
  {id:1,
  label: 'Alfajores',
  path:'./productpgs/Alfajores',
  price:'15,50',
  src: alfajores,
  imageAlt: 'Alfajores',
  text:'Rellenos de dulce de leche y cubiertos con chocolate',
},
{id:2,
  label: 'Cheesecake',
  path:'./productpgs/Cheesecake',
  price:'15,50',
  src: cheesecake,
  imageAlt: 'Cheesecake',
  text:'Horneada (por supesto)',
},
{id:3,
  label: 'Súper cookies',
  path:'./productpgs/SuperCookies',
  price:'15,50',
  src: superCookie,
  imageAlt: 'Super cookie',
  text:'Rellena de nutella',
},
{id:4,
  label: 'Cinammon rolls',
  path:'./productpgs/Cinammon',
  price:'15,50',
  src: cinammonRolls,
  imageAlt: 'Cinammon rolls',
  text:'Pruébalos calentitos...directos al corazón',
},
{id:5,
  label: 'Brownie',
  path:'./productpgs/Brownie',
  price:'15,50',
  src: brownie,
  imageAlt: 'Brownie',
  text:'Con toppings brutales',
},
{id:6,
  label: 'Bizcocho de dátiles  💪fit!',
  path:'./productpgs/BizcochoDatiles',
  price:'15,50',
  src: bizcochoDatiles,
  imageAlt: 'Bizcocho fit de nueces y dátiles',
  text:'Sponjoso y healthy...increíble',
},
{id:7,
  label: 'Granola  💪fit!',
  path:'./productpgs/Granola',
  price:'15,50',
  src: granola,
  imageAlt: 'Granola',
  text:'Rico y sano!',
},
{id:8,
  label: 'Supercookie chocolate',
  path:'./productpgs/SuperCookies',
  price:'15,50',
  src: superCookieChoco,
  imageAlt: 'Super cookie chocolate',
  text:'También versión extra chocolate',
},
/*{id:9,
  label: 'Mini brookie pies',
  path:'./productpgs/MiniBrookie',
  price:'15,50',
  src:miniBrookies ,
  imageAlt: 'mini brookies',
  text:'Lo brutal que es un brookie, en versión mini',
}.*/
{id:10,
  label: 'Cookies',
  path:'./productpgs/Cookies',
  price:'15,50',
  src: cookies,
  imageAlt: 'Cookies',
  text:'Eres más de chewy o de crunchy??',
},
/*{id:11,
  label: 'Victoria sponge cake cupcakes',
  path:'./productpgs/Victoria',
  price:'15,50',
  src: spongeCake,
  imageAlt: 'Victoria Sponge Cake',
  text:'A que son monísimos?',
},*/
{id:12,
  label: 'Carrot Cake Fit  💪fit!',
  path:'./productpgs/CarrotCake',
  price:'15,50',
  src: carrotCake,
  imageAlt: 'Carrot cake',
  text:'No vas a creer que es fit',
},
{id: 13,
  label: 'Bizcocho marmolado',
  path:'./productpgs/Marmolado',
  price:'15,50',
  src: bizcochoMarmolado,
  imageAlt: 'Bizcocho marmolado',
  text:'Vainilla y chocolate y suuuper esponjoso',
},
{id:14,
  label: 'Brookie pie',
  path:'./productpgs/Brookie',
  price:'15,50',
  src: brookie ,
  imageAlt: 'Brookie pie',
  text:'Brownie + Cookie...una locura',
},
{id:15,
  label: 'Trufitas',
  path:'./productpgs/Trufitas',
  price:'15,50',
  src: trufitas ,
  imageAlt: 'Trufitas',
  text:'Bocaditos de gloria',
},
{id:16,
  label: 'Más',
  path:'../Custom',
  price:'15,50',
  src: bizcochos,
  imageAlt: 'Bizcochos',
  text:'Descubre la variedad de tartas, surtidos y más cosas que puedes disfrutar',
},

];



return(
    <div className='productos'>
      
      <Cardsreuse data={productos} backgroundColor='#f9f4f4'/>
    </div>
 ) };


  export default Products;
  


