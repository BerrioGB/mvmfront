import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/products/solicitudes";

const CompShowSolicitud = () => {
  const [solicituds, setSolicitud] = useState([]);
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
      <div className="row">
        <div className="col">
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Radicado</th>
                <th>Descripcion</th>
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
              </tr>
            </thead>
            <tbody>
              {solicituds.map((solicitud) => (
                <tr key={solicitud.id}>
                  <td>{solicitud.Radicado}</td>
                  <td>{solicitud.Descripcion}</td>
                  <td>
                    <Link to={`/edit/${solicitud.id}`} className="btn btn-info">
                      Editar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Link to="/" className="btn btn-info">
        INICIO
      </Link>
    </div>
  );
};

export default CompShowSolicitud;
