
import About from './components/about/About'
import Callback from './components/callback/Callback'
import Carousel from './components/carousel/Carousel'
import Facts from './components/facts/Facts'
import Features from './components/features/Features'
import Navbar from './components/navbar/Navbar'
import Projects from './components/projects/Projects'
import Service from './components/service/Service'
import Testimonial from './components/testimonial/Testimonial'
import TopBar from './components/topbar/TopBar'
import Team from './components/team/Team'
import Footer from './components/footer/Footer'
import BackToTop from './components/backtotop/BackToTop'
import SIP from './components/calculators/sip/SIP'
function App() {
  

  return (
    <>
      <div className="container-fluid fixed-top px-0 wow fadeIn" 
      data-wow-delay="0.1s" 
      style={{ visibility : "visible", animationDelay : "0.1s",  animationName: "fadeIn",  top: "0px"}}>
    

        <TopBar />
        <Navbar />
      </div>

     <div className="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s" style={{ visibility: "visible",  animationDelay: "0.1s", animationName: "fadeIn" }}>
        <Carousel />
        <About />
     </div>
     <SIP />
     <Facts />
     <Features />
     <Service />
     <Callback />
     <Projects />
     <Team />
     <Testimonial />
     <Footer />
     <BackToTop />
    </>
  )
}

export default App
