import fire from "../../assets/images/fire.png";
import "./styleH.scss";
import { HashLink } from "react-router-hash-link";

function Header() {
  return (
    <div className="header">
        <div className="Lside">
            <div className="logo">
                <img src={fire} alt="logo"/>
                <h1>uifry <span>TM</span></h1>
            </div>
            <div className="Nav">
                <ul>
                <li><HashLink smooth to={"#home"}>Home</HashLink></li>
                <li><HashLink smooth to={"#faq"}>About Us</HashLink></li>
                <li><HashLink smooth to={"#test"}>Pricing</HashLink></li>
                <li><HashLink smooth to={"#fea"}>Features</HashLink></li>
                </ul>
            </div>
        </div>
        <div className="Rside">
            <button >
             <HashLink smooth to={"#down"}>Download</HashLink>   
            </button>
        </div>
    </div>
  )
}

export default Header