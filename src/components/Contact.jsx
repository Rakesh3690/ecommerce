import React from 'react'

export default function Contact(props) {
  return (

        
        <div className='contact-container'>
          <body className='contact-body'>
          <h3><a href={props.link} className='support-link'>{props.link}</a><br /></h3>
          <p className='link-description'>{props.description}</p>
          {/* <h3><a href="info@kicksup.com">info@kicksup.com</a>
          <span>for any technical support </span></h3>
          <h3><a href="feedback@kicksup.com">feedback@kicksup.com</a>
          <span>for any technical support </span></h3>
          <h3><a href="jobs@kicksup.com">jobs@kicksup.com</a>
          <span>for any technical support </span></h3> */}
          </body>
        </div>
   
  )
}
