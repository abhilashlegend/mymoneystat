import  Carousel1  from '../../assets/carousel-1.jpg'
import  Carousel2  from '../../assets/carousel-2.jpg'

export default function Carousel() {
    return (
        <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: "visible",  animationDelay: "0.1s", animationName: "fadeIn" }}>
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active carousel-item-start">
                    <img className="w-100" src={Carousel1} alt="Image" />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-8">
                                    <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3  slideInDown">
                                        Welcome to My Money Stat</p>
                                    <h1 className="display-1 mb-4  slideInDown">Your Financial Status Is Our Goal
                                    </h1>
                                    <a href="" className="btn btn-primary py-3 px-5  slideInDown">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="carousel-item carousel-item-next carousel-item-start">
                    <img className="w-100" src={Carousel2} alt="Image" />
                    <div className="carousel-caption">
                        <div className="container">
                            <div className="row justify-content-start">
                                <div className="col-lg-7">
                                    <p className="d-inline-block border border-white rounded text-primary fw-semi-bold py-1 px-3  slideInDown">
                                        Welcome to My Money Stat</p>
                                    <h1 className="display-1 mb-4  slideInDown">True Financial Support For You</h1>
                                    <a href="" className="btn btn-primary py-3 px-5  slideInDown">Explore More</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#header-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    </div>
    )
}