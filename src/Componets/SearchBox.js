import React from 'react';
import { useState }from 'react';
import axios from 'axios'; 


   const SearchBox = ({setType}) => {

    const [ search , setSearch] = useState ("" );
    // esta es la  funcion  para hacer la peticion  de la api y  traer su location 
    const searchLocation = () => {

                         axios.get (`https://rickandmortyapi.com/api/location/${search}` )
                         .then(res => setType(res.data));
                          setSearch("") 
    }
    //estos son los input  y  el boton para buscar la location  de los personajes solo con  dar un  numero a la zar 
    return (
        <>
              <input className='box' type = "text" placeholder='id Location ' 
                  onChange={e => setSearch(e.target.value) }
                  value={search}  />
             <button className='btn' onClick={searchLocation} >
                    Search
            </button>    
        

      </>
     
    );
};

export default SearchBox;