import Footer from "./component/Footer";
import Navigation from "./component/Navigation";
import Home from "./component/Home";
import About from "./component/About";
import { Route, Routes } from "react-router-dom";
import VBG from "./component/VBG";
import SignalerUnCas from "./component/SignalerUnCas"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vbg" element={<VBG/>} />
        <Route path="/signalerUnCas" element={<SignalerUnCas/>}/>
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
