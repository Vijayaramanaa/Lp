import "./features.scss";
import cube from "../../assets/images/cube-04.png";
import icon from "../../assets/images/Icon.png";
import star from "../../assets/images/star-05.png";
import hphone1 from "../../assets/images/hphone1.png";
import spring from "../../assets/images/spring.png";

function SecOne() {
  return (
    <div className='SoneContainer'>
    <div className="Ls">
        <img className="ph1" src={hphone1}/>
        <img src={spring} className="spring"/>
        <div className="gradi"/>
    </div>
    <div className="Rs">
        <div className="Rhead">
            <h2>FEATURES</h2>
            <h1>UifryPremium</h1>
        </div>
        <div className="cont">
            <div className="divid">
                <img src={star}/>
            <h1>Budgeting Intervals</h1>
            </div>
            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet <br/> faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
        <div className="cont">
            <div className="divid">
                <img src={icon}/>
                <h1>Budgeting Intervals</h1>
            </div>
                <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet <br/> faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
        <div className="cont">
            <div className="divid">
            <img src={cube}/>
            <h1>Budgeting Intervals</h1>
            </div>
            <p>Cum et convallis risus placerat aliquam, nunc. Scelerisque aliquet <br/> faucibus tincidunt eu adipiscing sociis arcu lorem porttitor.</p>
        </div>
        <div className="gradu"/>
    </div>
</div>
  )
}

export default SecOne