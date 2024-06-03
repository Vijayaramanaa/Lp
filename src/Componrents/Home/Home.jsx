import "./home.scss";
import hometape from "../../assets/images/hometape.png";
import hphone1 from "../../assets/images/hphone1.png";
import hphone2 from "../../assets/images/hphone2.png";
import spring from "../../assets/images/spring.png";
import gradient from "../../assets/images/gradient.png";
import btnpic from "../../assets/images/btnpic.png";
import videopic from "../../assets/images/videopic.png";

function Home() {
  return (
    <div className='homecontainer'>
        <div className='Lcontainer'>
            <div className='Ltext'>
            <div >
                <h1>MakeTheBest <br/>FinancialDecisions</h1>
                <div className="grad"/>
            </div>
            <div>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet <br/> faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
            </div>
            <div className="btnclass">
                <button className="btn1">
                    <img src={btnpic} alt="btn"/>
                </button>
                <button className="btn2">
                   <img src={videopic} alt="img"/> Watch Video
                </button>
            </div>
            </div>
            <div className='Limage'>
                <img src={hometape} alt='tape'/>
            </div>
        </div>
        <div className='Rcontainer'>
            <div>
                <img className="ph1" src={hphone1} alt='phone'/>
            </div>
            <div><img className="ph2" src={hphone2} alt='phone'/></div>
            <div><img className="ph3"src={hphone1} alt='phone'/></div>
            <div><img className="spring" src={spring} alt='spring'/></div>
            <div><img className="grd" src={gradient} alt='gradient'/></div>
        </div>
    </div>
  )
}

export default Home