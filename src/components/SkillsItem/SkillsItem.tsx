const SkillsItem = ({
   text,
   num,
   width,
   color,
}: {
   text: string;
   num: string;
   width: string;
   color: string;
}) => {
   return (
      <li className="skills__item">
         <div className="skills__item-content">
            <p className="skills__item-text">{text}</p>
            <p className="skills__item-num">{num}</p>
         </div>
         <div
            className="skills__item-line"
            style={{ width: `${width}%`, backgroundColor: `${color}` }}
         ></div>
      </li>
   );
};
export default SkillsItem;
