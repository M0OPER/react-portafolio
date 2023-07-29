import React, {useState} from "react";
import * as S from "./NavBar.styles";

const NavBar = () => {
    const [showMenuBurguer, setShowMenuBurguer] = useState(false);
    const clickItemNav = (item) =>{
        console.log(item);
        document.getElementById(item).scrollIntoView({behavior:"smooth"});

    };
    return(
        <S.ContainerNavBar>
            <S.ContainerLogo>
                <S.ImageLogo src="/img/Logo.jpeg" alt="Logo"/>
                <div>
                    <h1>Edwin Montes Meza</h1>
                    <h2>Backend Developer</h2>
                </div>
            </S.ContainerLogo>
            <S.ContainerBurguer onClick={() => setShowMenuBurguer(!showMenuBurguer)}>
                <S.BurguerMenu />
                <S.BurguerMenu />
                <S.BurguerMenu />   
            </S.ContainerBurguer>

            <S.ContainerItems showMenuBurguer={showMenuBurguer}>
                <p onClick={() => clickItemNav("about-me")}>About Me</p>
                <p onClick={() => clickItemNav("projects")}>Projects</p>
                <S.Button onClick={() => clickItemNav("contact")}> 🤙 Contact me</S.Button>
            </S.ContainerItems>


        </S.ContainerNavBar>
    );
};

export default NavBar;