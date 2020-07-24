import styled from 'styled-components';

export const Sidebar = styled.header `
    background: ${ (props) => props.theme.colors.primary };
    position: relative;
    
    nav {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        transition-duration: 1s;
        
    }
    nav.header-hidden {
        transform: translateX(-100%);
    }
    nav.header-show {
        z-index: 11;
        
    }
    nav ul {
        display: flex;
        flex-direction: column;
        width: 100%;
        background: ${ (props) => props.theme.colors.secundary };
    }
    nav ul li {
        flex: 1;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 1.3em;
        height: 100px;
        background: transparent;
        background: linear-gradient(
            270deg,
            ${ (props) => props.theme.colors.secundary },
            ${ (props) => props.theme.colors.primary }
        );
        position: relative;
    }
    nav ul li > span {
        margin-left: 10px;
    }
    .cursor {
        cursor: pointer;
    }
    .cursor:hover {
        border : 2px solid ${ (props) => props.theme.colors.selected };
    }
    .cursor > span {
        transition-duration: .2s;
    }
    .cursor:hover > span {
        transform: translateX(15px);
    }
    .cursor:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        height: 100%;
        width: 100%;
        background: ${ (props) => props.theme.colors.selected };
        opacity: 0;
    }
    .cursor:hover:before {
        opacity: .5;
    }
    .list-icon-item {
        z-index: 12;
    }
    .bars-icon {
        position: absolute;
        top: 20px;
        left: 30px;
        z-index: 10;
        font-size: 2em;
        cursor: pointer;
    }
    .underline {
        text-decoration: none;
    }
`;



