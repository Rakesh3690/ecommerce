import React from 'react'

export default function Card(props) {
  return (
    <div className='card'>
        <img src={props.img} alt="" className='card-image' />
        <div className="card-stats">
            <span className='gray'>{props.rating}</span>
            <span className='gray'>(6).</span>
        </div>
        <p>{props.title}</p>
        <p className='bold'>{`Rs. ${props.price}`}</p>
    </div>
  )
}
