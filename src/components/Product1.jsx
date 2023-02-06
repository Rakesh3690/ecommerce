import React from 'react'

export default function Product1(props) {
  return (
    <div className='product'>
        <span className='back'>back</span>
            <img src="//" alt="product-image" className='product_image'/>
            <div className='item-description'>
                <div className='item-name'>
                    <h2>{props.name}</h2>
                    <p className='ratings'>{props.rating}</p>
                </div>
            </div>
    </div>
  )
}
