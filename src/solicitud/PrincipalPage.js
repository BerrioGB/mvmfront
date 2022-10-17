import { Link } from "react-router-dom";
import logo from "../logomvm.png";
import adminlogo from "../adminlogo.png";

const CompPrincipalPage = () => {
  return (
    <div className="prueba">
      <header className="App-header">
        <Link to="/show" className="admin">
          <img src={adminlogo} alt="adminlogo" className="adminlogo"></img>
        </Link>
      </header>
      <div className="container2">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div className="container1">
        <h1>¿Algo que nos quieras decir?</h1>
        <Link to="/create" className="btn btn-primary mt-5">
          Nueva solicitud
        </Link>
      </div>
    </div>
  );
};

export default CompPrincipalPage;
