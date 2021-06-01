import React from 'react'
import { useTranslation } from "react-i18next";
import Project from "./Project/Project";

import amarokProject from "../../../img/amarokProject.png";
import asteroidsProject from "../../../img/asteroidsProject.png";
import billingProject from "../../../img/billingProject.png";
import portfolioProject from "../../../img/oldPortfolio.png";
import tweenmaxProject from "../../../img/tweenmaxProject.png";
import mockupProject from "../../../img/mocupsProject.png";
import todoProject from "../../../img/todoProject.png";
import memoProject from "../../../img/memoProject.png";
import hangingProject from "../../../img/hangingProject.png";

const ProjectsSection = ({projectRef}) => {

  const { t } = useTranslation();

  return (
      <section ref={projectRef} className="section section__projects section--under-running-man mt-20">
        <header className="text-center">
          <h1>{t("My projects")}</h1>
        </header>
        <article>
          <div className="projects mt-6">
              <Project
                  image={billingProject}
                  name="Billing app"
                  description="Billing description"
                  stack="React/Bootstrap/Redux"
                  siteLink={"https://floating-atoll-06778.herokuapp.com/"}
                  codeLink={"https://github.com/Billeniarsi/rejestracja-czasu-pracy"}
              />
              <Project
                  image={amarokProject}
                  name="Amarok page"
                  description="Amarok description"
                  stack="Sass/jQuery/RWD"
                  siteLink={"https://marcinparda.github.io/AmarokPage/"}
                  codeLink={"https://github.com/MarcinParda/AmarokPage"}
              />
              <Project
                  image={tweenmaxProject}
                  name="Tweenmax page"
                  description="Tweenmax description"
                  stack="Tweenmax/CSS"
                  siteLink={"https://marcinparda.github.io/Frontend-Projects/JS/projects/photo-album-landing-page/index.html"}
                  codeLink={"https://github.com/MarcinParda/Frontend-Projects/tree/master/JS/projects/photo-album-landing-page"}
              />
              <Project
                  image={asteroidsProject}
                  name="Asteroid game"
                  description="Asteroid description"
                  stack="Javascript/canvas"
                  siteLink={"https://marcinparda.github.io/Frontend-Projects/JS/projects/asteroids-game/index.html"}
                  codeLink={"https://github.com/MarcinParda/Frontend-Projects/tree/master/JS/projects/asteroids-game"}
              />
              <Project
                  image={portfolioProject}
                  name="Old portfolio"
                  description="Old portfolio description"
                  stack="React/Sass/BEM"
                  siteLink={"https://marcinparda.github.io/portfolio-2020/"}
                  codeLink={"https://github.com/MarcinParda/portfolio-2020"}
              />
              <Project
                  image={hangingProject}
                  name="Hangman game"
                  description="Hangman game description"
                  stack="Javascript"
                  siteLink={"https://marcinparda.github.io/Frontend-Projects/JS/projects/hangman/index.html"}
                  codeLink={"https://github.com/MarcinParda/Frontend-Projects/tree/master/JS/projects/hangman"}
              />
              <Project
                  image={memoProject}
                  name="Memo gwent game"
                  description="Memo gwent description"
                  stack="Javascript"
                  siteLink={"https://marcinparda.github.io/Frontend-Projects/JS/projects/gwent-memory/index.html"}
                  codeLink={"https://github.com/MarcinParda/Frontend-Projects/tree/master/JS/projects/gwent-memory"}
              />
              <Project
                  image={todoProject}
                  name="Todo app"
                  description="Todo description"
                  stack="Javascript"
                  siteLink={"https://marcinparda.github.io/to-do-list/"}
                  codeLink={"https://github.com/MarcinParda/to-do-list"}
              />
              <Project
                  image={mockupProject}
                  name="Project mockups"
                  description="Mockups description"
                  stack="Miro"
                  siteLink={"https://miro.com/app/board/o9J_kuO7wMY=/?moveToWidget=3074457347509396995&cot=5"}
              />
          </div>
        </article>
      </section>
  );
}

export default ProjectsSection;
