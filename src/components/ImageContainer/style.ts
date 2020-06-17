import styled from 'styled-components';

export const ImageWavesContainer = styled.div `
    background: ${ (props) => props.theme.colors.secundary };
    width: 90%;
    height: 300px;
    margin: 0 auto;
    border-radius: 20px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-top: 20px;
    svg {
        position: absolute;
        top: 0;
        left: 0;
    }
    div {
        width: 150px;
        height: 150px;
        border-radius: 20px;
        background: ${ (props) => props.theme.colors.background };
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    div > img {
        width: 80px;
        height: 80px;
    }
    span {
        margin-top: 10px;
        font-size: 1.5em;
    }
`;