import Footer from "./component/Footer";
import Navigation from "./component/Navigation";
import Home from "./component/Home";
import About from "./component/About";
import { Route, Routes } from "react-router-dom";
import VBG from "./component/Vbg";
import SignalerUnCas from "./component/SignalerUnCas";
import Law from "./component/Law";

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/sosMwasi" element={<Home />} />
        <Route path="/sosMwasi/about" element={<About />} />
        <Route path="/sosMwasi/vbg" element={<VBG />} />
        <Route path="/sosMwasi/signalerUnCas" element={<SignalerUnCas />} />
        <Route path="/sosMwasi/law" element={<Law />} />
        <Route />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
