import './App.css';
 import Banner from './Comp.js/Banner';
 import Footer from './Comp.js/Footer';

  import Header from './Comp.js/Header';

 import Projects from './Comp.js/Project';
 import ServicesExperience from './Comp.js/Services';

function App() {
  return (
    <div className="App">
      
       <Header/>  
      <Banner />
      <ServicesExperience /> 
     
     <Projects />
     <Footer /> 
    
</div>  

  );
}

export default App;


