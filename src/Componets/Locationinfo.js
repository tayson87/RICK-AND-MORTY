import React from 'react';
import axios from 'axios'; 
import { useState, useEffect }from 'react';


//prop de los personajes  la cual viene desde App  ty sirve  para  que se cargue el estado 
       const Locationinfo = ({type}) => {

   

 // estas son propiedades  de los pesonajes las cuales van en la parte de arriba empezando
    return (
        <div className='baner'>
                       <div className='name-baner'><h2><b>Name: {type?.name}</b></h2></div>
                       <div className='dimension'><b> Dimension: {type?.dimension }</b></div>
                       <div className='amount'> <b>Amount: {type.residents?.length}</b></div> 
                        <div className='type'><b>Type: {type?.type}</b></div>
                        <div className='name-person'><p>RICK AND MORTY</p></div> 
                     
                     
                    

            
        </div>
    );
};

export default Locationinfo;