import Service1 from '../../assets/service-1.jpg'
import Service2 from '../../assets/service-2.jpg'
import Service3 from '../../assets/service-3.jpg'
import Service4 from '../../assets/service-4.jpg'

export default function Service() {
    return (
        <div className="container-xxl service py-5">
        <div className="container">
            <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Services</p>
                <h1 className="display-5 mb-5">Awesome Financial Services For Business</h1>
            </div>
            <div className="row g-4 wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                <div className="col-lg-4">
                    <div className="nav nav-pills d-flex justify-content-between w-100 h-100 me-4">
                        <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4 active" data-bs-toggle="pill" data-bs-target="#tab-pane-1" type="button">
                            <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Financial Planning</h5>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-2" type="button">
                            <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Cash Investment</h5>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-4" data-bs-toggle="pill" data-bs-target="#tab-pane-3" type="button">
                            <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Financial Consultancy</h5>
                        </button>
                        <button className="nav-link w-100 d-flex align-items-center text-start border p-4 mb-0" data-bs-toggle="pill" data-bs-target="#tab-pane-4" type="button">
                            <h5 className="m-0"><i className="fa fa-bars text-primary me-3"></i>Business Loans</h5>
                        </button>
                    </div>
                </div>
                <div className="col-lg-8">
                    <div className="tab-content w-100">
                        <div className="tab-pane fade show active" id="tab-pane-1">
                            <div className="row g-4">
                                <div className="col-md-6" style={{ minHeight: '350px' }}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute rounded w-100 h-100" src={Service1} style={{ objectFit: 'cover' }} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-4">25 Years Of Experience In Financial Support</h3>
                                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                        diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                        clita duo justo erat amet.</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Secured Loans</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Credit Facilities</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Cash Advanced</p>
                                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-2">
                            <div className="row g-4">
                                <div className="col-md-6" style={{ minHeight: '350px' }}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute rounded w-100 h-100" src={Service2} style={{ objectFit: 'cover' }} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-4">25 Years Of Experience In Financial Support</h3>
                                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                        diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                        clita duo justo erat amet.</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Secured Loans</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Credit Facilities</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Cash Advanced</p>
                                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-3">
                            <div className="row g-4">
                                <div className="col-md-6" style={{ minHeight: '350px' }}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute rounded w-100 h-100" src={Service3} style={{ objectFit: 'cover' }} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-4">25 Years Of Experience In Financial Support</h3>
                                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                        diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                        clita duo justo erat amet.</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Secured Loans</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Credit Facilities</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Cash Advanced</p>
                                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                </div>
                            </div>
                        </div>
                        <div className="tab-pane fade" id="tab-pane-4">
                            <div className="row g-4">
                                <div className="col-md-6" style={{ minHeight: '350px' }}>
                                    <div className="position-relative h-100">
                                        <img className="position-absolute rounded w-100 h-100" src={Service4} style={{ objectFit: 'cover' }} alt="" />
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <h3 className="mb-4">25 Years Of Experience In Financial Support</h3>
                                    <p className="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
                                        diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit
                                        clita duo justo erat amet.</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Secured Loans</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Credit Facilities</p>
                                    <p><i className="fa fa-check text-primary me-3"></i>Cash Advanced</p>
                                    <a href="" className="btn btn-primary py-3 px-5 mt-3">Read More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}