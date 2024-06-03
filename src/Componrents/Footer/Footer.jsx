import "./footer.scss";
import fire from "../../assets/images/fire.png";
import mail from "../../assets/images/mail.png";
import call from "../../assets/images/call.png";

function Footer() {
    const yr = new Date().getFullYear()
  return (
    <div className='footercont'>
        <div className='Fup'>
            <div className="upone">
                <div className="lop">
                <img src={fire} alt="logo"/>
                <h1>uifry <span>TM</span></h1>
                </div>
                <div className="lopp">
                <img src={mail} alt="logo"/>
                <h1>vijay2020@gmail.com</h1>
                </div>
                <div className="lopy">
                <img src={call} alt="logo"/>
                <h1>6380302990</h1>
                </div>
            </div>
            <div className="uptwo">
                <div>
                <h1>Links</h1>
                </div>
                <div>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Bookings</li>
                    <li>Blog</li>
                </ul>
                </div>
            </div>
            <div className="upthree">
                <div>
                <h1>Legal</h1>
                </div>
                <div>
                <ul>
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>Cookie Policy</li>
                </ul>
                </div>
            </div>
            <div className="upfour">
                <h1>Product</h1>
                <ul>
                <li>Take Tour</li>
                <li>Live Chat</li>
                <li>Reviews</li>
                </ul>
            </div>
            <div className="upfive">
                <h1>Newsletter</h1>
                <h2>StayUpToDate</h2>
                <div>
                    <button className="btn1">
                        Youremail
                    </button>
                    <button className="btn2">
                        Subscribe
                    </button>
                </div>
            </div>

        </div>
        <div className='Fdown'>
            <p>Copyright {yr} Uifry.com All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer