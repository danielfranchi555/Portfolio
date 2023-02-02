import React from 'react'
import coding from '../../img/coding.png'
const SectionFour = () => {
  return (
    <div className='container text-center ' id='sectionFour' style={{marginTop:'200px'}}>
    <h2 style={{color:'white',marginBottom:'30px'}}>Sobre mi</h2>
        <div className="row">
            <div className="col ">
              <p style={{color:'white'}}>
              Mi nombre es  <span style={{color:'#f96d00'}}>Daniel Franchi</span>  desarrolador web autodidacta en busqueda de mi primer puesto como TRAINEE,
              soy una persona proactiva , responsable y  apasionado por aprender cosas nuevas y cumplir objetivos. Con ganas de
              poder brindar mis conocimientos en un entorno laboral y poder desarrollarme en equipo
              
              </p>
            </div>
            <div className="col ">
                <img src={coding} alt=""style={{width:'100px'}} />
            </div>
        </div>
    </div>
  )
}

export default SectionFour