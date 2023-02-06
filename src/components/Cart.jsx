import React from 'react'
import styled from 'styled-components'
const Card=styled.div`
background-color: rgb(199, 188, 188);
width:20%;
padding:20px;
position:fixed;
right:0;
height:80vh;
`
export default function Cart() {
  return (
    <Card>
      <h1>CART</h1>
      <p className='Add-item'></p>
    </Card>
  )
}
