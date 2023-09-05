import React from 'react';
import '../../sass/loader.sass';


export const Loader = () =>{
  return(
    <div className='spinner'>
      <img src={'img/spinner.png'} alt='spinner' />
    </div>
  )
}