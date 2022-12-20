import { Link } from "react-router-dom";

function NavbarComponent() {
  return (
    <div className="row">
      <div className="col-md-12">
        <nav className="navbar navbar-expand navbar-light bg-light">
          <div className="container-fluid">
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-0">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/About">About Us</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/ContactUs">Contact Us</Link>
                </li>
              </ul>
              {/* <form className="d-flex">
      <button className="btn btn-outline-success mx-2" type="submit">Login</button>
        <button className="btn btn-outline-success" type="submit">Registration</button>
      </form> */}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default NavbarComponent;
