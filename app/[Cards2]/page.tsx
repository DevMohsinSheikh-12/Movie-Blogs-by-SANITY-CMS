import React from 'react'
import Cards2 from '../components/Cards2'

function page( { params }: any) {
  return (
    <div>
        <div className="pt-24">
          <h1  className="text-4xl md:text-7xl text-center font-bold  ">
            Other Movies
          </h1>
        </div>
        <Cards2 />
    </div>
  )
}

export default page