import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
