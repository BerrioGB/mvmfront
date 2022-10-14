import { Link } from "react-router-dom";

const CompPrincipalPage = () => {
  return (
    <div className="container">
      <header className="App-header">
        <Link to="/show">Admin</Link>
      </header>
      <h1>Pagina Principal</h1>
      <Link to="/create" className="btn btn-light">
        Nueva solicitud
      </Link>
    </div>
  );
};

export default CompPrincipalPage;
