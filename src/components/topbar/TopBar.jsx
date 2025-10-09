export default function TopBar() {
    return (
        <div className="top-bar row gx-0 align-items-center d-none d-lg-flex">
            <div className="col-lg-6 px-5 text-start">
                <small><i className="fa fa-map-marker-alt text-primary me-2"></i>123 Street, Hubballi, India</small>
                <small className="ms-4"><i className="fa fa-clock text-primary me-2"></i>9.00 am - 9.00 pm</small>
            </div>
            <div className="col-lg-6 px-5 text-end">
                <small><i className="fa fa-envelope text-primary me-2"></i>info@example.com</small>
                <small className="ms-4"><i className="fa fa-phone-alt text-primary me-2"></i>+012 345 6789</small>
            </div>
        </div>
    )
}