import "./App.css"
import Download from "./Componrents/Download/Download.jsx"
import Faq from "./Componrents/FAQ/Faq.jsx"
import Features from "./Componrents/Features/Features.jsx"
import Footer from "./Componrents/Footer/Footer.jsx"
import Header from "./Componrents/Header/Header.jsx"
import Home from "./Componrents/Home/Home.jsx"
import Testimonial from "./Componrents/Testiminial/Testimonial.jsx"
import { BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Header/>
      <div id="home">
      <Home/>
      </div>
      <div id="fea">
      <Features/>
      </div>
      <div id="test">
      <Testimonial/>
      </div>
      <div id="faq">
      <Faq/>
      </div>
      <div id="down">
      <Download/>
      </div>
      <Footer/>
    </Router>
  )
}

export default App