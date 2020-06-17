import React, { useState, ChangeEvent } from 'react';
import { Sidebar } from './style';
import { FaBars, FaEject } from 'react-icons/fa';
import { FiUser, FiCheckCircle, FiTarget, FiPhoneCall, FiChevronsLeft } from 'react-icons/fi';
import { Link } from 'react-router-dom';

interface HeaderProps {
    title : string;
}

const Header : React.FC<HeaderProps> = (props) => {
    const [title, setTitle] = useState(props.title);
    const [navClass, setNavClass] = useState("header-hidden header-show");
    
    return (
        <Sidebar>
            <FaBars 
                className="bars-icon"
                onClick={ () => setNavClass("header-show") }
            />
            <nav className={`${navClass}`}>
                <ul>
                    <Link className="underline" to="/">
                        <li className="cursor">
                            <FiUser className="list-icon-item"/>
                            <span>Sobre mim</span>
                        </li>
                    </Link>
                    <Link className="underline" to="/done-projects">
                        <li className="cursor">
                            <FiCheckCircle className="list-icon-item"/>
                            <span>Projetos Finalizados</span>
                        </li>
                    </Link>
                    <Link className="underline" to="/offer-services">
                        <li className="cursor">
                            <FiTarget className="list-icon-item"/>
                            <span>Serviços ofertados</span>
                        </li>
                    </Link>
                    <Link className="underline" to="/contacts">
                        <li className="cursor">
                            <FiPhoneCall className="list-icon-item"/>
                            <span>Contatos</span>
                        </li>
                    </Link>
                    
                    <li 
                        className="cursor" 
                        onClick={ () => setNavClass("header-hidden header-show")}
                    >
                        <FiChevronsLeft className="list-icon-item"/>
                        <span>Close</span>
                    </li>
                </ul>
            </nav>
        </Sidebar>
    );
}
export default Header;