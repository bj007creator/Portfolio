import React, { useRef } from 'react';
import { HomePage, ContentRight, ContentMain, Picture } from './style';
import Header from '../../components/Header/index';
import { FiCheckSquare, FiArrowRight, FiAperture, FiAward } from 'react-icons/fi';
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
                        content="Olá, prazer meu nome é Mateus, sou desenvolvedor fullstack à quase 2 anos, atualmente eu trabalho com as melhores tecnologias do mercado no desenvolvimento de aplicações mobile e web além de games 2d. Sou uma pessoa que busca sempre aprender e evoluir como pessoa e como profissional."
                    />
                    <MainTextCard 
                        icon={FiArrowRight}
                        level="second-text"
                        title="Faculdade"
                        content="Atualmente eu estou cursando Engenharia de software na Pontifícia Universidade Católica de Minas Gerais (Puc Minas)."
                    />

                    <MainTextCard 
                        icon={FiAward}
                        level="second-text"
                        title="Premiações"
                        content="Por dois semestres consecutivos, graças a Deus, eu e meu grupo recebemos o título de destaque na disciplina projeto interdisciplinar de software na universidade em que estudo esta disciplina se baseia na construção de um sistema completo por semestre e os projetos em que mencionei que ganharam o título estão listados abaixo : "
                    />

                    <MainTextCard 
                        icon={FiArrowRight}
                        level="second-text"
                        title="1º semestre LifeUp (TIS I)"
                        content="A descrição do projeto está na aba Projetos Finalizados."
                    />
                    <MainTextCard 
                        icon={FiArrowRight}
                        level="second-text"
                        title="2º semestre RpgZone (TIS II)"
                        content="A descrição do projeto está na aba Projetos Finalizados."
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