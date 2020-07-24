import React, { useRef, useState } from 'react';
import Header from '../../components/Header';
import Wave from '../../components/Wave';
import MainTextCard from '../../components/MainTextCard'
import ImageContainer from '../../components/ImageContainer';
import GapTop from '../../components/GapTop';
import { 
    OfferServicesPage,
    Overlayer,
    AnnotationsContainer,
    LinksSuchThings,
    OfferServicesMenu,
    OfferServicesMain,
    TitleOfferServices,
    ServicesContainer,
    PackageContent,
    MarginsTextContainer,
    LinkLabel
} from './style';
import { 
    FiAnchor, 
    FiCheckSquare, 
    FiArrowUp, 
    FiLink,
    FiDollarSign,
    FiShield,
    FiStar
} from 'react-icons/fi';
import react from '../../assets/techs/react.svg';
import java from '../../assets/techs/java.svg';
import node from '../../assets/techs/node.svg';
import ts from '../../assets/techs/ts.svg';

import ThemeToggleable from '../../utils/ThemeToggleable';
import ToggleTheme from '../../components/ToggleTheme';

const OfferServices : React.FC<ThemeToggleable> = ({ toggleTheme }) => {
    const [activeLink, setActiveLink] = useState(false);
    const [activePayments, setActivePayments] = useState(false);
    function handleSelectServices (event : any) {
        event.target.className =    event.target.className === "overlayer" ? 
                                    "overlayer overlayer-show" :
                                    "overlayer";
    }
    const scrollToRef = (ref : any) => window.scrollTo(0, ref.offsetTop);
    const gapTopRef = useRef<HTMLDivElement>(null);
    const scrollToTop = () => {
        scrollToRef(gapTopRef);
    }

    
    return (
        <OfferServicesPage>
            
            <OfferServicesMenu>
            <div ref={gapTopRef}></div>
                <Header title="qualque um"/>
                <LinksSuchThings>
                    <AnnotationsContainer onClick={() => setActiveLink(!activeLink)}>
                        <MainTextCard 
                            icon={FiLink}
                            level="main-text"
                            title="Links"
                            content=""
                        />
                    </AnnotationsContainer>
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
                    <AnnotationsContainer
                        onClick={() => setActivePayments(!activePayments)}
                    >
                        <MainTextCard 
                            icon={FiDollarSign}
                            level="main-text"
                            title="Pagamento"
                            content=""
                        />
                    </AnnotationsContainer>
                    {
                        activePayments ? 
                            <div>
                                
                                <LinkLabel>
                                    <a target="_blank" href="https://www.99freelas.com.br/user/mateus-apolinario-coder" >
                                        <p>
                                        https://www.99freelas.com.br/user/mateus-apolinario-coder
                                        </p>
                                    </a>
                                </LinkLabel>
                                
                                
                            </div> :
                        <> </>
                    }
                </LinksSuchThings>
            </OfferServicesMenu>
            <OfferServicesMain>
                <TitleOfferServices>
                    <MainTextCard
                        icon={FiAnchor}
                        level="main-text"
                        title="Serviços"
                        content=""
                    />
                </TitleOfferServices>
                <ServicesContainer>
                    <div className="services-content">
                        <div>
                            <ImageContainer
                                image="https://img.icons8.com/color/96/000000/olympic-medal-bronze.png"
                                legend="Simples"
                            />
                        </div>
                        <MarginsTextContainer>
                            <MainTextCard
                                icon={FiShield}
                                level="main-text"
                                title="Site Simples"
                                content="Design básico sem muitas animações e sem sistemas avançados de pagamento por exemplo"
                            />
                            <MainTextCard
                                icon={FiCheckSquare}
                                level="main-text"
                                title="R$ 800,00"
                                content=""
                            />
                        </MarginsTextContainer>
                        <Overlayer>
                            <div 
                                className="overlayer"
                                onClick={handleSelectServices}
                            ></div>
                        </Overlayer>
                    </div>

                    <div className="services-content">
                        <div>
                            <ImageContainer
                                image="https://img.icons8.com/color/96/000000/olympic-medal-silver.png"
                                legend="Médio"
                            />
                        </div>
                        <MarginsTextContainer>
                            <MainTextCard
                                icon={FiShield}
                                level="main-text"
                                title="Site Médio"
                                content="Design um pouco mais elaborado porém sem funcionalidades avançadas essencial para pessoas que querem começar o processo de imersão tecnológica do negócio"
                            />
                            <MainTextCard
                                icon={FiCheckSquare}
                                level="main-text"
                                title="R$ 1199,99"
                                content=""
                            />
                        </MarginsTextContainer>
                        <Overlayer>
                            <div 
                                className="overlayer"
                                onClick={handleSelectServices}
                            ></div>
                        </Overlayer>
                        
                    </div>

                    <div className="services-content-average">
                        <div>
                            <ImageContainer
                                image="https://img.icons8.com/color/96/000000/gold-medal--v1.png"
                                legend="Site Completo"
                            />
                        </div>
                        <MarginsTextContainer>
                            <MainTextCard
                                icon={FiShield}
                                level="main-text"
                                title="Site Completo"
                                content="Design bem elaborado com técnicas de ux design e funcionalidades avançadas  e exclusivas para a demanda do cliente"
                            />
                            <MainTextCard
                                icon={FiCheckSquare}
                                level="main-text"
                                title="R$ 1999,99"
                                content=""
                            />
                        </MarginsTextContainer>
                        
                        <Overlayer>
                            <div 
                                className="overlayer"
                                onClick={handleSelectServices}
                            ></div>
                        </Overlayer>
                    </div>

                    <div className="services-content-average">
                        <div>
                            <ImageContainer
                                image="https://img.icons8.com/color/96/000000/medal2-third-place--v1.png"
                                legend="App Mobile simples"
                            />
                        </div>
                        <MarginsTextContainer>
                            <MainTextCard
                                icon={FiShield}
                                level="main-text"
                                title="App Mobile simples"
                                content="Design básico sem muitas animações e sem sistemas avançados."
                            />
                            <MainTextCard
                                icon={FiCheckSquare}
                                level="main-text"
                                title="R$ 1299,99"
                                content=""
                            />
                        </MarginsTextContainer>
                        <Overlayer>
                            <div 
                                className="overlayer"
                                onClick={handleSelectServices}
                            ></div>
                        </Overlayer>
                    </div>

                    <div className="services-content">
                        <div>
                            <ImageContainer
                                image="https://img.icons8.com/color/96/000000/medal-second-place--v1.png"
                                legend="App médio"
                            />
                        </div>
                        <MarginsTextContainer>
                            <MainTextCard
                                icon={FiShield}
                                level="main-text"
                                title="App médio"
                                content="Design um pouco mais elaborado porém mais voltado para o público que deseja satisfazer o cliente com um app com design mediano e funcional"
                            />
                            <MainTextCard
                                icon={FiCheckSquare}
                                level="main-text"
                                title="R$ 1800,00"
                                content=""
                            />
                        </MarginsTextContainer>
                        <Overlayer>
                            <div 
                                className="overlayer"
                                onClick={handleSelectServices}
                            ></div>
                        </Overlayer>
                    </div>


                    <div className="services-content">
                        
                        <MarginsTextContainer>
                            <MainTextCard
                                icon={FiShield}
                                level="main-text"
                                title="App Completo"
                                content="App para as pessoas que desejam surpreender com um app extremamente diferenciado dos já exstentes com design avançado e funcionalidades específicas para determinadas demandas"
                            />
                            <MainTextCard
                                icon={FiCheckSquare}
                                level="main-text"
                                title="R$ 4000,00"
                                content=""
                            />
                        </MarginsTextContainer>
                        <div>
                            <ImageContainer
                                image="https://img.icons8.com/color/96/000000/prize.png"
                                legend="App completo"
                            />
                        </div>
                        <Overlayer>
                            <div 
                                className="overlayer"
                                onClick={handleSelectServices}
                            ></div>
                        </Overlayer>
                    </div>


                    <div className="services-content">
                        
                        
                    </div>

                </ServicesContainer>
                
                <TitleOfferServices>
                    <MainTextCard
                        icon={FiStar}
                        level="main-text"
                        title="Pacotes"
                        content=""
                    />
                </TitleOfferServices>
                <div className="package-container">
                    <PackageContent>
                        <div className="package-top">
                            <div>
                                <ImageContainer
                                    image="https://img.icons8.com/color/96/000000/prize.png"
                                    legend="App completo"
                                />
                            </div>
                        </div>
                        <div className="package-middle">
                            <div>
                                <ImageContainer
                                    image="https://img.icons8.com/color/96/000000/gold-medal--v1.png"
                                    legend="Site Completo"
                                />
                            </div>
                            <div>
                                <ImageContainer
                                    image="https://img.icons8.com/color/96/000000/gold-medal--v1.png"
                                    legend="Sistema interno de gerenciamento"
                                />
                            </div>
                        </div>
                        <div className="package-down">
                            <div>
                                <ImageContainer
                                    image="https://img.icons8.com/color/96/000000/gold-medal--v1.png"
                                    legend="Apps de gerenciamento"
                                />
                            </div>
                        </div>
                        <div className="package-price">
                            <MainTextCard
                                icon={FiStar}
                                level="main-text"
                                title="Combo Completo"
                                content="Pacote com tudo que uma empresa precisa para alavancar seus negócios no meio digital"
                            />
                            <MainTextCard
                                icon={FiCheckSquare}
                                level="main-text"
                                title="R$ 12000,00"
                                content=""
                            />
                        </div>
                        
                    </PackageContent>

                    <PackageContent>
                        <div className="package-top">
                            <div>
                                <ImageContainer
                                    image="https://img.icons8.com/color/96/000000/launched-rocket.png"
                                    legend="Game mobile"
                                />
                            </div>
                        </div>
                        <div className="package-middle">
                            <div>
                                <ImageContainer
                                    image="https://img.icons8.com/color/96/000000/gold-medal--v1.png"
                                    legend="Game para pc"
                                />
                            </div>
                            <div>
                                <ImageContainer
                                    image="https://img.icons8.com/color/96/000000/gold-medal--v1.png"
                                    legend="Game web"
                                />
                            </div>
                        </div>
                        <div className="package-down">
                            <div>
                                <ImageContainer
                                    image="https://img.icons8.com/color/96/000000/gold-medal--v1.png"
                                    legend="App para gerenciar o game"
                                />
                            </div>
                        </div>
                        <div className="package-price">
                            <MainTextCard
                                icon={FiStar}
                                level="main-text"
                                title="Combo Game"
                                content="Pacote extra contendo o essencial para que sair do papel aquela ideia de fazer aquele game multiplataforma"
                            />
                            <MainTextCard
                                icon={FiCheckSquare}
                                level="main-text"
                                title="R$ 20000,00"
                                content=""
                            />
                        </div>
                        
                    </PackageContent>

                </div>

                
            </OfferServicesMain>
            <ToggleTheme toggleTheme={toggleTheme}/>
            <Wave/>
            <GapTop handleScroll={ scrollToTop }/>
            
        </OfferServicesPage>
    );
}

export default OfferServices;
