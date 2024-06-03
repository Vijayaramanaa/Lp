import "./features.scss";
import SecOne from './SecOne';
import SecTwo from "./SecTwo";
import SecThree from "./SecThree";


function Features() {
  return (
    <div>
        <section>
        <SecOne/>
        </section>
        <section>
        <SecTwo/>
        </section>
        <section>
          <SecThree/>
        </section>
    </div>
  )
}

export default Features
