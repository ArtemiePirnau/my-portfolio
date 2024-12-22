import emailJs from 'emailjs-com';
import gmail from './gmail.png';
import call from './call.png';
import { useState } from 'react';

const Contacts = () => {
   const [nameInput, setNameInput] = useState('');
   const [emailInput, setEmailInput] = useState('');
   const [textarea, setTextarea] = useState('');

   const isValidEmail = (email: string) => {
      return /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
   };

   const sendEmail = (e: any) => {
      e.preventDefault();
      if (!isValidEmail(emailInput)) {
         return;
      } else {
         emailJs.sendForm('service_nzkph6l', 'template_x0vs1kf', e.target, 'xgijVq2r87h4rs0Vu');
         setNameInput('');
         setEmailInput('');
         setTextarea('');
      }
   };
   return (
      <section className="contacts">
         <div className="container">
            <div className="contacts__inner">
               <div className="contacts__box">
                  <h3 className="contacts__title">HAVE SOME QUESTIONS ?</h3>
                  <p className="contacts__text">
                     If you have questions, proposals, opinions, or simply want to discuss. Contact
                     me! Do not be shy
                  </p>
                  <ul className="contacts__list">
                     <li className="contacts__item">
                        <img className="contacts__item-img" src={call} alt="call me" />
                        <p className="contacts__item-label">
                           <span>Call me!</span>
                           <a className="contacts__item-link" href="tel:062180377">
                              062180377
                           </a>
                        </p>
                     </li>
                     <li className="contacts__item">
                        <img className="contacts__item-img" src={gmail} alt="gmail" />
                        <p className="contacts__item-label">
                           <span>Email</span>
                           <a className="contacts__item-link" href="mailto:artemiepirnau@gmail.com">
                              artemiepirnau@gmail.com
                           </a>
                        </p>
                     </li>
                  </ul>
               </div>
               <form className="contacts__form" onSubmit={sendEmail}>
                  <div className="contacts__form-inputs">
                     <input
                        className="contacts__input contacts__email"
                        type="text"
                        name="name"
                        placeholder="Name"
                        value={nameInput}
                        onChange={(e) => setNameInput(e.target.value)}
                     />
                     <input
                        className="contacts__input contacts__email"
                        type="text"
                        name="user_email"
                        placeholder="Email"
                        value={emailInput}
                        onChange={(e) => setEmailInput(e.target.value)}
                     />
                  </div>
                  <textarea
                     className="contacts__form-area"
                     name="area"
                     placeholder="Message"
                     value={textarea}
                     onChange={(e) => setTextarea(e.target.value)}
                  ></textarea>
                  <button className="contacts__btn" type="submit">
                     Submit
                  </button>
               </form>
            </div>
         </div>
      </section>
   );
};
export default Contacts;
