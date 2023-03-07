/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/foto-proyectos.jpg";

const imageAltText = "desktop with laptop and hands of a person";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Blog Post: Mejora tu productividad con las nuevas soluciones de Microsoft",
    description:
      "Colaboración en el blog de la empresa Sogeti, donde hablo de Teams Premium, Viva Sales y Bing potenciado con ChatGPT.",
    url: "https://itblogsogeti.com/2023/02/23/nuevas-soluciones-microsoft/",
  },
  {
    title: "Video en YouTube sobre las novedades de Microsoft Ignite 2022",
    description:
      "Entrevista en el YouTube de la empresa Sogeti, donde hablo de las novedades de Microsoft Ignite 2022 sobre todo en relación con las Business Apps de Microsoft.",
    url: "https://www.youtube.com/watch?v=B6FKoo9rz08&t=739s&ab_channel=SOGETISPAIN",
  },
  {
    title: "Microsoft Learn Student Ambassador",
    description:
      "Formo parte de un programa de Microsoft para estudiantes universitarios, donde se aprende sobre las tecnologías de Microsoft y se comparte el conocimiento con otros estudiantes.",
    url: "https://studentambassadors.microsoft.com/studentambassadors/profile/956e07fe-7a5f-45c2-a7ef-1f2dddc56897?wt.mc_id=studentamb_81066",
  },
  {
    title: "Entrevista a Barack Obama en la Casa Blanca",
    description:
      "Fui invitado a la Casa Blanca para una entrevista con Barack Obama, donde hablamos sobre la importancia de la educación y la tecnología.",
    url: "https://www.youtube.com/watch?v=p7YXXieghto&ab_channel=Torwik",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Mis logros y contribuciones</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
