import { gsap } from 'gsap';
import { useState } from 'react';
import Type from './Type.jsx';
import icon from '../../../public/logo.png';

import '../../style/_global.scss';

const Header = () => {
   let [isActive, setIsActive] = useState(false);
   const toggleClass = () => {
      setIsActive(!isActive);
      if (!isActive) {
         gsap.to('.about', 1, { clipPath: 'circle(2500px at 100% -10%)' });
         gsap.to('body', 1, { overflowY: 'hidden' });
      } else {
         gsap.to('body', 1, { overflowY: 'scroll' });
         gsap.to('.about', 1, { clipPath: 'circle(50px at 100% -10%)' });
      }
   };
   return (
      <header className="header">
         <div className="header__top">
            <div className="container">
               <div className="header__top-inner">
                  <a className="logo" href="/">
                     <img className="logo__img" src={icon} alt="logo" />
                  </a>
                  <div className="header__top-info">
                     <div
                        className={isActive ? 'header__burger active' : 'header__burger'}
                        onClick={toggleClass}
                     >
                        <span className="header__burger-line"></span>
                     </div>
                  </div>
               </div>
            </div>
         </div>
         <div className="header__content">
            <div className="container">
               <div className="header__content-inner">
                  <div className="header__about">
                     <Type />
                     <div className="header__about-buttons">
                        <a className="header__about-btn header__resume" href="#">
                           View resume
                        </a>
                     </div>
                  </div>
                  <ul className="header__social">
                     <li className="header__social-item">
                        <a
                           className="header__social-link"
                           href="https://github.com/ArtemiePirnau"
                           target="_blank"
                        >
                           <svg
                              fill="#b0b2c3"
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="60"
                              viewBox="0 0 438.549 438.549"
                           >
                              <path d="M409.132 114.573c-19.608-33.596-46.205-60.194-79.798-79.8C295.736 15.166 259.057 5.365 219.27 5.365c-39.78 0-76.47 9.804-110.062 29.408-33.596 19.605-60.192 46.204-79.8 79.8C9.803 148.168 0 184.853 0 224.63c0 47.78 13.94 90.745 41.827 128.906 27.884 38.164 63.906 64.572 108.063 79.227 5.14.954 8.945.283 11.42-1.996 2.474-2.282 3.71-5.14 3.71-8.562 0-.57-.05-5.708-.144-15.417-.098-9.71-.144-18.18-.144-25.406l-6.567 1.136c-4.187.767-9.47 1.092-15.846 1-6.375-.09-12.992-.757-19.843-2-6.854-1.23-13.23-4.085-19.13-8.558-5.898-4.473-10.085-10.328-12.56-17.556l-2.855-6.57c-1.903-4.374-4.9-9.233-8.992-14.56-4.093-5.33-8.232-8.944-12.42-10.847l-1.998-1.43c-1.332-.952-2.568-2.1-3.71-3.43-1.143-1.33-1.998-2.663-2.57-3.997-.57-1.335-.097-2.43 1.428-3.29 1.525-.858 4.28-1.275 8.28-1.275l5.708.853c3.807.763 8.516 3.042 14.133 6.85 5.615 3.807 10.23 8.755 13.847 14.843 4.38 7.807 9.657 13.755 15.846 17.848 6.184 4.093 12.42 6.136 18.7 6.136 6.28 0 11.703-.476 16.273-1.423 4.565-.95 8.848-2.382 12.847-4.284 1.713-12.758 6.377-22.56 13.988-29.41-10.847-1.14-20.6-2.857-29.263-5.14-8.658-2.286-17.605-5.996-26.835-11.14-9.235-5.137-16.896-11.516-22.985-19.126-6.09-7.614-11.088-17.61-14.987-29.98-3.9-12.373-5.852-26.647-5.852-42.825 0-23.035 7.52-42.637 22.557-58.817-7.044-17.318-6.38-36.732 1.997-58.24 5.52-1.715 13.706-.428 24.554 3.853 10.85 4.284 18.794 7.953 23.84 10.995 5.046 3.04 9.09 5.618 12.135 7.708 17.706-4.947 35.977-7.42 54.82-7.42s37.116 2.473 54.822 7.42l10.85-6.85c7.418-4.57 16.18-8.757 26.26-12.564 10.09-3.806 17.803-4.854 23.135-3.14 8.562 21.51 9.325 40.923 2.28 58.24 15.035 16.18 22.558 35.788 22.558 58.818 0 16.178-1.958 30.497-5.853 42.966-3.9 12.47-8.94 22.457-15.125 29.98-6.19 7.52-13.9 13.85-23.13 18.985-9.233 5.14-18.183 8.85-26.84 11.135-8.663 2.286-18.416 4.004-29.264 5.146 9.894 8.563 14.842 22.078 14.842 40.54v60.237c0 3.422 1.19 6.28 3.572 8.562 2.38 2.278 6.136 2.95 11.276 1.994 44.163-14.653 80.185-41.062 108.068-79.226 27.88-38.16 41.826-81.126 41.826-128.906-.01-39.77-9.818-76.454-29.414-110.05z"></path>
                           </svg>
                        </a>
                     </li>
                     <li className="header__social-item">
                        <a
                           className="header__social-link"
                           href="https://www.instagram.com/artemie.js/"
                           target="_blank"
                        >
                           <svg
                              fill="#b0b2c3"
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="60"
                              viewBox="0 0 24 24"
                           >
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                           </svg>
                        </a>
                     </li>
                     <li className="header__social-item">
                        <a className="header__social-link" href="#" target="_blank">
                           <svg
                              fill="#b0b2c3"
                              xmlns="http://www.w3.org/2000/svg"
                              width="60"
                              height="60"
                              viewBox="0 0 430.117 430.117"
                           >
                              <path d="M430.117 261.543V420.56H337.93V272.193c0-37.27-13.335-62.707-46.704-62.707-25.473 0-40.632 17.142-47.3 33.724-2.433 5.928-3.06 14.18-3.06 22.477V420.56H148.65s1.242-251.285 0-277.32h92.21v39.31c-.187.293-.43.61-.606.895h.606v-.896c12.25-18.87 34.13-45.825 83.102-45.825 60.673 0 106.157 39.636 106.157 124.818zM52.183 9.558C20.635 9.558 0 30.25 0 57.463c0 26.62 20.038 47.94 50.96 47.94h.615c32.16 0 52.16-21.317 52.16-47.94-.607-27.212-20-47.905-51.552-47.905zM5.477 420.56H97.66V143.24H5.478v277.32z"></path>
                           </svg>
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </div>
      </header>
   );
};
export default Header;
