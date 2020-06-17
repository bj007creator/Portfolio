import React, { useRef } from 'react';
import { 
    AsideProjectsLeft,
    AsideProjectsRight,
    DoneProjectsMain,
    DoneProjectsPage,
    ProjectContainer,
    VideoContainer
} from './style';
import Header from '../../components/Header';
import Wave from '../../components/Wave';
import MainTextCard from '../../components/MainTextCard';
import { 
    FiAirplay,
    FiArrowDown, 
    FiLink, 
    FiBookmark,
    FiBriefcase,
    FiAward,
    FiYoutube,
    FiCheck
} from 'react-icons/fi';
import react from '../../assets/techs/react.svg';
import java from '../../assets/techs/java.svg';
import node from '../../assets/techs/node.svg';
import ts from '../../assets/techs/ts.svg';
import ImageContainer from '../../components/ImageContainer';
import GapTop from '../../components/GapTop';
import lifeup from '../../assets/projects/lifeup.png';
import rpgzone from '../../assets/projects/rpgzone.png';
import artMinas from '../../assets/projects/artminas.png';

import ThemeToggleable from '../../utils/ThemeToggleable';
import ToggleTheme from '../../components/ToggleTheme';

const DoneProjects : React.FC<ThemeToggleable> = ({ toggleTheme }) => {

    const scrollToRef = (ref : any) => window.scrollTo(0, ref.offsetTop);
    const gapTopRef = useRef<HTMLDivElement>(null);
    const scrollToTop = () => {
        scrollToRef(gapTopRef);
    }

    return (
        <DoneProjectsPage>
            <AsideProjectsLeft>
                <div ref={gapTopRef} className="aside-projects-left"></div>
                <Header title="letsgo"/>
                <div className="first-left-item">
                    <MainTextCard 
                        icon={FiAirplay}
                        level="main-text"
                        title="Tecnologias"
                        content=""
                    />
                </div>
                <ImageContainer
                    image={react}
                    legend="React JS"
                />
                <ImageContainer
                    image={java}
                    legend="Java"
                />
                <ImageContainer
                    image={node}
                    legend="Node JS"
                />
                <ImageContainer
                    image={ts}
                    legend="TypeScript"
                />
                <br/>
                <MainTextCard 
                    icon={FiCheck}
                    level="main-text"
                    title="Anexos"
                    content="Algo para acrescentar aqui depois"
                />
            </AsideProjectsLeft>
            
            <DoneProjectsMain>
                <MainTextCard 
                    icon={FiBriefcase}
                    level="main-text"
                    title="Projetos"
                    content="Este é o primiro projeto cujo o qual é baseado nos principais conhecimentos que eu tenho."
                />
                
                
                <MainTextCard 
                    icon={FiAward}
                    level="main-text"
                    title="ArtMinas"
                    content=""
                />
                
                <ProjectContainer>
                    <img src={artMinas} alt="artMinas"/>
                </ProjectContainer>
                <MainTextCard 
                    icon={FiYoutube}
                    level="second-text"
                    title="Vídeo"
                    content=""
                />
                <VideoContainer>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/V_QYWTtkC7I" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </VideoContainer>
                <MainTextCard 
                    icon={FiArrowDown}
                    level="second-text"
                    title="Especificações"
                    content="Este é o primiro projeto cujo o qual é baseado nos principais conhecimentos que eu tenho."
                />

                

                <MainTextCard 
                    icon={FiAward}
                    level="main-text"
                    title="RPGZone"
                    content=""
                />
                
                <ProjectContainer>
                    <img src={rpgzone} alt="RPGZone"/>
                </ProjectContainer>
                <MainTextCard 
                    icon={FiYoutube}
                    level="second-text"
                    title="Vídeo"
                    content=""
                />
                <VideoContainer>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5QnchOV_7Vg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </VideoContainer>
                <MainTextCard 
                    icon={FiArrowDown}
                    level="second-text"
                    title="Especificações"
                    content="Este é o primiro projeto cujo o qual é baseado nos principais conhecimentos que eu tenho."
                />
                
                
                
                <MainTextCard 
                    icon={FiAward}
                    level="main-text"
                    title="Lifeup"
                    content=""
                />
                <ProjectContainer>
                    <img src={lifeup} alt="lifeup"/>
                </ProjectContainer>
                <MainTextCard 
                    icon={FiYoutube}
                    level="second-text"
                    title="Vídeo"
                    content=""
                />
                <VideoContainer>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2W7sIg2_tlc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder={0} allowFullScreen></iframe>
                </VideoContainer>
                <MainTextCard 
                    icon={FiArrowDown}
                    level="second-text"
                    title="Especificações"
                    content="Este é o primiro projeto cujo o qual é baseado nos principais conhecimentos que eu tenho."
                />
            </DoneProjectsMain>
            <AsideProjectsRight>
                <div className="first-div-aside-right div-aside-right ">
                    <MainTextCard 
                        icon={FiLink}
                        level="main-text"
                        title="Links"
                        content=""
                    />
                    
                </div>
                <div className="div-aside-right">
                    <MainTextCard 
                        icon={FiBookmark}
                        level="main-text"
                        title="Outros projetos"
                        content=""
                    />
                </div>
                
            </AsideProjectsRight>
            <ToggleTheme toggleTheme={toggleTheme}/>
            <Wave/>
            <GapTop handleScroll={ scrollToTop }/>
        </DoneProjectsPage>
    );
}
export default DoneProjects;