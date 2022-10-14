import "./App.css";
import CompShowSolicitud from "./solicitud/mostrarSolicitud";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CompCreateSolicitud from "./solicitud/crearSolicitud";
import CompPrincipalPage from "./solicitud/PrincipalPage";
import CompEditSolicitud from "./solicitud/editarSolicitud";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<CompPrincipalPage />} />
          <Route path="/show" element={<CompShowSolicitud />} />
          <Route path="/create" element={<CompCreateSolicitud />} />
          <Route path="/edit/:id" element={<CompEditSolicitud />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
