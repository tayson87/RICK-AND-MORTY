import React from 'react';
import ResidentInfo from './ResidentInfo';

const ResidentsList = ({type}) => {
    console.log(type)
    return (
        //.map para hacer una lista renderizada  de los personajes 
        <div>
            {
                    type.residents?.map(resident => (
                    <ResidentInfo residentUrl = {resident} 
                       key={resident} />) )
                
            } 
        </div>
    );
};

export default ResidentsList;