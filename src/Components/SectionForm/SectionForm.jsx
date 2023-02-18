import React from 'react'
import { useForm } from '@formspree/react';
import swal from 'sweetalert';
import './sectionForm.scss'
const SectionForm = () => {

const [state, handleSubmit] = useForm("xvonznby");
 
  if (state.succeeded){
    alert('thankss')
  }
 
    console.log(state)
  return (
    <div className='py-5 mt-5' id='sectionForm' >
    <div class="login-box" >
  <h2>Contact me</h2>
  <form onSubmit={handleSubmit} action="https://formsubmit.co/danielfranchi3@gmail.com"  method="POST">
    <div class="user-box">
      <input 
     id="name"
     type="text" 
     name="name"
     required/>
      <label>Name</label>
      <div class="user-box">
      <input 
     id="email"
     type="text" 
     name="email"
     required/>
      <label>Email</label>
    </div>
    </div>
    <div class="user-box">
      <input 
     id="message"
     type="text" 
     name="message"
     required/>
      <label>Message</label>
    </div>
    <button type="submit" className='btn'>
     <a href="#" style={{textDecoration:'none'}}>
      <span></span>
      <span></span>
      <span></span>
      <span></span>
       <p className='text-center' style={{color:'white'}}>sumbit</p>
    </a>
    </button>
   
  </form>
</div>
    </div>
    

  )
}

export default SectionForm