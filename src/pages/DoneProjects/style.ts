import styled from 'styled-components';

export const DoneProjectsPage = styled.div `
    display: grid;
    position: relative;
    grid-template-columns: 2fr 3fr 2fr;
    height: 100vh;
`;
export const DoneProjectsMain = styled.main `
    width: 100%;
    padding : 200px 20px 20px 20px;
    background: linear-gradient(
        90deg,
        ${ (props) => props.theme.colors.primary },
        ${ (props) => props.theme.colors.background }
    );
`;
export const AsideProjectsRight = styled.aside `
    padding : 200px 20px 20px 20px;
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
    img {
        width: 100%;
        height: 100%;
    }
`;

