import "./features.scss";
import star2 from "../../assets/images/star2.png";
import hphone1 from "../../assets/images/hphone1.png";
import spring from "../../assets/images/spring.png";

function SecThree() {
  return (
    <div className='STwoContainer'>
    <div className="Lss">
        <img className="ph1" src={hphone1}/>
        <img src={spring} className="spring"/>
        <div className="gradi"/>
    </div>
    <div className="Rs">
        <div className="cont">
            <div className="divid">
                <img src={star2}/>
            <h1>Fully Customizable</h1>
            </div>
            <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
        </div>
    </div>

</div>
  )
}

export default SecThree;