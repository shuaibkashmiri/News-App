import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import "./Styles/style.css"
import{BrowserRouter, Routes,Route} from "react-router-dom"
import Sports from "./Components/Sports";
import Technology from "./Components/Technology";
import India from "./Components/India";
function App() {
  return (
    <>
     <BrowserRouter>
      <Navbar />
     <Routes>
     {/* <Route path="*" element= {<Nopage/>} />     */}
          <Route path="/" element= {<Home/>} />
          <Route path="/sports" element={<Sports/>}/>
          <Route path="/technology" element={<Technology/>}/>
          <Route path="/india" element={<India/>}/>


       


 </Routes>
      
      <Footer />
      </BrowserRouter>
      </>

  );
}

export default App;
