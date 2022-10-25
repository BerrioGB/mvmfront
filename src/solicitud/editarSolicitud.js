import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import logo from "../logomvm.png";
import swal from "sweetalert";

const URI = "https://mvmbackend.azurewebsites.net/products/edit/";
const URIUpdate = "https://mvmbackend.azurewebsites.net/products/update/";

const CompEditSolicitud = () => {
  const [Radicado, setRadicado] = useState("");
  const [IDResponsable, setIDResponsable] = useState("");
  const [IDEstado, setIDEstado] = useState("");

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
    mostraralerta();
    navigate("/show");
  };

  const mostraralerta = () => {
    swal({
      title: "La solicitud se actualizo con exito",
      icon: "success",
      button: "Aceptar",
    });
  };

  const getSolicitudById = async () => {
    const res = await axios.get(URI + id);
    setRadicado(res.data.Radicado);
    setIDResponsable(res.data.IDResponsable);
    setIDEstado(res.data.IDEstado);
  };

  return (
    <div>
      <header className="App-header1">
        <Link to="/" className="logop">
          <img src={logo} alt="logop" className="logop"></img>
        </Link>
      </header>
      <div className="container">
        <div className="m-5 d-flex justify-content-center align-items-center">
          <form
            onSubmit={update}
            className="row m-5 d-flex justify-content-center align-items-center"
          >
            <div className="col-3">
              <label className="form-label"> Radicado</label>
              <input
                value={Radicado}
                onChange={e => setRadicado(e.target.value)}
                type="text"
                className="form-control"
                request
              />
            </div>

            <div className="col-3">
              <label className="form-label"> ID Responsable</label>
              <input
                value={IDResponsable}
                onChange={e => setIDResponsable(e.target.value)}
                type="text"
                className="form-control"
                pattern="[4-6]"
                placeholder="4, 5 o 6"
              />
            </div>
            <div className="col-3">
              <label className="form-label"> ID Estado</label>
              <input
                value={IDEstado}
                onChange={e => setIDEstado(e.target.value)}
                type="text"
                className="form-control"
                request
                pattern="[1-3]"
                placeholder="1, 2 o 3"
              />
            </div>
            <button type="submit" className="btn btn-primary col-6 mt-5">
              Guardar Edicion
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CompEditSolicitud;
