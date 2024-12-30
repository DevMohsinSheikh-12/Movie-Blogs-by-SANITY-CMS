import React from 'react'
import Cards from './components/Cards';
import Herosec from './components/Herosec';
import Alert from './components/Alert';




export const revalidate = 30; // revalidate at most 30 seconds



export default async function page() {
  



  return (
    
 

   
      
      <div>

         <Alert />
        <Herosec /> 
        <Cards />

      
        </div>
  )
}
 
