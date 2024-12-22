const PortfolioItem = ({ id, item }: { id: number; item: any }) => {
   return (
      <a
         key={id}
         className="portfolio__item"
         target="_blank"
         href={item.link}
         style={{ backgroundImage: `url(${item.img})` }}
      ></a>
   );
};
export default PortfolioItem;
