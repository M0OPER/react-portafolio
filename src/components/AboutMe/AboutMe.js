import React from "react";
import * as S from "./AboutMe.styles";
import logoGithub from "../../svg/github.svg";
import logoLinkeind from "../../svg/linkedin.svg";

const AboutMe = () => {
    const socialNetworks =[
        {
            name:"Github",
            link:"https://github.com/M0OPER?tab=repositories",
            logo:logoGithub,
        },
        {
            name:"Linkedind",
            link:"https://www.linkedin.com/in/edwin-montes-meza-49b71222b/",
            logo:logoLinkeind,
        },
    ];

    return (
        <S.ContainerAboutMe id="about-me">
            <S.ContainerFlex>
                <S.ContainerText>
                    <S.Title>
                        <p>👋🏼 Hola, Soy</p>
                        <p>Edwin Montes Meza</p>
                        <p>Backend Developer</p>
                    </S.Title>
                    <S.DescriptionText>
                    Ing. de Sistemas, 
                    con 3 años de experiencia en el sector productivo.
                    </S.DescriptionText>
                    <S.ContainerIcons>
                    {socialNetworks.map((network, index)=>(
                        <a
                            key={index}
                            href={network.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <img src={network.logo} alt={network.name}/>
                        </a>
                    ))}
                </S.ContainerIcons>
                </S.ContainerText>
            </S.ContainerFlex>
        </S.ContainerAboutMe>
    );
};
export default AboutMe;