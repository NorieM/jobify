
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";
import { Logo } from "../components";
import { Link } from "react-router-dom";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> App
          </h1>
          <p>
            I'm baby celiac occupy mukbang salvia, drinking vinegar normcore
            DIY. Bicycle rights seitan vinyl cardigan. Gastropub selvage
            whatever, beard big mood knausgaard kombucha pork belly same bodega
            boys iPhone locavore pour-over. Prism pabst butcher, pug squid
            vibecession selfies
          </p>
          <Link to='/register' className="btn btn-hero">Login/Register</Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};



export default Landing;
