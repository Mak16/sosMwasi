import Footer from "./component/Footer";
import Navigation from "./component/Navigation";
import Home from "./component/Home";
import About from "./component/About";
import { Route, Routes } from "react-router-dom";
import VBG from "./component/VBG";
import Low from "./component/Low"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vbg" element={<VBG/>} />
        <Route path="/low" element={<Low/>}/>
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
