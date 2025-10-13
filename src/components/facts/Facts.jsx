import Counter from '../common/Counter'

export default function Facts() {
    return(
        <div className="container-fluid facts my-5 py-5">
        <div className="container py-5">
            <div className="row g-5">
                <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.1s" style={{ visibility: "visible", animationDelay: "0.1s", animationName: "fadeIn" }}>
                    <i className="fa fa-users fa-3x text-white mb-3"></i>
                    <Counter end={1234} />
                    <span className="fs-5 text-white">Happy Clients</span>
                    <hr className="bg-white w-25 mx-auto mb-0" />
                </div>
                <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.3s" style={{ visibility: "visible", animationDelay: "0.3s", animationName: "fadeIn" }}>
                    <i className="fa fa-check fa-3x text-white mb-3"></i>
                    <Counter end={3456} />
                    <span className="fs-5 text-white">Projects Completed</span>
                    <hr className="bg-white w-25 mx-auto mb-0" />
                </div>
                <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.5s" style={{ visibility: "visible", animationDelay: "0.5s", animationName: "fadeIn" }}>
                    <i className="fa fa-users-cog fa-3x text-white mb-3"></i>
                    <Counter end={2345} />
                    <span className="fs-5 text-white">Dedicated Staff</span>
                    <hr className="bg-white w-25 mx-auto mb-0" />
                </div>
                <div className="col-sm-6 col-lg-3 text-center wow fadeIn" data-wow-delay="0.7s" style={{ visibility: "visible", animationDelay: "0.7s", animationName: "fadeIn" }}>
                    <i className="fa fa-award fa-3x text-white mb-3"></i>
                    <Counter end={456} />
                    <span className="fs-5 text-white">Awards Achieved</span>
                    <hr className="bg-white w-25 mx-auto mb-0" />
                </div>
            </div>
        </div>
    </div>
    )
}
