import './NavBar.scss'
const NavBar = () => {
  return (
    <nav className="navbar  fixed-top navbar-expand-lg  bg-body-tertiary  animate__animated animate__fadeInDown" style={{backgroundColor:'#222831'}} >
    <div className="container ">
      <a className="navbar-brand" href="#" style={{color:'#f2f2f2'}}>Daniel Franchi</a>
      <button className="navbar-toggler " style={{backgroundColor:'#f2f2f2'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse  navbar-collapse" id="navbarSupportedContent" >
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item px-2">
            <a className="nav-link active" style={{color:'white'}} aria-current="page" href="#sectionFour">Sobre mi</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link" href="#sectionThree" style={{color:'#f2f2f2'}}>Proyectos</a>
          </li>
          <li className="nav-item px-2">
            <a className="nav-link " href="#sectionTwo" style={{color:'#f2f2f2'}}>Tecnologias</a>
          </li>
           <li className="py-1 px-2">
            <button className="btn" style={{backgroundColor:'#f96d00' ,height:'35px',margin:'0 auto',color:'#f2f2f2'}}>Descargar cv</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
