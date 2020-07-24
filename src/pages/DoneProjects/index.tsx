import React, { useRef, useState, useEffect } from 'react';
import {
    AsideProjectsLeft,
    AsideProjectsRight,
    DoneProjectsMain,
    DoneProjectsPage,
    ProjectContainer,
    VideoContainer,
    LinkLabel,
    CarouselWrapper,
    Carousel,
    Item
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
import mainImage from '../../assets/done-screens/anchor/mainDark.png';
import mainImageLight from '../../assets/done-screens/anchor/mainLight.png';
import mainImage1 from '../../assets/done-screens/anchor/mainDark1.png';
import menuDark from '../../assets/done-screens/anchor/menuDark.png';
import menuLight from '../../assets/done-screens/anchor/menuLight.png';
import login from '../../assets/done-screens/anchor/login.png';
import categoriesDark from '../../assets/done-screens/anchor/categoriesDark.png';
import categoriesLight from '../../assets/done-screens/anchor/categoriesLight.png';
import favorites from '../../assets/done-screens/anchor/favorites.png';
import viewProductBottom from '../../assets/done-screens/anchor/viewProductBottom.png';
import viewProductMiddle from '../../assets/done-screens/anchor/viewProductMiddle.png';
import viewProductTop from '../../assets/done-screens/anchor/viewProductTop.png';
import bagMain from '../../assets/done-screens/anchor/bag.png';
import bagTop from '../../assets/done-screens/anchor/bagTop.png';
import info from '../../assets/done-screens/anchor/info.png';
import cadastro from '../../assets/done-screens/anchor/cadastro.png';
import assesments from '../../assets/done-screens/anchor/assesments.png';
import otherProducts from '../../assets/done-screens/anchor/otherProducts.png';

import mapAfterSearch from '../../assets/done-screens/studentRadar/mapAfterSearch.png';
import markPoint from '../../assets/done-screens/studentRadar/markPoint.png';
import menu from '../../assets/done-screens/studentRadar/menu.png';
import viewProfile from '../../assets/done-screens/studentRadar/viewProfile.png';

import ThemeToggleable from '../../utils/ThemeToggleable';
import ToggleTheme from '../../components/ToggleTheme';

const DoneProjects: React.FC<ThemeToggleable> = ({ toggleTheme }) => {
    const [activeLink, setActiveLink] = useState(false);
    const [activeAnotherProjects, setActiveAnotherProjects] = useState(false);
    const [disableScroll, setDisabelScroll] = useState(false);

    const scrollToRef = (ref: any) => window.scrollTo(0, ref.offsetTop);
    const gapTopRef = useRef<HTMLDivElement>(null);
    const scrollToTop = () => {
        scrollToRef(gapTopRef);
    }

    useEffect( () => {
        window.addEventListener('wheel', (event : any) => {
            if(event.target.id !== "wrapper" && event.target.id !== "wrapper-1"){
                const body = document.querySelector('html');
                if(body) {
                    body.style.overflowY = 'scroll';
                }
            }
            
        });
    }, [] )

    

    return (
        <DoneProjectsPage>
            <AsideProjectsLeft>
                <div ref={gapTopRef} className="aside-projects-left"></div>
                <Header title="letsgo" />
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
                <br />
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
                    content="Estes são os projetos finalizados que fiz ou participei ativamente no processo de criação neles eu mostro a maneira que eu construo os meu produtos na prática "
                />
                

                <MainTextCard
                    icon={FiAward}
                    level="main-text"
                    title="ArtMinas"
                    content=""
                />

                <ProjectContainer>
                    <img src={artMinas} alt="artMinas" />
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
                    content="Neste projeto em específico eu busquei colocar em prática as habilidades de animações e melhoria na experiência do usuário na utilização do site"
                />

                <MainTextCard
                    icon={FiAward}
                    level="main-text"
                    title="Anchor Shop"
                    content=""
                />
                <CarouselWrapper>
                    <Carousel 
                        id="wrapper"
                        onWheel={(event : any) => {
                            const body = document.querySelector('html');
                            if(body) {
                                body.style.overflowY = 'hidden';
                            }
                            
                            if(event.deltaY > 0){
                                event.target.scrollBy(300, 0);
                            }
                            if(event.deltaY < 0){
                                event.target.scrollBy(-300, 0);
                            }
                            
                        }}>
                        <Item>
                            <img src={mainImage} alt="screenshot app 1"/>
                        </Item>

                        <Item>
                            <img src={mainImage1} alt="screenshot app 2"/>
                        </Item>
                        
                        <Item>
                            <img src={mainImageLight} alt="screenshot app 3"/>
                        </Item>

                        <Item>
                            <img src={menuDark} alt="screenshot app 4"/>
                        </Item>

                        <Item>
                            <img src={menuLight} alt="screenshot app 5"/>
                        </Item>

                        <Item>
                            <img src={favorites} alt="screenshot app 6"/>
                        </Item>

                        <Item>
                            <img src={info} alt="screenshot app 7"/>
                        </Item>

                        <Item>
                            <img src={login} alt="screenshot app 8"/>
                        </Item>

                        <Item>
                            <img src={viewProductBottom} alt="screenshot app 9"/>
                        </Item>

                        <Item>
                            <img src={viewProductMiddle} alt="screenshot app 10"/>
                        </Item>

                        <Item>
                            <img src={viewProductTop} alt="screenshot app 11"/>
                        </Item>

                        <Item>
                            <img src={bagMain} alt="screenshot app 12"/>
                        </Item>

                        <Item>
                            <img src={bagTop} alt="screenshot app 13"/>
                        </Item>

                        <Item>
                            <img src={categoriesDark} alt="screenshot app 14"/>
                        </Item>

                        <Item>
                            <img src={categoriesLight} alt="screenshot app 15"/>
                        </Item>

                        <Item>
                            <img src={assesments} alt="screenshot app 16"/>
                        </Item>

                        <Item>
                            <img src={otherProducts} alt="screenshot app 17"/>
                        </Item>

                        <Item>
                            <img src={cadastro} alt="screenshot app 18"/>
                        </Item>
                        
                    </Carousel>
                </CarouselWrapper>

                <MainTextCard
                    icon={FiYoutube}
                    level="second-text"
                    title="Vídeo"
                    content=""
                />
                <VideoContainer>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/QgDznyHkPhs" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </VideoContainer>
                <MainTextCard
                    icon={FiArrowDown}
                    level="second-text"
                    title="Especificações"
                    content="Este projeto é um aplicativo mobile feito em react native e o backend feito em node com banco de dados relacional(PostgreSQL), nesta aplicação o objetivo foi lidar com os relacionamentos exigidos por um sistema comum de e-commerce como sistema de exibição de produtos, categorização, login/cadastro de diversas maneiras (como google, facebook e por campos) e compra, além de um layout condizente com este tipo de aplicação."
                />


                <MainTextCard
                    icon={FiAward}
                    level="main-text"
                    title="Student Radar"
                    content=""
                />
                <CarouselWrapper>
                    <Carousel 
                        id="wrapper-1"
                        onWheel={(event : any) => {
                            const body = document.querySelector('html');
                            if(body) {
                                body.style.overflowY = 'hidden';
                            }
                            
                            if(event.deltaY > 0){
                                event.target.scrollBy(300, 0);
                            }
                            if(event.deltaY < 0){
                                event.target.scrollBy(-300, 0);
                            }
                            
                        }}>
                        <Item>
                            <img src={markPoint} alt="screenshot app 1"/>
                        </Item>

                        <Item>
                            <img src={menu} alt="screenshot app 2"/>
                        </Item>
                        
                        <Item>
                            <img src={mapAfterSearch} alt="screenshot app 3"/>
                        </Item>

                        <Item>
                            <img src={viewProfile} alt="screenshot app 4"/>
                        </Item>

                        
                        
                    </Carousel>
                </CarouselWrapper>

                <MainTextCard
                    icon={FiYoutube}
                    level="second-text"
                    title="Vídeo"
                    content=""
                />
                <VideoContainer>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/hVDHLIl0b-g" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                </VideoContainer>
                <MainTextCard
                    icon={FiArrowDown}
                    level="second-text"
                    title="Especificações"
                    content="Já neste projeto eu utilizei react native e node e o banco de dados utilizado foi um nosql (Mongo DB), a ideia principal que eu quis passar na construção deste projeto foi as minhas habilidades com relação a manipulação de mapas além de demonstrar sistemas de dinâmicas em tempo real (já que quando uma pessoa cadastra um novo estudante o mesmo já é carregado para todos os usuários instantaneamente sem a necessidade de refresh) outra peculiaridade interessante do projeto é o sistema de filtros por proximidade geográfica e busca por palavra-chave. "
                />



                <MainTextCard
                    icon={FiAward}
                    level="main-text"
                    title="RPGZone"
                    content=""
                />

                <ProjectContainer>
                    <img src={rpgzone} alt="RPGZone" />
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
                    content="Este projeto foi desenvolvido para a disciplina de TIS II do curso de Engenharia de software, nele eu e meus colegas de time procuramos desenvolver um sistema de marcações de salas de rpg de mesa com sistemas de cadastro integração com mapas, notificações e etc... O vídeo acima exemplifica melhor todas as funcionalidades."
                />



                <MainTextCard
                    icon={FiAward}
                    level="main-text"
                    title="Lifeup"
                    content=""
                />
                <ProjectContainer>
                    <img src={lifeup} alt="lifeup" />
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
                    content="Lifeup foi um projeto desenvolvido na disciplina TIS(Trabalho interdisciplinar de software 1) I do curso de Engenharia de software esse projeto foi desenvolvido em dupla e eu fiquei responsável pelo desenvolvimento das funcionalidades e dos games e meu colega na parte do design. O lifeup é um projeto que tem a finalidade de proporcionar um contanto mais descontraído com temáticas sérias de saúde como o sedentarismo e a falta de ingestão de líquido, o vídeo exemplifica melhor as funcionalidades do site"
                />
            </DoneProjectsMain>
            <AsideProjectsRight>
                <div style={{ cursor: "pointer" }} className="first-div-aside-right div-aside-right"
                    onClick={() => {
                        setActiveLink(!activeLink);
                    }}
                >
                    <MainTextCard
                        icon={FiLink}
                        level="main-text"
                        title="Links"
                        content=""

                    />
                </div>
                {
                    activeLink ?
                        <div>

                            <LinkLabel>
                                <a target="_blank" href="https://github.com/bj007creator" >
                                    <p>
                                        https://github.com/bj007creator
                                    </p>
                                </a>
                            </LinkLabel>


                            <LinkLabel>
                                <a target="_blank" href="https://github.com/mateus-coder">
                                    <p>
                                        https://github.com/mateus-coder
                                    </p>
                                </a>
                            </LinkLabel>

                        </div> :
                        <> </>
                }

                <div className="div-aside-right"
                    onClick={() => setActiveAnotherProjects(!activeAnotherProjects)}
                >
                    <MainTextCard
                        icon={FiBookmark}
                        level="main-text"
                        title="Outros projetos"
                        content=""
                    />
                </div>
                {
                    activeAnotherProjects ?
                        <div>

                            <LinkLabel>
                                <a target="_blank" href="https://github.com/bj007creator" >
                                    <p>
                                        https://github.com/bj007creator
                                    </p>
                                </a>
                            </LinkLabel>


                            <LinkLabel>
                                <a target="_blank" href="https://github.com/mateus-coder">
                                    <p>
                                        https://github.com/mateus-coder
                                    </p>
                                </a>
                            </LinkLabel>

                        </div> :
                        <> </>
                }

            </AsideProjectsRight>
            <ToggleTheme toggleTheme={toggleTheme} />
            <Wave />
            <GapTop handleScroll={scrollToTop} />
        </DoneProjectsPage>
    );
}
export default DoneProjects;