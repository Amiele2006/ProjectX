import Header from '../Header';
import Main from '../Main';
import Footer from '../Footer';
import '../../index.css';
// import { Link } from 'react-router-dom';
// // Images
// import Savearns from "../../assets/images/Logo-2.png";

function Home(){
    return(
        <div>
         <Header />
         <Main />
         <Footer />
         {/* <footer className="footer pb-6 xsm:w-full">
          <div className="flex gap-16 link-contain pt-8">
            <div className="ml-auto flex flex-col gap-3">
                <Link to="/" className="footer-links">Home</Link>
                <Link to="/about" className="footer-links">About</Link>
                <Link to="/contact" className="footer-links">Get in Touch</Link>
                <Link to="/project" className="footer-links">Project</Link>
                <a href="index.html" className="footer-links">How it works</a>
                <a href="index.html" className="footer-links">The process</a>
                <a href="index.html" className="footer-links">Faq</a>
                <a href="index.html" className="footer-links">Blog</a>
                <button className="footer-links">Back to top</button>
            </div>
            <div className="mr-6 flex flex-col gap-3">
            <a href="index.html" className="footer-links">X</a>
            <a href="index.html" className="footer-links">Facebook</a>
            <a href="index.html" className="footer-links">Linkedin</a>
            <a href="index.html" className="footer-links">Medium</a>
            </div>
          </div>

          <div className="pt-28 flex gap-3 items-start">
            <img src={ Savearns } alt="logo" className="pl-4"/> 
            <p className="logo-side pt-2">Project X</p>
          </div>

          <div className="flex pt-16 place-content-center pb-4 bottom-links">
          <p>Powered by Conspro Initiative <span className="lines">|</span></p>
          <p>© 2024 Savearns Enterprise <span className="lines">|</span></p>
          </div>

          <div className="flex place-content-center bottom-links">
          <p>Privacy Policy <span className="lines">|</span></p>
          <p>Terms and Conditions</p>
          </div>
       </footer> */}
        </div>
    )
}

export default Home;