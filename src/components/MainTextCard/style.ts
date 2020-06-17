import styled from 'styled-components';

export const ContentMainCard = styled.div `
    .main-text {
        display: flex;
        flex-direction: row;
        font-size: 3em;
        align-items: center;
        justify-content: flex-start;
        background: ${ (props) => props.theme.colors.background };
        padding: 10px;
        border-radius: 20px;
    }
    .main-text > span {
        margin-left: 10px;
    }
    .second-text {
        display: flex;
        flex-direction: row;
        font-size: 1.8em;
        align-items: center;
        justify-content: flex-start;
        background: ${ (props) => props.theme.colors.background };
        padding: 10px;
        border-radius: 20px;
        margin-left: 50px;
    }

    > p{
        margin-left: 50px;
        margin: 20px 0 20px 50px;
        font-size: 1.150em;
    }
`;