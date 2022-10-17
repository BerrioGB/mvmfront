import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const URI = "http://localhost:8000/products/solicitudes";

const CompCreateSolicitud = () => {
  const [Descripcion, setDescripcion] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Empresa, setEmpresa] = useState("");
  const [TSolicitud, setTSolicitud] = useState("");
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");

  const navigate = useNavigate();

  const store = async (e) => {
    e.preventDefault();
    await axios.post(URI, {
      Descripcion: Descripcion,
      Telefono: Telefono,
      Correo: Correo,
      Empresa: Empresa,
      TSolicitud: TSolicitud,
      Nombre: Nombre,
      Apellido: Apellido,
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
            value={Nombre}
            onChange={(e) => setNombre(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Escribe tu nombre"
          />
        </div>

        <div className="col-3">
          <label className="form-label">Apellido</label>
          <input
            value={Apellido}
            onChange={(e) => setApellido(e.target.value)}
            type="text"
            className="form-control"
            placeholder="¿Cual es tu apellido?"
          />
        </div>
        <div className="col-3">
          <label className="form-label">Telefono</label>
          <input
            value={Telefono}
            onChange={(e) => setTelefono(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Numero para contactarte"
          />
        </div>
        <div className="col-3">
          <label className="form-label">Correo</label>
          <input
            value={Correo}
            onChange={(e) => setCorreo(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Correo electronico"
          />
        </div>
        <div className="col-6">
          <label className="form-label">Empresa</label>
          <input
            value={Empresa}
            onChange={(e) => setEmpresa(e.target.value)}
            type="text"
            className="form-control"
            placeholder="¿De que empresa nos contactas?"
          />
        </div>
        <div className="col-6">
          <label className="form-label">Tipo solicitud</label>
          <input
            value={TSolicitud}
            onChange={(e) => setTSolicitud(e.target.value)}
            type="text"
            className="form-control"
            placeholder="¿Que solicitud realizaras?"
          />
        </div>
        <div className="col-12">
          <label className="form-label">Descripcion</label>
          <textarea
            value={Descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Cuentanos mas sobre tu solicitud"
          />
        </div>
      </form>
      <Link to="/">
        <button type="Submit" className="btn btn-primary g-3 mt-5">
          Enviar solicitud
        </button>
      </Link>
    </div>
  );
};

export default CompCreateSolicitud;
