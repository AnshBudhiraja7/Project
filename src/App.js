import React from 'react'
import Array from './Array'
import "./Style.css"
const App = () => {
  return (
    <div>
    {
      Array.map(function(obj){
        return(
          <div className='row'>
            <img src={obj.Path} alt="" />
            <p>{obj.Item}</p>
            <p>₹{obj.Price}/-</p>
          </div>
        )
        
      })
      
    } 
    </div>
  )}
  export default App   