import axios from 'axios';
import React, { useEffect } from 'react'
import './App.css'

import Data from './Data';


function ImageContainer({txt,setdata,data,debounce,setdebounce}) {
    let accesskey ='m6UlxaJdtfi-N1Lmh5cpqIFxzwJqoPooaOxbPyhM0V4';//access key of api
    
    let getimg = async()=>{
        await axios
        .get(`https://api.unsplash.com/search/photos?client_id=${accesskey}&query=${txt}`)
        .then(val=> setdata(val?.data?.results))
        .catch(err=>console.log(err))
        .finally(()=> console.log('request over'))
    }
    
    useEffect(()=>{
      let timer = setTimeout(() => {
        setdebounce(txt)
      }, 3000);

      return ()=>{
        clearTimeout(timer)
      }
    },[txt])
     
    useEffect(()=>{
      if(txt){
        getimg()
      }
    },[debounce])

  return (
    <div>
        <div className="container border  border-2 p-3   border-black ">
            <h3 className=' display-5 fs-2'>Total result = {data.length}</h3>

        </div>
        <div className='main pt-5 '>
            {
            data && data.map((ele)=>{
        
           return <Data key={ele.id} ele={ele}/>
        })
        }
        </div>
      
    </div>
  )
  }

export default ImageContainer

