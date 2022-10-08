import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const URI = "http://localhost:8000/products/solicitudes";

const CompShowSolicitud = () => {
  const [solicitudes, setSolicitud] = useState([]);
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
      <div className="row">
        <div className="col">
          <table className="table">
            <thead className="table-primary">
              <tr>
                <th>Title</th>
                <th>Content</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {solicitudes.map((solicitud) => (
                <tr key={solicitud.id}>
                  <td>{solicitud.title}</td>
                  <td>{solicitud.content}</td>
                  <td>
                    <Link
                      to={`/update/${solicitud.id}`}
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
  );
};

export default CompShowSolicitud;
