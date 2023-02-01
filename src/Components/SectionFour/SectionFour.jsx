import React from 'react'
import coding from '../../img/coding.png'
const SectionFour = () => {
  return (
    <div className='container text-center ' id='sectionFour' style={{marginTop:'200px'}}>
    <h2 style={{color:'white',marginBottom:'30px'}}>Sobre mi</h2>
        <div className="row">
            <div className="col">
              <p style={{color:'white'}}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, nobis quos. Nam aut quis ipsa, eius sed facilis natus enim quos mollitia, molestias cumque sint laborum, explicabo aliquam officiis magnam.</p>
            </div>
            <div className="col">
                <img src={coding} alt=""style={{width:'100px'}} />
            </div>
        </div>
    </div>
  )
}

export default SectionFour