import React from 'react'
import Form from 'react-bootstrap/Form';

function Search({txt,setxt}) {
    
  return (
    <div>
      <h1 className=" bg-primary  text-center display-2 ">IMAGE SEARCH APP</h1>
      <Form>
      <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
        <h3 className='text-center display-4'>Search image</h3>
        <Form.Control type="text" className='w-50 mx-auto'
        value={txt}
        onChange={(e)=>(setxt(e.target.value))}
        
        placeholder="Enter the image name " />
      </Form.Group>
     
    </Form>
    </div>
  )
}

export default Search
