import mixitup from 'mixitup';
//import { useSelector } from 'react-redux';
import { useAppSelector } from '../../hooks/hooks';
import { useEffect } from 'react';
import PortfolioItem from '../PortfolioItem/PortfolioItem.jsx';

const Portfolio = () => {
   const projectsSites = useAppSelector((state) => state.data.projectsHTML);
   const projectsJs = useAppSelector((state) => state.data.projectsJS);
   const projectsReact = useAppSelector((state) => state.data.projectsReact);

   useEffect(() => {
      mixitup('.portfolio__items-wrapper', {
         selectors: {
            target: '.websites, .apps, .react',
         },
         animation: {
            duration: 800,
         },
      });
   }, []);

   return (
      <section className="portfolio text">
         <div className="container">
            <h3 className="portfolio__title section-title">Portfolio</h3>
            <div className="portfolio__inner">
               <p className="portfolio__text section-text">Some of my works</p>
               <div className="portfolio__tabs">
                  <button
                     className="portfolio__tab text portfolio__tab-websites"
                     data-filter=".websites"
                  >
                     HTML/CSS
                     <span></span>
                  </button>
                  <button className="portfolio__tab text" data-filter=".apps">
                     JavaScript
                     <span></span>
                  </button>
                  <button className="portfolio__tab text" data-filter=".react">
                     React
                     <span></span>
                  </button>
               </div>
               <div className="portfolio__items-wrapper">
                  <div className="portfolio__items mix websites">
                     {projectsSites.map((item) => {
                        return <PortfolioItem id={item.id} item={item} />;
                     })}
                  </div>
                  <div className="portfolio__items mix apps">
                     {projectsJs.map((item) => {
                        return <PortfolioItem id={item.id} item={item} />;
                     })}
                  </div>
                  <div className="portfolio__items mix react">
                     {projectsReact.map((item) => {
                        return <PortfolioItem id={item.id} item={item} />;
                     })}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};
export default Portfolio;
