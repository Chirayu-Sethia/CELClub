import React from 'react';
import Header from './MyComponents/Header';
import Projects from './MyComponents/Home/Projects/Projects';
import Footer from './MyComponents/Footer';
import Navs from './MyComponents/Nav';
 
function App() {
  return (
     
     <React.Fragment>
       <Navs/>
       <Header title="CEL : Standing Apart" searchBar={false}/>
       <Projects />
       <Footer />
    </React.Fragment>
  );
}
 
export default App;
 