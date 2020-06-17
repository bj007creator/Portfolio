import styled from 'styled-components';

export const GapToTop = styled.div `
    position: fixed;
    bottom: 20px;
    right: 20px;
    width: 60px;
    height: 60px;
    border : 2px solid ${ (props) => props.theme.colors.secundary };
    font-size: 3.5em;
    border-radius: 50%;
    background: linear-gradient(
        180deg,
        ${ (props) => props.theme.colors.primary },
        ${ (props) => props.theme.colors.background });
    cursor: pointer;
    z-index: 100;
`;
