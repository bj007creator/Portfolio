import React, { ChangeEvent, useRef } from 'react';
import Header from '../../components/Header';
import Wave from '../../components/Wave';
import MainTextCard from '../../components/MainTextCard'
import ImageContainer from '../../components/ImageContainer';
import './style.css';
import { FiAnchor, FiCheckSquare, FiArrowUp } from 'react-icons/fi';
import react from '../../assets/techs/react.svg';
import java from '../../assets/techs/java.svg';
import node from '../../assets/techs/node.svg';
import ts from '../../assets/techs/ts.svg';

const OfferServices = () => {
    
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
        <div id="offer-services-page">
            
            <div ref={gapTopRef} className="offer-services-menu">
                <Header title="qualque um"/>
            </div>
            <main className="offer-services-main">
                <div className="title-offer-services">
                    <MainTextCard
                        icon={FiAnchor}
                        level="main-text"
                        title="Serviços"
                        content=""
                    />
                </div>
                <div className="services-container">
                    <div className="services-content">
                        <div>
                            <ImageContainer
                                image={react}
                                legend="React JS"
                            />
                        </div>
                        <div className="margins-text-container">
                            <MainTextCard
                                icon={FiAnchor}
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
                        </div>
                        <div 
                            className="overlayer"
                            onClick={handleSelectServices}
                        ></div>
                    </div>

                    <div className="services-content">
                        <div>
                            <ImageContainer
                                image={java}
                                legend="Java"
                            />
                        </div>
                        <div className="margins-text-container">
                            <MainTextCard
                                icon={FiAnchor}
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
                        </div>
                        <div 
                            className="overlayer"
                            onClick={handleSelectServices}
                        ></div>
                    </div>

                    <div className="services-content-average">
                        <div>
                            <ImageContainer
                                image={ts}
                                legend="Typescript"
                            />
                        </div>
                        <div className="margins-text-container">
                            <MainTextCard
                                icon={FiAnchor}
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
                        </div>
                        <div 
                            className="overlayer"
                            onClick={handleSelectServices}
                        ></div>
                    </div>

                    <div className="services-content-average">
                        <div>
                            <ImageContainer
                                image={node}
                                legend="Node JS"
                            />
                        </div>
                        <div className="margins-text-container">
                            <MainTextCard
                                icon={FiAnchor}
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
                        </div>
                        <div 
                            className="overlayer"
                            onClick={handleSelectServices}
                        ></div>
                    </div>

                    <div className="services-content">
                        <div>
                            <ImageContainer
                                image={react}
                                legend="React JS"
                            />
                        </div>
                        <div className="margins-text-container">
                            <MainTextCard
                                icon={FiAnchor}
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
                        </div>
                        <div 
                            className="overlayer"
                            onClick={handleSelectServices}
                        ></div>
                    </div>


                    <div className="services-content">
                        
                        <div className="margins-text-container">
                            <MainTextCard
                                icon={FiAnchor}
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
                        </div>
                        <div>
                            <ImageContainer
                                image={react}
                                legend="React JS"
                            />
                        </div>
                        <div 
                            className="overlayer"
                            onClick={handleSelectServices}
                        ></div>
                    </div>


                    <div className="services-content">
                        
                        <div className="margins-text-container">
                            <MainTextCard
                                icon={FiAnchor}
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
                        </div>
                        <div>
                            <ImageContainer
                                image={react}
                                legend="React JS"
                            />
                        </div>
                        <div 
                            className="overlayer"
                            onClick={handleSelectServices}
                        ></div>
                    </div>

                </div>
                
                <div className="title-offer-services">
                    <MainTextCard
                        icon={FiAnchor}
                        level="main-text"
                        title="Pacotes"
                        content=""
                    />
                </div>
                <div className="package-container">
                    <div className="package-content">
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
                                icon={FiAnchor}
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
                        
                    </div>

                    <div className="package-content">
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
                                icon={FiAnchor}
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
                        
                    </div>

                </div>

                
            </main>
            <Wave/>
            <div 
                className="gap-top"
                onClick={scrollToTop}
            >
                <FiArrowUp/>    
            </div>
        </div>
    );
}

export default OfferServices;
