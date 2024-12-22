import Header from '../Header/Header';
import About from '../About/About';
import Contacts from '../Contacts/Contacts';
import MySkills from '../MySkills/MySkills';
import Portfolio from '../Portfolio/Portfolio';
import Footer from '../Footer/Footer';

import '../../style/style.scss';

const App = () => {
   return (
      <div className="app">
         <Header />
         <About />
         <MySkills />
         <Portfolio />
         <Contacts />
         <Footer />
      </div>
   );
};
export default App;
