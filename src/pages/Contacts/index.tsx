import React, { useRef } from 'react';
import {
    AsideLeftContacts,
    ContactsContent,
    ContactsMain,
    ContactsPage,
    TitleContacts
} from './style';
import { FiInfo, FiArrowDown } from 'react-icons/fi';
import Header from '../../components/Header';
import Wave from '../../components/Wave';
import MainTextCard from '../../components/MainTextCard';
import ImageContainer from '../../components/ImageContainer';
import GapTop from '../../components/GapTop';
import whatsapp from '../../assets/contacts/whatsapp.svg';
import linkedin from '../../assets/contacts/linkedin.svg';
import email from '../../assets/contacts/email.svg';

import ThemeToggleable from '../../utils/ThemeToggleable';
import ToggleTheme from '../../components/ToggleTheme';

const Contacts : React.FC<ThemeToggleable> = ( { toggleTheme } ) => {

    const scrollToRef = (ref : any) => window.scrollTo(0, ref.offsetTop);
    const gapTopRef = useRef<HTMLDivElement>(null);
    const scrollToTop = () => {
        scrollToRef(gapTopRef);
    }

    return (
        <ContactsPage>
            <AsideLeftContacts>
                <div ref={gapTopRef}></div>
                <Header title=""/>
            </AsideLeftContacts>
            <ContactsMain>
                <TitleContacts>
                    <MainTextCard 
                        icon={FiInfo}
                        level="main-text"
                        title="Contatos"
                        content=""
                    />
                </TitleContacts>
                <ContactsContent>
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
                </ContactsContent>

                <ContactsContent>
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
                </ContactsContent>

                <ContactsContent>
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
                </ContactsContent>

            </ContactsMain>
            <ToggleTheme toggleTheme={toggleTheme}/>
            <Wave/>
            <GapTop handleScroll={ scrollToTop }/>
        </ContactsPage>
    );
}
export default Contacts;