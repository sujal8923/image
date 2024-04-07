import React, { useState } from 'react'
import Search from './Search'
import ImageContainer from './ImageContainer'


function Main4() {
    let [txt,setxt] = useState('')
    let [data,setdata] = useState([])
    let [debounce,setdebounce] = useState(txt)
  return (
    <div>
        <Search txt={txt} setxt={setxt}/>
        <ImageContainer txt={txt} data={data} setdata={setdata} debounce={debounce} setdebounce={setdebounce}/>
        {/* <Imagedata/> */}
        
      
    </div>
  )
}

export default Main4
