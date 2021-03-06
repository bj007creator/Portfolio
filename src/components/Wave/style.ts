import styled from 'styled-components';

export const WaveContainer = styled.div `
    position : absolute;
    width : 100%;
    
    @media (max-width: 1000px) {
        min-width : 530px;
        width : 100%;
    }
    .flex-wave{
        position: absolute;
        top : 0;
        left: 0;
        opacity: 1;
        fill : ${ (props) => props.theme.colors.secundary };
    }
`;