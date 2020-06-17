import React, { useRef } from 'react';
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
    MarginsTextContainer
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
                    <AnnotationsContainer>
                        <MainTextCard 
                            icon={FiLink}
                            level="main-text"
                            title="Links"
                            content=""
                        />
                    </AnnotationsContainer>
                    <AnnotationsContainer>
                        <MainTextCard 
                            icon={FiDollarSign}
                            level="main-text"
                            title="Pagamento"
                            content=""
                        />
                    </AnnotationsContainer>
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
                                image={react}
                                legend="React JS"
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
                                title="R$ 200,00"
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
                                image={java}
                                legend="Java"
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
                                title="R$ 200,00"
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
                                image={ts}
                                legend="Typescript"
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
                                title="R$ 255,00"
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
                                image={node}
                                legend="Node JS"
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
                                title="R$ 200,00"
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
                                image={react}
                                legend="React JS"
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
                                title="R$ 200,00"
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
                                title="Site Simples"
                                content="Design básico sem muitas animações e sem sistemas avançados de pagamento por exemplo"
                            />
                            <MainTextCard
                                icon={FiCheckSquare}
                                level="main-text"
                                title="R$ 200,00"
                                content=""
                            />
                        </MarginsTextContainer>
                        <div>
                            <ImageContainer
                                image={react}
                                legend="React JS"
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
                                title="R$ 200,00"
                                content=""
                            />
                        </MarginsTextContainer>
                        <div>
                            <ImageContainer
                                image={react}
                                legend="React JS"
                            />
                        </div>
                        <Overlayer>
                            <div 
                                className="overlayer"
                                onClick={handleSelectServices}
                            ></div>
                        </Overlayer>
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
                                    image={react}
                                    legend="React JS"
                                />
                            </div>
                        </div>
                        <div className="package-middle">
                            <div>
                                <ImageContainer
                                    image={react}
                                    legend="React JS"
                                />
                            </div>
                            <div>
                                <ImageContainer
                                    image={react}
                                    legend="React JS"
                                />
                            </div>
                        </div>
                        <div className="package-down">
                            <div>
                                <ImageContainer
                                    image={react}
                                    legend="React JS"
                                />
                            </div>
                        </div>
                        <div className="package-price">
                            <MainTextCard
                                icon={FiStar}
                                level="main-text"
                                title="Combo Completo"
                                content="Descrição do pacote"
                            />
                            <MainTextCard
                                icon={FiCheckSquare}
                                level="main-text"
                                title="R$ 200,00"
                                content=""
                            />
                        </div>
                        
                    </PackageContent>

                    <PackageContent>
                        <div className="package-top">
                            <div>
                                <ImageContainer
                                    image={react}
                                    legend="React JS"
                                />
                            </div>
                        </div>
                        <div className="package-middle">
                            <div>
                                <ImageContainer
                                    image={node}
                                    legend="Node JS"
                                />
                            </div>
                            <div>
                                <ImageContainer
                                    image={ts}
                                    legend="Typescript"
                                />
                            </div>
                        </div>
                        <div className="package-down">
                            <div>
                                <ImageContainer
                                    image={java}
                                    legend="Java"
                                />
                            </div>
                        </div>
                        <div className="package-price">
                            <MainTextCard
                                icon={FiStar}
                                level="main-text"
                                title="Combo Completo"
                                content="Descrição do pacote"
                            />
                            <MainTextCard
                                icon={FiCheckSquare}
                                level="main-text"
                                title="R$ 2500,00"
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
