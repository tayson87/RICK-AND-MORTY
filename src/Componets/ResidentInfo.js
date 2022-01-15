import React from 'react';
import axios from 'axios'; 
import { useState, useEffect }from 'react';

const ResidentInfo = ({residentUrl}) => {
//estado de los residentes  para  hacer el llamdo
const [ resident, setResindent] = useState ( {});
//llamado a la  url para  traer los personajes en la card
useEffect ( () => {

                  axios.get ( residentUrl)
                 .then( res => setResindent (res.data));

    }, [] );
 
    console.log(resident)
    

// propiedades de la  url para  traerlas  a la card incluido la imagen
    return (
 <div className='container-card'>
              <div>  <span className='name'>
                         <b>Name: {resident.name}</b> </span>
            </div> 
             <div> 
                        <img className='img' src= {resident.image}></img>
                                    </div>
                 <div>
                      <span className='status'>
                      <b>Status: {resident.status}</b> </span>
                </div>
                <div>
                       <span className='origin'>
                        <b>Origin:{resident.origin?.name}</b></span>
               </div> 
               <div>
                         <span className='episodies'
                         ><b>Number of Episodes: {resident.episode?.length}</b></span>
                </div>
                
 </div>
    );
};

export default ResidentInfo;