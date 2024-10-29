import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home";
import Accomodation from "../../pages/Accomodation";
import About from "../../pages/About";
import Error from "../../pages/Error";
import Layout from "../Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/accomodation/:accId" element={<Accomodation />} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
