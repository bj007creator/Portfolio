import React from 'react';
import { FiLogIn } from 'react-icons/fi'
import './style.css';
import Header from '../../components/Header/index';
import { Link } from 'react-router-dom';
import { FiCheckSquare, FiArrowRight, FiChevronsRight, FiAperture } from 'react-icons/fi';
import Wave from '../../components/Wave';
import MainTextCard from '../../components/MainTextCard';

import annotation from '../../assets/undraw_annotation_7das.svg';

const Home = () => {
    return (
        <>
            <div id="home-page">
                <Header title="letsgo"/>
                <main className="content-main">
                    <div className="picture">
                        <h1>Foto <FiAperture/></h1>
                        <img src="https://avatars1.githubusercontent.com/u/52046972?s=460&u=c3ea39ede7cd961bb8698bb1dd355ca9c0ce7d7f&v=4" alt="profile picture"/>
                    </div>
                    <MainTextCard 
                        icon={FiCheckSquare}
                        level="main-text"
                        title="Sobre mim"
                        content="Olá, prazer meu nome é Mateus, sou desenvolvedor fullstack à quase 2 anos, atualmente eu trabalho com as melhores tecnologias do mercado no desenvolvimento de aplicações mobile e web."
                    />
                    <MainTextCard 
                        icon={FiArrowRight}
                        level="second-text"
                        title="Faculdade"
                        content="Atualmente eu estou cursando Engenharia de software na Pontifícia Universidade Católica de Minas Gerais (Puc Minas)."
                    />
                    <Link className="button" to="/create-point">
                        <span className="icon">
                            <FiLogIn/>
                        </span>
                        <span className="press">
                            Press
                        </span>
                    </Link>
                    
                    
                </main>
                <aside className="content-right">
                    
                    <div>
                        <img src={annotation} alt="annotation-image"/>
                    </div>
                    
                    
                </aside>
                <Wave/>
            </div>
        </>
    );
}
export default Home;