import logo from '../../../public/logo.png';
const Footer = () => {
   return (
      <footer className="footer text">
         <div className="container">
            <div className="footer__inner">
               <a className="footer__logo" href="/">
                  <img className="footer__logo-img" src={logo} alt="logo" />
               </a>
               <nav className="footer__menu">
                  <ul className="footer__list">
                     <li className="footer__item">
                        <a className="footer__link" href="">
                           Linkedin
                        </a>
                     </li>
                     <li className="footer__item">
                        <a className="footer__link" href="https://github.com/ArtemiePirnau">
                           Github
                        </a>
                     </li>
                     <li className="footer__item">
                        <a className="footer__link" href="https://www.instagram.com/artemie.js/">
                           Instagram
                        </a>
                     </li>
                  </ul>
               </nav>
               <p className="footer__copyright">Pîrnău Artemie 2022</p>
            </div>
         </div>
      </footer>
   );
};
export default Footer;
