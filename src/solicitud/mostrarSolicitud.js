import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../logomvm.png";

const URI = "http://localhost:8000/products/solicitudes";

const CompShowSolicitud = () => {
  const [Solicitudes, setSolicitud] = useState([]);
  useEffect(() => {
    getSolicitud();
  }, []);

  //Obtener todas las solicitudes
  const getSolicitud = async () => {
    const res = await axios.get(URI);
    setSolicitud(res.data);
  };

  return (
    <div className="container">
      <header className="App-header1">
        <Link to="/" className="logop">
          <img src={logo} alt="logop" className="logop"></img>
        </Link>
      </header>
      <h1>Mostrar Las solicitudes</h1>
      <div className="table-responsive">
        <div className="row ">
          <div className="col">
            <table className="table text-nowrap table-dark table-striped table-hover table-bordered ">
              <thead className="table-light">
                <tr>
                  <th>Radicado</th>
                  <th>IDResponsable</th>
                  <th>Correo Solicitante</th>
                  <th>Nombre Solicitante</th>
                  <th>Apellido Solicitante</th>
                  <th>Telefono Solicitante</th>
                  <th>Nombre Empresa</th>
                  <th>ID Tipo Solicitud</th>
                  <th>ID Estado</th>
                  <th>Fecha Solicitud</th>
                  <th>Fecha Respuesta</th>
                  <th>Descripcion</th>
                  <th>Editar</th>
                </tr>
              </thead>
              <tbody>
                {Solicitudes.map(Solicitud => (
                  <tr key={Solicitud.IDSolicitud}>
                    <td>{Solicitud.Radicado}</td>
                    <td>{Solicitud.IDResponsable}</td>
                    <td>{Solicitud.CorreoSolicitante}</td>
                    <td>{Solicitud.NombreSolicitante}</td>
                    <td>{Solicitud.ApellidoSolicitante}</td>
                    <td>{Solicitud.TelefonoSolicitante}</td>
                    <td>{Solicitud.NombreEmpresa}</td>
                    <td>{Solicitud.IdTipoSolicitud}</td>
                    <td>{Solicitud.IDEstado}</td>
                    <td>{Solicitud.FechaSolicitud}</td>
                    <td>{Solicitud.FechaRespuesta}</td>
                    <td>{Solicitud.Descripcion}</td>
                    <td>
                      <Link
                        to={`/edit/${Solicitud.IDSolicitud}`}
                        className="btn btn-info"
                      >
                        Editar
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Link to="/" className="btn btn-info">
        INICIO
      </Link>
    </div>
  );
};

export default CompShowSolicitud;
