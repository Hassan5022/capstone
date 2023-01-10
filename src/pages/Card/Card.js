import React from 'react'
import './Card.css'
import DocImage from '../../Images/docImage.jpg'


const Card = () => {
  return (
    <div className='section-three'>

<div className="cards">
<img src={DocImage} alt='DocImage' className='DocImage'></img>
  <div className='card'>aaaaa</div>
  <img src={DocImage} alt='DocImage' className='DocImage'></img>
  <div className='card'>aree</div>
  {/* <div className='card'>aree</div>  */}
  
  

</div>
    </div>
  )
}

export default Card