import React, { useRef } from 'react';
import { HomePage, ContentRight, ContentMain, Picture } from './style';
import Header from '../../components/Header/index';
import { FiCheckSquare, FiArrowRight, FiAperture } from 'react-icons/fi';
import Wave from '../../components/Wave';
import MainTextCard from '../../components/MainTextCard';
import GapTop from '../../components/GapTop';

import annotation from '../../assets/undraw_annotation_7das.svg';

import ThemeToggleable from '../../utils/ThemeToggleable';
import ToggleTheme from '../../components/ToggleTheme'


const Home : React.FC<ThemeToggleable> = ( { toggleTheme } ) => {

    const scrollToRef = (ref : any) => window.scrollTo(0, ref.offsetTop);
    const gapTopRef = useRef<HTMLDivElement>(null);
    const scrollToTop = () => {
        scrollToRef(gapTopRef);
    }

    return (
        <>
            <div ref={gapTopRef}></div>
            <HomePage>
                <Header title="letsgo"/>
                <ContentMain>
                    <Picture>
                        <h1>Foto <FiAperture/></h1>
                        <img src="https://avatars1.githubusercontent.com/u/52046972?s=460&u=c3ea39ede7cd961bb8698bb1dd355ca9c0ce7d7f&v=4" alt="profile picture"/>
                    </Picture>
                    <MainTextCard 
                        icon={FiCheckSquare}
                        level="main-text"
                        title="Sobre mim"
                        content="Olá, prazer meu nome é Mateus, sou desenvolvedor fullstack à quase 2 anos, atualmente eu trabalho com as melhores tecnologias do mercado no desenvolvimento de aplicações mobile e web."
                    />
                    <MainTextCard 
                        icon={FiArrowRight}
                        level="second-text"
                        title="Faculdade"
                        content="Atualmente eu estou cursando Engenharia de software na Pontifícia Universidade Católica de Minas Gerais (Puc Minas)."
                    />
                    
                    
                    
                </ContentMain>
                <ContentRight>
                    
                    <div>
                        <img src={annotation} alt="annotation-image"/>
                    </div>

                </ContentRight>
                <ToggleTheme toggleTheme={toggleTheme}/>
                <Wave/>
                <GapTop handleScroll={ scrollToTop }/>

            </HomePage>
        </>
    );
}
export default Home;