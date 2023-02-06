import React from 'react'
import styled from 'styled-components'
const Images=styled.div`
border:solid black; 
`

export default function Shoes() {
  const whiteshoe="https://media.istockphoto.com/id/956501428/photo/sport-shoes-on-isolated-white-background.jpg?s=612x612&w=0&k=20&c=BdklqnfGUvf02-2CxYsw-AnrbE3e-B5zhE9JQILEEW4="
  return (
    <div className='items'>
      <Images>
        <img src={whiteshoe} alt="error" srcset="" />
      </Images>
    </div>
  )
}
