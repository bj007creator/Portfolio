import React from 'react';
import './style.css';
import Header from '../../components/Header';
import Wave from '../../components/Wave';
import MainTextCard from '../../components/MainTextCard';
import { FiAirplay, FiArrowDown, FiLink, FiBookmark } from 'react-icons/fi';
import react from '../../assets/techs/react.svg';
import java from '../../assets/techs/java.svg';
import node from '../../assets/techs/node.svg';
import ts from '../../assets/techs/ts.svg';
import ImageContainer from '../../components/ImageContainer';
import lifeup from '../../assets/projects/lifeup.png';
import rpgzone from '../../assets/projects/rpgzone.png';
import artMinas from '../../assets/projects/artminas.png';

const DoneProjects = () => {
    return (
        <div id="done-projects-page">
            <div className="aside-projects-left">
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
                    icon={FiAirplay}
                    level="main-text"
                    title="Projetos"
                    content="Este é o primiro projeto cujo o qual é baseado nos principais conhecimentos que eu tenho."
                />
            </div>
            
            <main className="done-projects-main">
                <MainTextCard 
                    icon={FiAirplay}
                    level="main-text"
                    title="Projetos"
                    content="Este é o primiro projeto cujo o qual é baseado nos principais conhecimentos que eu tenho."
                />
                
                
                <MainTextCard 
                    icon={FiAirplay}
                    level="main-text"
                    title="ArtMinas"
                    content=""
                />
                
                <div className="project-container">
                    <img src={artMinas} alt="artMinas"/>
                </div>
                <MainTextCard 
                    icon={FiArrowDown}
                    level="second-text"
                    title="Vídeo"
                    content=""
                />
                <div className="video-container">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/V_QYWTtkC7I" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <MainTextCard 
                    icon={FiArrowDown}
                    level="second-text"
                    title="Especificações"
                    content="Este é o primiro projeto cujo o qual é baseado nos principais conhecimentos que eu tenho."
                />

                

                <MainTextCard 
                    icon={FiAirplay}
                    level="main-text"
                    title="RPGZone"
                    content=""
                />
                
                <div className="project-container">
                    <img src={rpgzone} alt="RPGZone"/>
                </div>
                <MainTextCard 
                    icon={FiArrowDown}
                    level="second-text"
                    title="Vídeo"
                    content=""
                />
                <div className="video-container">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/5QnchOV_7Vg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </div>
                <MainTextCard 
                    icon={FiArrowDown}
                    level="second-text"
                    title="Especificações"
                    content="Este é o primiro projeto cujo o qual é baseado nos principais conhecimentos que eu tenho."
                />
                
                
                
                <MainTextCard 
                    icon={FiAirplay}
                    level="main-text"
                    title="Lifeup"
                    content=""
                />
                <div className="project-container">
                    <img src={lifeup} alt="lifeup"/>
                </div>
                <MainTextCard 
                    icon={FiArrowDown}
                    level="second-text"
                    title="Vídeo"
                    content=""
                />
                <div className="video-container">
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/2W7sIg2_tlc" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" frameBorder={0} allowFullScreen></iframe>
                </div>
                <MainTextCard 
                    icon={FiArrowDown}
                    level="second-text"
                    title="Especificações"
                    content="Este é o primiro projeto cujo o qual é baseado nos principais conhecimentos que eu tenho."
                />
            </main>
            <aside className="aside-projects-right">
                <div className="first-div-aside-right">
                    <MainTextCard 
                        icon={FiLink}
                        level="main-text"
                        title="Links"
                        content=""
                    />
                    
                </div>
                <div>
                    <MainTextCard 
                        icon={FiBookmark}
                        level="main-text"
                        title="Outros projetos"
                        content=""
                    />
                </div>
                
            </aside>
            <Wave/>
        </div>
    );
}
export default DoneProjects;