// eslint-disable-next-line

import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import ScanRequisition from "./Pages/ScanRequisition";
import PrescriptionGenerator from "./Pages/PrescriptionGenerator";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/imagescanrequisition" element={<ScanRequisition />} />
        <Route
          path="/prescriptiongenerator"
          element={<PrescriptionGenerator />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
