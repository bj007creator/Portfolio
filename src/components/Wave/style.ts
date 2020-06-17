import styled from 'styled-components';

export const WaveContainer = styled.div `
    position : absolute;
    width : 100%;
    height : 100%;
    .flex-wave{
        position: absolute;
        top : 0;
        left: 0;
        opacity: 1;
        fill : ${ (props) => props.theme.colors.secundary };
    }
`;