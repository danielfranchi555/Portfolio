import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SectionFour from './Components/SectionFour/SectionFour';
import SectionOne from './Components/SectionOne/SectionOne';
import SectionThree from './Components/SectionThree/SectionThree';
import SectionTwo from './Components/SectionTwo/SectionTwo';
import 'animate.css';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div >
      <div className="" style={{margin:'0 auto' ,maxWidth:'800px'}}>
 <NavBar/>
    <SectionOne/>
    <SectionThree/>
    <SectionTwo/>
    <SectionFour></SectionFour>
      </div>
   
    <Footer></Footer>
    </div>
  );
}

export default App;
