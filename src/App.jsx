import { useState } from 'react'
import './App.css';
import './Css/responsive.css'
import Div1 from './Components/Div1';
import Div2 from './Components/Div2';
import Div3 from './Components/Div3';
import Footer from './Components/Footer';
function App() {
  return (
   <>
   {/* <Div1/>
   <Div2/>
   <Div3/>
   <Div4/> */}


<>
  <header className="header">
  <Div1/>
   <Div2/> 
  </header>
  <Div3/>
  <Footer/>
</>


   </>
  );
}

export default App;

