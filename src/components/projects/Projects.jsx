import { useEffect, useRef } from 'react'
import Service1 from '../../assets/service-1.jpg'
import Service2 from '../../assets/service-2.jpg'
import Service3 from '../../assets/service-3.jpg'
import Service4 from '../../assets/service-4.jpg'
import './Projects.css'

const projects = [
    { title: 'Cash Investment', img: Service2 },
    { title: 'Financial Consultancy', img: Service3 },
    { title: 'Business Loans', img: Service4 },
    { title: 'Financial Planning', img: Service1 },
]

export default function Projects() {
    const carouselRef = useRef(null)

    useEffect(() => {
        // Initialize Owl Carousel if jQuery + plugin are present on window
        const $ = window.$
        const $carousel = $ && carouselRef.current ? $(carouselRef.current) : null
        if ($ && $carousel && $.fn && $.fn.owlCarousel) {
            // If already initialized, destroy first
            if ($carousel.data('owl.carousel')) {
                $carousel.trigger('destroy.owl.carousel')
            }

            $carousel.owlCarousel({
                autoplay: true,
                smartSpeed: 1000,
                margin: 25,
                loop: true,
                center: true,
                dots: false,
                nav: true,
                navText: [
                    '<i class="bi bi-chevron-left"></i>',
                    '<i class="bi bi-chevron-right"></i>'
                ],
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
                    <p className="d-inline-block border rounded text-primary fw-semi-bold py-1 px-3">Our Projects</p>
                    <h1 className="display-5 mb-5">We Have Completed Latest Projects</h1>
                </div>

                <div ref={carouselRef} className="owl-carousel project-carousel wow fadeInUp" data-wow-delay="0.3s" style={{ visibility: 'visible', animationDelay: '0.3s', animationName: 'fadeInUp' }}>
                    {projects.map((p, i) => (
                        <div key={i} className="project-item pe-5 pb-5">
                            <div className="project-img mb-3">
                                <img className="img-fluid rounded" src={p.img} alt={p.title} />
                                <a href=""><i className="fa fa-link fa-3x text-primary"></i></a>
                            </div>
                            <div className="project-title">
                                <h4 className="mb-0">{p.title}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}