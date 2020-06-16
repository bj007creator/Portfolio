import React, { useRef } from 'react';
import './style.css';
import { FiAlertCircle, FiArrowDown } from 'react-icons/fi';
import Header from '../../components/Header';
import Wave from '../../components/Wave';
import MainTextCard from '../../components/MainTextCard';
import ImageContainer from '../../components/ImageContainer';
import GapTop from '../../components/GapTop';
import whatsapp from '../../assets/contacts/whatsapp.svg';
import linkedin from '../../assets/contacts/linkedin.svg';
import email from '../../assets/contacts/email.svg';

const Contacts = () => {

    const scrollToRef = (ref : any) => window.scrollTo(0, ref.offsetTop);
    const gapTopRef = useRef<HTMLDivElement>(null);
    const scrollToTop = () => {
        scrollToRef(gapTopRef);
    }

    return (
        <div id="contacts-page">
            <div ref={gapTopRef} className="aside-left-contacts">
                <Header title=""/>
            </div>
            <main className="contacts-main">
                <div className="title-contacts">
                    <MainTextCard 
                        icon={FiAlertCircle}
                        level="main-text"
                        title="Contatos"
                        content=""
                    />
                </div>
                <div className="contacts-content">
                    <ImageContainer
                        image={email}
                        legend="Email"
                    />
                    
                    <div className="legend-contacts-content">
                        <MainTextCard 
                            icon={FiArrowDown}
                            level="second-text"
                            title=""
                            content="mateus.silva.1229310@ pucminas.br"
                        />
                    </div>
                </div>

                <div className="contacts-content">
                    <ImageContainer
                        image={whatsapp}
                        legend="WhatsApp"
                    />
                    <div className="legend-contacts-content">
                        <MainTextCard 
                            icon={FiArrowDown}
                            level="second-text"
                            title=""
                            content="(031) 99801 - 2752"
                        />
                    </div>
                </div>

                <div className="contacts-content">
                    <ImageContainer
                        image={linkedin}
                        legend="Linkedin"
                    />
                    <div className="legend-contacts-content">
                        <MainTextCard 
                            icon={FiArrowDown}
                            level="second-text"
                            title=""
                            content="mateus.silva.1229310@ pucminas.br"
                        />
                    </div>
                </div>

            </main>
            <Wave/>
            <GapTop handleScroll={ scrollToTop }/>
        </div>
    );
}
export default Contacts;