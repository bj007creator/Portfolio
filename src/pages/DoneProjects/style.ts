import styled from 'styled-components';

export const DoneProjectsPage = styled.div `
    display: grid;
    position: relative;
    grid-template-columns: 2fr 3fr 2fr;
    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
    height: 100vh;
`;
export const DoneProjectsMain = styled.main `
    width: 100%;
    @media (max-width: 1000px) {
        min-width : 500px;
    }
    padding : 200px 20px 20px 20px;
    background: linear-gradient(
        90deg,
        ${ (props) => props.theme.colors.primary },
        ${ (props) => props.theme.colors.background }
    );
`;
export const AsideProjectsRight = styled.aside `
    padding : 200px 20px 20px 20px;
    z-index : 20;
    width: 100%;
    div.div-aside-right {
        border-bottom: 4px solid ${ (props) => props.theme.colors.secundary };
        cursor: pointer;
        border-radius: 0 0 20px 20px;
    }
    div.first-div-aside-right {
        margin-top : 200px;
    }
`;
export const AsideProjectsLeft = styled.aside `
    width: 100%;
    height: 100%;
    background: ${ (props) => props.theme.colors.primary };
    div.first-left-item {
        margin-top: 200px;
    }
`;


export const VideoContainer = styled.div `
    background: transparent;
    margin: 20px 0;
    height: 300px;
    border-radius: 20px;
`;

export const ProjectContainer = styled.div `
    padding: 20px;
    background: transparent;
    margin: 20px 0;
    height: 300px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
`;
export const LinkLabel = styled.div `
    
    border-bottom : 2px solid ${ (props) => props.theme.colors.secundary };
    border-radius : 20px;
    
    a {
        text-decoration : none;
        text-align : center;
    }
    p {
        font-size: 1.2em;
    }
`;

export const CarouselWrapper = styled.div `
    flex-direction : row;
    width : 380px;
    height : 660px;
    
    overflow-y : hidden;
    margin : 0 auto;
`;

export const Item = styled.div `
    flex : none;
    height : 100%;
    width : 100%;
    scroll-snap-align : start;
    pointer-events : none;
    img  {
        width : 100%;
        height : 100%;
        object-fit : cover;
    }
`;

export const Carousel = styled.div `
    display : flex;
    scroll-snap-type : x mandatory;
    overflow-x : auto;
    ::-webkit-scrollbar-track {
        background-color: ${props => props.theme.colors.selected};
    }
    ::-webkit-scrollbar {
        width: 2px;
        height : 4px;
    }
    ::-webkit-scrollbar-thumb {
        background: ${props => props.theme.colors.text};
    }
    -webkit-overflow-scrolling : touch;
    scroll-behavior : smooth;
`;


