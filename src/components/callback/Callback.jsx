import './Callback.css';

export default function Callback() {
    return (
        <div className="container-fluid callback my-5 pt-5">
        <div className="container pt-5">
            <div className="row justify-content-center">
                <div className="col-lg-7">
                    <div className="bg-white border rounded p-4 p-sm-5 wow fadeInUp" data-wow-delay="0.5s" style={{ visibility: 'visible', animationDelay: '0.5s', animationName: 'fadeInUp' }}>
                        <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                            <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Get In Touch
                            </p>
                            <h1 className="display-5 mb-5">Request A Call-Back</h1>
                        </div>
                        <div className="row g-3">
                            <div className="col-sm-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="name" placeholder="Your Name" />
                                    <label htmlFor="name">Your Name</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-floating">
                                    <input type="email" className="form-control" id="mail" placeholder="Your Email" />
                                    <label htmlFor="mail">Your Email</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="mobile" placeholder="Your Mobile" />
                                    <label htmlFor="mobile">Your Mobile</label>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <div className="form-floating">
                                    <input type="text" className="form-control" id="subject" placeholder="Subject" />
                                    <label htmlFor="subject">Subject</label>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="form-floating">
                                    <textarea className="form-control" placeholder="Leave a message here" id="message" style={{ height: '100px' }}></textarea>
                                    <label htmlFor="message">Message</label>
                                </div>
                            </div>
                            <div className="col-12 text-center">
                                <button className="btn btn-primary w-100 py-3" type="submit">Submit Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}