import React from 'react'
import './App.css'


function Data({ele}) {
  return (
    <div key={ele.id}>
    <img src={ele?.urls?.raw}  className='img-div  ' alt="" srcset="" />
</div>
  )
}

export default Data
