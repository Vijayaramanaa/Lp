import "./features.scss";
import notify from "../../assets/images/notify.png";
import hphone2 from "../../assets/images/hphone2.png";
import spring from "../../assets/images/spring.png";

function SecTwo() {
  return (
    <div className='STwoContainer'>
    <div className="Rs">
        <div className="Rhead">
            <h2>ADVANTAGES</h2>
            <h1>WhyChooseUifry?</h1>
        </div>
        <div className="cont">
            <div className="divid">
                <img src={notify}/>
            <h1>Clever Notifications</h1>
            </div>
            <p>Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.</p>
        </div>
    </div>
    <div className="Ls">
        <img className="ph1" src={hphone2}/>
        <img src={spring} className="spring"/>
        <div className="gradi"/>
    </div>
</div>
  )
}

export default SecTwo;