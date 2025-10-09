import './App.css'
import Carousel from './components/carousel/Carousel'
import Navbar from './components/navbar/Navbar'
import TopBar from './components/topbar/TopBar'

function App() {
  

  return (
    <>
      <div className="container-fluid fixed-top px-0 wow fadeIn" 
      data-wow-delay="0.1s" 
      style={{ visibility : "visible", animationDelay : "0.1s",  animationName: "fadeIn",  top: "-45px"}}>
        <TopBar />
        <Navbar />
        <Carousel />
      </div>
    </>
  )
}

export default App
