import React, {useState} from 'react'
import { useTranslation } from "react-i18next";
import Project from "./Project/Project";

import amarokProject from "../../../img/amarokProject.png";
import asteroidsProject from "../../../img/asteroidsProject.png";
import billingProject from "../../../img/billingProject.png";
import portfolioProject from "../../../img/oldPortfolio.png";
import tweenmaxProject from "../../../img/tweenmaxProject.png";
import mockupProject from "../../../img/mocupsProject.png";
import discordProject from "../../../img/discordProject.png";
import memoProject from "../../../img/memoProject.png";
import hangingProject from "../../../img/hangingProject.png";

const allProjects = [
    <Project
        image={billingProject}
        name="Billing app"
        key="Billing app"
        description="Billing description"
        stack={["React","Bootstrap","Redux"]}
        tags={["Favorites", "React"]}
        siteLink={"https://floating-atoll-06778.herokuapp.com/"}
        codeLink={"https://github.com/Billeniarsi/rejestracja-czasu-pracy"}
    />,
    <Project
        image={amarokProject}
        name="Amarok page"
        key="Amarok page"
        description="Amarok description"
        stack={["Sass","jQuery","RWD"]}
        tags={["Favorites","RWD"]}
        siteLink={"https://marcinparda.github.io/AmarokPage/"}
        codeLink={"https://github.com/MarcinParda/AmarokPage"}
    />,
    <Project
        image={asteroidsProject}
        name="Asteroid game"
        key="Asteroid game"
        description="Asteroid description"
        stack={["Javascript","Canvas"]}
        tags={["Favorites", "Javascript"]}
        siteLink={"https://marcinparda.github.io/Frontend-Projects/JS/projects/asteroids-game/index.html"}
        codeLink={"https://github.com/MarcinParda/Frontend-Projects/tree/master/JS/projects/asteroids-game"}
    />,
    <Project
        image={portfolioProject}
        name="Old portfolio"
        key="Old portfolio"
        description="Old portfolio description"
        stack={["React","Sass","BEM"]}
        tags={["React","RWD"]}
        siteLink={"https://marcinparda.github.io/portfolio-2020/"}
        codeLink={"https://github.com/MarcinParda/portfolio-2020"}
    />,
    <Project
        image={hangingProject}
        name="Hangman game"
        key="Hangman game"
        description="Hangman game description"
        stack={["Javascript"]}
        tags={["Javascript"]}
        siteLink={"https://marcinparda.github.io/Frontend-Projects/JS/projects/hangman/index.html"}
        codeLink={"https://github.com/MarcinParda/Frontend-Projects/tree/master/JS/projects/hangman"}
    />,
    <Project
        image={memoProject}
        name="Memo gwent game"
        key="Memo gwent game"
        description="Memo gwent description"
        stack={["Javascript"]}
        tags={["Javascript"]}
        siteLink={"https://marcinparda.github.io/Frontend-Projects/JS/projects/gwent-memory/index.html"}
        codeLink={"https://github.com/MarcinParda/Frontend-Projects/tree/master/JS/projects/gwent-memory"}
    />,
    <Project
        image={discordProject}
        name="Discord tailwind"
        key="Discord tailwind"
        description="Discord description"
        stack={["Tailwind","Firebase"]}
        tags={["Favorites", "Tailwind"]}
        siteLink={"https://discord-tailwind-19e4e.web.app/"}
        codeLink={"https://github.com/MarcinParda/tailwind-dashboard"}
    />,
    <Project
        image={tweenmaxProject}
        name="Tweenmax page"
        key="Tweenmax page"
        description="Tweenmax description"
        stack={["Tweenmax","CSS"]}
        tags={["Favorites", "Tweenmax"]}
        siteLink={"https://marcinparda.github.io/Frontend-Projects/JS/projects/photo-album-landing-page/index.html"}
        codeLink={"https://github.com/MarcinParda/Frontend-Projects/tree/master/JS/projects/photo-album-landing-page"}
    />,
    <Project
        image={mockupProject}
        name="Project mockups"
        key="Project mockups"
        description="Mockups description"
        stack={["Miro"]}
        tags={["Favorites", "Mockups"]}
        siteLink={"https://miro.com/app/board/o9J_kuO7wMY=/?moveToWidget=3074457347509396995&cot=5"}
    />
];

const allTags = allProjects.map(project => project.props.tags).reduce((acc, currentValue) => {
    return acc.concat(currentValue);
}, []).filter((value, index, array) => array.indexOf(value) === index);

const ProjectsSection = ({projectRef}) => {

    const [selectedTechnology, setSelectedTechnology] = useState("Favorites");

    const { t } = useTranslation();

  return (
      <section ref={projectRef} className="section section__projects section--under-running-man mt-20">
        <header className="text-center">
          <h1>{t("My projects")}</h1>
        </header>
        <nav className="mt-4 text-center">
            {allTags.map(technology =>
                <button
                    key={technology}
                    className={`cursor-pointer button button__small button__radio ml-1 mr-1 ${ selectedTechnology === technology ? 'button__radio--selected' : ''}`}
                    onClick={() => setSelectedTechnology(technology)}
                >
                    {technology}
                </button>
            )}
        </nav>
        <article>
          <div className="projects mt-6">
              {selectedTechnology === "All"
                  ? allProjects
                  : allProjects.filter(project => project.props.tags.includes(selectedTechnology))
              }
          </div>
        </article>
      </section>
  );
}

export default ProjectsSection;
