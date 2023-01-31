
const NavBar = () => {
  return (
    <nav className="navbar  navbar-expand-lg bg-body-tertiary">
    <div className="container">
      <a className="navbar-brand" href="#" style={{color:'#008B8B'}}>Daniel Franchi</a>
      <button className="navbar-toggler " style={{backgroundColor:'#008B8B'}} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon "></span>
      </button>
      <div className="collapse  navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <a className="nav-link active" style={{color:'white'}} aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#sectionThree" style={{color:'white'}}>Proyectos</a>
          </li>
          <li className="nav-item">
            <a className="nav-link " href="#sectionTwo" style={{color:'white'}}>Tecnologias</a>
          </li>
           <li className="nav-item">
            <button className="btn" style={{backgroundColor:'#008B8B' ,height:'35px',margin:'0 auto',color:'white'}}>Descargar cv</button>
          </li>
        </ul>
      </div>
    </div>
  </nav>
  );
};

export default NavBar;
