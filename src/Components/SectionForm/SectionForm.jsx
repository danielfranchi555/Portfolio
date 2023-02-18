import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import './sectionForm.scss'
const SectionForm = () => {
     const [state, handleSubmit] = useForm("xvonznby");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    } 
  return (
    <div className='py-5 mt-5' id='sectionForm' >
    <div class="login-box" >
  <h2>Login</h2>
  <form onSubmit={handleSubmit}>
    <div class="user-box">
      <input 
     id="email"
     type="email" 
     name="email"/>
      <ValidationError 
        prefix="Email" 
        field="email"
        errors={state.errors}
      />
      <label>Email</label>
    </div>
    <div class="user-box">
      <input
     id="message"
     name="message"/>
        <ValidationError 
        prefix="Message" 
        field="message"
        errors={state.errors}
      />
      <label>Message</label>
    </div>
    <button type="submit" className='btn' disabled={state.submitting}>
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