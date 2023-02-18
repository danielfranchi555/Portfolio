import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SectionFour from './Components/SectionFour/SectionFour';
import SectionOne from './Components/SectionOne/SectionOne';
import SectionThree from './Components/SectionThree/SectionThree';
import SectionTwo from './Components/SectionTwo/SectionTwo';
import 'animate.css';
import Footer from './Components/Footer/Footer';
import SectionForm from './Components/SectionForm/SectionForm';

function App() {
  return (
    <div >
      
    <div className="" style={{margin:'0 auto' ,maxWidth:'800px'}}>
    <NavBar/>
    <SectionOne/>
    <SectionFour/>
    <SectionThree/>
    <SectionTwo/>
    <SectionForm/>
    </div>
    <Footer/>
  
    </div>
  );
}

export default App;
