import './App.css';
import NavBar from './Components/NavBar/NavBar';
import SectionOne from './Components/SectionOne/SectionOne';
import SectionThree from './Components/SectionThree/SectionThree';
import SectionTwo from './Components/SectionTwo/SectionTwo';

function App() {
  return (
    <div className="" style={{margin:'0 auto' ,maxWidth:'800px'}}>
    <NavBar/>
    <SectionOne/>
    <SectionTwo/>
    <SectionThree/>
    </div>
  );
}

export default App;
