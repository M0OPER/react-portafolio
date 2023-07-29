import reactBootstrapImage from "../../images/techs/react-bootstrap.png";

import reactImage from "../../images/techs/react.png";

import styledImage from "../../images/techs/styled-logo.png";

import cssImage from "../../images/techs/css.png";
import simpsonProject from "../../images/projects/simpson.jpeg";
import dynamicFormProject from "../../images/projects/dynamic.jpeg";

import rickMorty from "../../images/projects/rick-morty.jpeg";

export const projectsPortfolio = [
  {
    title: "Rick & Morty API",
    image: rickMorty,
    techs: [
      { name: "React", src: reactImage },
      { name: "CSS", src: cssImage },
    ],
    description:
      "Application created with React JS and CSS to make a request an external API of Rick & Morty.",
      repository: "https://github.com/M0OPER/rickandmorty",
      website: "https://main--melodic-kheer-284b53.netlify.app/", //ustedes deben colocar aquí el link del enlace público de netlify
  },
  {
    title: "Simpsons API",
    image: simpsonProject,
    techs: [
      { name: "React JS", src: reactImage },
      { name: "Styled Components", src: styledImage },
    ],
    description:
      "Application created with React JS and Styled Components to make a request an external API of Simpsons.",
    repository: "https://github.com/M0OPER/thesimpsons",
    website: "https://astounding-crisp-93f33c.netlify.app/", //ustedes deben colocar aquí el link del enlace público de netlify
  },
  {
    title: "Dynamic Form",
    image: dynamicFormProject,
    techs: [
      { name: "React JS", src: reactImage },
      { name: "React Bootstrap", src: reactBootstrapImage },
    ],
    description:
      "Application of a landing page created with React JS and React Bootstrap to make a form with dynamic fields.",
    repository: "https://github.com/M0OPER/react-dynamic-form",
    website: "https://64c4b99a23a9c344ba205d9a--ornate-pegasus-499abc.netlify.app/", //ustedes deben colocar aquí el link del enlace público de netlify
  },
];
