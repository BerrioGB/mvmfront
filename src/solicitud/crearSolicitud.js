import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/products/create";

const CompCreateSolicitud = () => {
  const [Descripcion, setDescripcion] = useState("");
  const [TelefonoSolicitante, setTelefono] = useState("");
  const [CorreoSolicitante, setCorreo] = useState("");
  const [NombreEmpresa, setEmpresa] = useState("");
  const [IdTipoSolicitud, setTSolicitud] = useState("");
  const [NombreSolicitante, setNombre] = useState("");
  const [ApellidoSolicitante, setApellido] = useState("");

  const navigate = useNavigate();

  const store = async e => {
    e.preventDefault();
    const Radicado = "MVM-44746";
    const FechaSolicitud = new Date();

    await axios.post(URI, {
      Radicado: Radicado,
      Descripcion: Descripcion,
      TelefonoSolicitante: TelefonoSolicitante,
      CorreoSolicitante: CorreoSolicitante,
      NombreEmpresa: NombreEmpresa,
      IdTipoSolicitud: IdTipoSolicitud,
      NombreSolicitante: NombreSolicitante,
      ApellidoSolicitante: ApellidoSolicitante,
      FechaSolicitud: FechaSolicitud,
    });
    navigate("/");
  };

  return (
    <div className="container">
      <h1> VISTA PARA CREAR</h1>
      <form onSubmit={store} className="row g-3 mt-5">
        <div className="col-3">
          <label className="form-label">Nombre</label>
          <input
            value={NombreSolicitante}
            onChange={e => setNombre(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Escribe tu nombre"
          />
        </div>
        <div className="col-3">
          <label className="form-label">Apellido</label>
          <input
            value={ApellidoSolicitante}
            onChange={e => setApellido(e.target.value)}
            type="text"
            className="form-control"
            placeholder="¿Cual es tu apellido?"
          />
        </div>
        <div className="col-3">
          <label className="form-label">Telefono</label>
          <input
            value={TelefonoSolicitante}
            onChange={e => setTelefono(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Numero para contactarte"
          />
        </div>
        <div className="col-3">
          <label className="form-label">Correo</label>
          <input
            value={CorreoSolicitante}
            onChange={e => setCorreo(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Correo electronico"
          />
        </div>
        <div className="col-6">
          <label className="form-label">Empresa</label>
          <input
            value={NombreEmpresa}
            onChange={e => setEmpresa(e.target.value)}
            type="text"
            className="form-control"
            placeholder="¿De que empresa nos contactas?"
          />
        </div>
        <div className="col-6">
          <label className="form-label">Tipo solicitud</label>
          <input
            value={IdTipoSolicitud}
            onChange={e => setTSolicitud(e.target.value)}
            type="text"
            className="form-control"
            placeholder="¿Que solicitud realizaras?"
          />
        </div>
        <div className="col-12">
          <label className="form-label">Descripcion</label>
          <textarea
            value={Descripcion}
            onChange={e => setDescripcion(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Cuentanos mas sobre tu solicitud"
          />
        </div>
        <button type="submit" className="btn btn-primary g-3 mt-5">
          Enviar solicitud
        </button>
      </form>
    </div>
  );
};

export default CompCreateSolicitud;
