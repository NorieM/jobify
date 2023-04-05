import logo from '../assets/images/logo.svg';
import main from '../assets/images/main.svg'

const Landing = () => {
  return (
    <main>
      <nav>
        <img src={logo} alt="Jobify" className="logo" />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> App
          </h1>
          <p>
            I'm baby celiac occupy mukbang salvia, 
            drinking vinegar normcore DIY. Bicycle 
            rights seitan vinyl cardigan. Gastropub 
            selvage whatever, beard big mood knausgaard 
            kombucha pork belly same bodega boys iPhone 
            locavore pour-over. Prism pabst butcher, pug 
            squid vibecession selfies
          </p>
          <button className="btn btn-hero">
            Login/Register
          </button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </main>
  )
}

export default Landing

