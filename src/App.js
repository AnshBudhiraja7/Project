import React, { useState } from 'react'
import imageCompression from 'browser-image-compression'
const App = () => {
  const [image,setimage]=useState({})
  const[img,setimg]=useState()
  async function upload(event)
  {
    var file=event.target.files[0]
    if(file)
    {      
      const options = {
        maxSizeMB: 2, // Maximum size in MB
        maxWidthOrHeight: 300,
        useWebWorker: true,
      }
      var compressedfile= await imageCompression(file,options)
      setimage(compressedfile);
      var result= URL.createObjectURL(compressedfile)
  
      setimg(result);
    }
  }

  function Save()
  {

  
    
  }
  return (
    <div className='container'>
      <input type="file" onChange={upload} className="form-control" />
      <button className='btn btn-success' onClick={Save}>Save</button>

      <img src={img} alt="" />
      
    </div>
  )
}

export default App
