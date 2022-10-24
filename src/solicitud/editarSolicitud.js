import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const URI = "http://localhost:8000/products/edit/";
const URIUpdate = "http://localhost:8000/products/update/";

const CompEditSolicitud = () => {
  const [Radicado, setRadicado] = useState("");
  const [IDResponsable, setIDResponsable] = useState("");
  const [IDEstado, setIDEstado] = useState("");
  const [FechaRespuesta, setFechaRespuesta] = useState("");

  const navigate = useNavigate("");

  const { id } = useParams();

  useEffect(() => {
    getSolicitudById();
  }, []);

  const update = async e => {
    e.preventDefault();
    const FechaRespuesta = new Date();
    await axios.put(URIUpdate + id, {
      Radicado: Radicado,
      IDResponsable: IDResponsable,
      IDEstado: IDEstado,
      FechaRespuesta: FechaRespuesta,
      IDSolicitud: id,
    });
    navigate("/");
  };

  const getSolicitudById = async () => {
    const res = await axios.get(URI + id);
    setRadicado(res.data.Radicado);
    setIDResponsable(res.data.IDResponsable);
    setIDEstado(res.data.IDEstado);
  };
  useEffect(() => {
    getSolicitudById();
  }, []);

  return (
    <div>
      <h1> VISTA PARA EDITAR</h1>
      <form onSubmit={update}>
        <div className="mb-3">
          <label className="form-label"> Radicado</label>
          <input
            value={Radicado}
            onChange={e => setRadicado(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>

        <div className="mb-3">
          <label className="form-label"> ID Responsable</label>
          <input
            value={IDResponsable}
            onChange={e => setIDResponsable(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label"> ID Estado</label>
          <input
            value={IDEstado}
            onChange={e => setIDEstado(e.target.value)}
            type="text"
            className="form-control"
          />
        </div>
        <div className="mb-3">
          <label className="form-label"> Fecha Respuesta</label>
          <input
            value={FechaRespuesta}
            onChange={e => setFechaRespuesta(e.target.value)}
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
