import React from 'react'
import { useTranslation } from "react-i18next";
import Project from "./Project/Project";

import amarokProject from "../../../img/amarokProject.png";
import asteroidsProject from "../../../img/asteroidsProject.png";
import billingProject from "../../../img/billingProject.png";
import portfolioProject from "../../../img/oldPortfolio.png";
import tweenmaxProject from "../../../img/tweenmaxProject.png";
import mockupProject from "../../../img/mocupsProject.png";

const ProjectsSection = () => {

  const { t } = useTranslation();

  return (
      <section className="section section__projects section--under-running-man mt-20">
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
                  siteLink={"https://marcinparda.github.io/AmarokPage/"}
                  codeLink={"https://github.com/MarcinParda/AmarokPage"}
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
                  image={asteroidsProject}
                  name="Asteroid game"
                  description="Asteroid description"
                  stack="Javasript/canvas"
                  siteLink={"https://marcinparda.github.io/AmarokPage/"}
                  codeLink={"https://github.com/MarcinParda/AmarokPage"}
              />
              <Project
                  image={asteroidsProject}
                  name="Asteroid game"
                  description="Asteroid description"
                  stack="Javasript/canvas"
                  siteLink={"https://marcinparda.github.io/AmarokPage/"}
                  codeLink={"https://github.com/MarcinParda/AmarokPage"}
              />
              <Project
                  image={tweenmaxProject}
                  name="Asteroid game"
                  description="Asteroid description"
                  stack="Javasript/canvas"
                  siteLink={"https://marcinparda.github.io/AmarokPage/"}
                  codeLink={"https://github.com/MarcinParda/AmarokPage"}
              />
              <Project
                  image={portfolioProject}
                  name="Asteroid game"
                  description="Asteroid description"
                  stack="Javasript/canvas"
                  siteLink={"https://marcinparda.github.io/AmarokPage/"}
                  codeLink={"https://github.com/MarcinParda/AmarokPage"}
              />
              <Project
                  image={asteroidsProject}
                  name="Asteroid game"
                  description="Asteroid description"
                  stack="Javasript/canvas"
                  siteLink={"https://marcinparda.github.io/AmarokPage/"}
                  codeLink={"https://github.com/MarcinParda/AmarokPage"}
              />
              <Project
                  image={mockupProject}
                  name="Asteroid game"
                  description="Asteroid description"
                  stack="Javasript/canvas"
                  siteLink={"https://marcinparda.github.io/AmarokPage/"}
                  codeLink={"https://github.com/MarcinParda/AmarokPage"}
              />
              <Project
                  image={asteroidsProject}
                  name="Asteroid game"
                  description="Asteroid description"
                  stack="Javasript/canvas"
                  siteLink={"https://marcinparda.github.io/AmarokPage/"}
                  codeLink={"https://github.com/MarcinParda/AmarokPage"}
              />
          </div>
        </article>
      </section>
  );
}

export default ProjectsSection;
