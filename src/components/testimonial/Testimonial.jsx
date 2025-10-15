import { useEffect, useRef } from 'react'
import Test1 from '../../assets/testimonial-1.jpg'
import Test2 from '../../assets/testimonial-2.jpg'
import Test3 from '../../assets/testimonial-3.jpg'
import Test4 from '../../assets/testimonial-4.jpg'
import './Testimonial.css'

const testimonials = [
    { img: Test1, text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.' },
    { img: Test2, text: 'At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.' },
    { img: Test3, text: 'Dolores sed duo clita tempor justo dolor et stet lorem kasd labore dolore lorem ipsum.' },
    { img: Test4, text: 'At lorem lorem magna ut et, nonumy et labore et tempor diam tempor erat.' },
]

export default function Testimonial() {
    const carouselRef = useRef(null)

    useEffect(() => {
        const $ = window.$
        const $carousel = $ && carouselRef.current ? $(carouselRef.current) : null
        if ($ && $carousel && $.fn && $.fn.owlCarousel) {
            if ($carousel.data('owl.carousel')) {
                $carousel.trigger('destroy.owl.carousel')
            }

            $carousel.owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                margin: 24,
                loop: true,
                center: true,
                dots: true,
                nav: false,
                responsive: {
                    0: { items: 1 },
                    576: { items: 1 },
                    768: { items: 2 },
                    992: { items: 3 }
                }
            })
        }

        return () => {
            if ($ && $carousel && $.fn && $.fn.owlCarousel && $carousel.data('owl.carousel')) {
                $carousel.trigger('destroy.owl.carousel')
            }
        }
    }, [])

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s" style={{ maxWidth: '600px', visibility: 'visible', animationDelay: '0.1s', animationName: 'fadeInUp' }}>
                    <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Testimonial</p>
                    <h1 className="display-5 mb-5">What Our Clients Say!</h1>
                </div>

                <div ref={carouselRef} className="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                    {testimonials.map((t, i) => (
                        <div key={i} className="testimonial-item">
                            <div className="testimonial-text border rounded p-4 pt-5 mb-5">
                                <div className="btn-square bg-white border rounded-circle">
                                    <i className="fa fa-quote-right fa-2x text-primary"></i>
                                </div>
                                {t.text}
                            </div>
                            <img className="rounded-circle mb-3" src={t.img} alt="" />
                            <h4>Client Name</h4>
                            <span>Profession</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}