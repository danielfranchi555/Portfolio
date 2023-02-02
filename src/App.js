import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SectionFour from './Components/SectionFour/SectionFour';
import SectionOne from './Components/SectionOne/SectionOne';
import SectionThree from './Components/SectionThree/SectionThree';
import SectionTwo from './Components/SectionTwo/SectionTwo';
import 'animate.css';
import { Suspense,lazy } from 'react';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <Suspense fallback={<h1>cargando...</h1>}>
           <div className="" style={{margin:'0 auto' ,maxWidth:'800px'}}>
 <NavBar/>
    <SectionOne/>
    <SectionFour ></SectionFour>
    <SectionThree/>
    <SectionTwo/>
      </div>
   
    <Footer></Footer>
      </Suspense>
  
    </div>
  );
}

export default App;
