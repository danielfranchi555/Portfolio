import React from 'react'
import { useForm, ValidationError } from '@formspree/react';
import './sectionForm.scss'
const SectionForm = () => {
   /*  const [state, handleSubmit] = useForm("xvonznby");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    } */
  return (
    <div className='py-5 mt-5' id='sectionForm'>
        <div class="login-box">
    <h2>Contact</h2>
    <form>
      <div class="user-box">
        <input type="text" name="" required=""/>
        <label>Username</label>
      </div>
      <div class="user-box">
        <input type="password" name="" required=""/>
        <label>Password</label>
      </div>
      <a href="#">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        Submit
      </a>
    </form>
  </div>
    </div>
    

  )
}

export default SectionForm