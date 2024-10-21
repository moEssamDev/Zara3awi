import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Shop from "./pages/Shop";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import AgriculturalServices from "./components/AgriculturalServices";
import CropTrade from "./components/CropsTrade";
import Shopping from "./components/Shopping";

import Fertilizers from "./components/Fertilizers";
import Pesticides from "./components/Pesticides.jsx";
import Irrigation from "./components/Irrigation.jsx";
import Seeds from "./components/Seeds";
import Tools from "./components/Tools";

import LaborAndSuppliers from "./components/LaborAndSuppliers.jsx";
import Suppliers from "./components/Suppliers.jsx";
import RequestWorkers from "./components/RequestWorkers.jsx";

import { Fragment } from "react";

const App = () => (
  <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
    <Navbar />
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/shop" element={<Shop />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/agriculture-services" element={<AgriculturalServices />} />
      <Route path="/crops-trade" element={<CropTrade />} />
      <Route path="/shopping" element={<Shopping />} />

      <Route path="/fertilizers" element={<Fertilizers />} />
      <Route path="/pesticides" element={<Pesticides />} />
      <Route path="/irrigation" element={<Irrigation />} />
      <Route path="/seeds" element={<Seeds />} />
      <Route path="/tools" element={<Tools />} />

      <Route path="/LaborAndSuppliers" element={<LaborAndSuppliers />} />
      <Route path="/suppliers" element={<Suppliers />} />
      <Route path="/request-workers" element={<RequestWorkers />} />
    </Routes>
  </div>
);

export default App;
