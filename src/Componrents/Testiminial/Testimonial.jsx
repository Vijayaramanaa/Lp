import "./test.scss";
import gp1 from "../../assets/images/gp1.png";
import gp2 from "../../assets/images/gp2.png";
import spring from "../../assets/images/spring.png";

function Testimonial() {
  return (
    <div className='Testcon'>
        <div className='up'>

            <h2>
                TESTIMONIAL
            </h2>
            <h1>
            WhatOurUsers <br/>SayAboutUs?
            </h1>

        </div>
        <div className='mid'>
            <div className='left'>
                <img className="gp1" src={gp1}/>
                <img className="spring" src={spring}/>
                <div className="gradu"/>
            </div>
            <div className='right'>
                <h1>
                TheBestFinancialAccounting <br/>AppEver!
                </h1>
                <p>
                “Arcu at dictum sapien, mollis. Vulputate sit id accumsan, ultricies. In ultrices malesuada elit mauris etiam odio. Duis tristique lacus, et blandit viverra nisl velit. Sed mattis rhoncus, diam suspendisse sit nunc, gravida eu. Lectus eget eget ac dolor neque lorem sapien, suspendisse aliquam.”
                </p>
                <img src={gp2}/>
                <h2>Nick Jonas</h2>
            </div>
        </div>
    </div>
  )
}

export default Testimonial