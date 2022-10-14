import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/products/solicitudes";

const CompEditSolicitud = () => {
  const [Radicado, setRadicado] = useState("");
  const [Descripcion, setDescripcion] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  const update = async (e) => {
    e.preventDefault();
    await axios.put(URI + id, {
      Radicado: Radicado,
    });
    navigate("/");
  };
  useEffect(() => {
    getSolicitudById();
  }, []);

  const getSolicitudById = async () => {
    const res = await axios.get(URI + id);
    setRadicado(res.data.Radicado);
  };
  return (
    <div>
      <h1> VISTA PARA EDITAR</h1>
      <form onSubmit={update}>
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
          Guardar Edicion
        </button>
      </form>
    </div>
  );
};

export default CompEditSolicitud;
