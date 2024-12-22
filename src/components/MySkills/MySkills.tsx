import SkillsItem from '../SkillsItem/SkillsItem.jsx';
const MySkills = () => {
   return (
      <section className="skills text">
         <div className="container">
            <h1 className="skills__title section-title">My Skills</h1>
            <div className="skills__inner">
               <p className="skills__text section-text">
                  Writing cross-browser, semantic code; Adaptive layout; Practical experiences with
                  all technologies are written below.
               </p>
               <ul className="skills__list">
                  <SkillsItem text="HTML5" num="90%" width="90" color="#fa3800" />
                  <SkillsItem text="CSS3 / BEM" num="90%" width="90" color="#0f4aef" />
                  <SkillsItem text="SASS / SCSS" num="85%" width="85" color="#ce679a" />
                  <SkillsItem text="Git" num="70%" width="70" color="#f05030" />
                  <SkillsItem text="javascript (es6+)" num="85%" width="85" color="#f7e018" />
                  <SkillsItem text="jquery" num="80%" width="80" color="#0967ac" />
                  <SkillsItem text="photoshop" num="80%" width="80" color="#31a8ff" />
                  <SkillsItem text="figma" num="90%" width="90" color="#a259ff" />
                  <SkillsItem text="gulp" num="80%" width="80" color="#eb4a4b" />
                  <SkillsItem text="webpack" num="80%" width="80" color="#1c78c0" />
                  <SkillsItem text="react" num="85%" width="85" color="#61dbfb" />
                  <SkillsItem text="redux" num="80%" width="80" color="#7549bc" />
                  <SkillsItem text="TypeScript" num="85%" width="85" color="#3178c6" />
                  <SkillsItem text="Nextjs (beginner)" num="50%" width="50" color="#000000" />
               </ul>
            </div>
         </div>
      </section>
   );
};
export default MySkills;
