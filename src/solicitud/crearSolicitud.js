import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../logomvm.png";
import swal from "sweetalert";

const URI = "https://mvmbackend.azurewebsites.net/products/create";

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
    mostraralerta();
    navigate("/");
  };

  const mostraralerta = () => {
    swal({
      title: "La solicitud se envio con exito",
      icon: "success",
      button: "Aceptar",
    });
  };
  return (
    <div className="container">
      <header className="App-header1">
        <Link to="/" className="logop">
          <img src={logo} alt="logop" className="logop"></img>
        </Link>
      </header>
      <form onSubmit={store} className="row g-3 mt-5">
        <div className="col-3">
          <label className="form-label">Nombre</label>
          <input
            value={NombreSolicitante}
            onChange={e => setNombre(e.target.value)}
            type="text"
            className="form-control"
            placeholder="Escribe tu nombre"
            required
            pattern="[a-zA-z]+"
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
            required
            pattern="[a-zA-z]+"
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
            required
            pattern="[0-9]+"
            maxLength={10}
            minLength={7}
          />
        </div>
        <div className="col-3">
          <label className="form-label">Correo</label>
          <input
            value={CorreoSolicitante}
            onChange={e => setCorreo(e.target.value)}
            type="email"
            className="form-control"
            placeholder="Correo electronico"
            required
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
            required
            pattern="[a-zA-z]+"
          />
        </div>
        <div className="col-6">
          <label className="form-label">Tipo solicitud</label>
          <input
            value={IdTipoSolicitud}
            onChange={e => setTSolicitud(e.target.value)}
            type="text"
            className="form-control"
            placeholder="1.PQRS / 2.Novedad / 3.Desarrollo"
            required
            pattern="[1-3]"
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
            required
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
