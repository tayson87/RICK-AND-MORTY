import axios from 'axios'; 
import { useState, useEffect }from 'react';
import './App.css';
import Locationinfo  from './Componets/Locationinfo';
import ResidentInfo  from './Componets/ResidentInfo';
import ResidentsList from './Componets/ResidentsList';
import SearchBox from './Componets/SearchBox';

function App() {

  const  [ type, setType] = useState ( { } );


//Este es el estado  con el cual  hacemos la peticion  a la api  y  nos trae un pesrsonaje a la zar 
  useEffect ( () => {
         
    const ramdonId = Math.floor(Math.random() *126 ) +1 ;
                    axios.get (`https://rickandmortyapi.com/api/location/${ramdonId}` )
                   .then(res => setType(res.data));

                }, [] );  



    // Estos son los props que se renderizan en  en  app 

  return (
    <div className="App">
     <Locationinfo  type={type} />     
     <SearchBox setType={setType}/> 
     <ResidentsList type= {type} />
     
      



      
    </div>
  );
}

export default App;
