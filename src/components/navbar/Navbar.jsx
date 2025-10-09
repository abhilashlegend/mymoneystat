export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light py-lg-0 px-lg-5 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn" }}>
            <a href="index.html" className="navbar-brand ms-4 ms-lg-0">
                <h1 className="display-5 text-primary m-0">MyMoneyStat</h1>
            </a>
            <button type="button" className="navbar-toggler me-4" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
                <div className="navbar-nav ms-auto p-4 p-lg-0">
                    <a href="index.html" className="nav-item nav-link active">Home</a>
                    <a href="about.html" className="nav-item nav-link">About</a>
                    <a href="service.html" className="nav-item nav-link">Services</a>
                    <div className="nav-item dropdown">
                        <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                        <div className="dropdown-menu border-light m-0">
                            <a href="project.html" className="dropdown-item">Projects</a>
                            <a href="feature.html" className="dropdown-item">Features</a>
                            <a href="team.html" className="dropdown-item">Team Member</a>
                            <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                            <a href="404.html" className="dropdown-item">404 Page</a>
                        </div>
                    </div>
                    <a href="contact.html" className="nav-item nav-link">Contact</a>
                </div>
                <div className="d-none d-lg-flex ms-2">
                    <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                        <small className="fab fa-facebook-f text-primary"></small>
                    </a>
                    <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                        <small className="fab fa-twitter text-primary"></small>
                    </a>
                    <a className="btn btn-light btn-sm-square rounded-circle ms-3" href="">
                        <small className="fab fa-linkedin-in text-primary"></small>
                    </a>
                </div>
            </div>
        </nav>
    )
}