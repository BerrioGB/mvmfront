import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/products/solicitudes";

const CompCreateSolicitud = () => {
  const [Radicado, setRadicado] = useState("");
  const [Descripcion, setDescripcion] = useState("");

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, { Radicado: Radicado, Descripcion: Descripcion });
    navigate("/");
  };

  return (
    <div>
      <h1> VISTA PARA CREAR</h1>
      <form onSubmit={store}>
        <div className="mb-3">
          <label className="form-label"> Radicado</label>
          <input
            value={Radicado}
            onChange={(e) => setRadicado(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> Descripcion</label>
          <textarea
            value={Descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Guardar
        </button>
        <Link to="/" className="btn btn-info">
          INICIO
        </Link>
      </form>
    </div>
  );
};

export default CompCreateSolicitud;
