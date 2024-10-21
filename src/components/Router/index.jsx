import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Accomodation from "../../pages/Accomodation";
import About from "../../pages/About";
import Error from "../../pages/Error";
import Header from "../Header";

function Router() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/accomodation/:accNumber" element={<Accomodation />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
