import styled from 'styled-components';

export const OfferServicesPage = styled.div `
    display: grid;
    grid-template-columns: 2fr 5fr;
    position: relative;
    height: 100vh;
    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`;
export const OfferServicesMain = styled.main `
    width: 100%;
    padding : 200px 20px 20px 20px;
    background: linear-gradient(
        90deg,
        ${ (props) => props.theme.colors.primary },
        ${ (props) => props.theme.colors.background },
        ${ (props) => props.theme.colors.background }
    );
`;

export const OfferServicesMenu = styled.div `
    background: ${ (props) => props.theme.colors.primary };
`;

export const TitleOfferServices = styled.div `
    padding-top: 40px;
    display: grid;
    grid-template-columns: 1fr;
`;

export const ServicesContainer = styled.div `
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    div.services-content-average {

        width: 50%;
        @media (max-width: 1000px) {
            width: 100%;
        }
        display: grid;
        grid-template-rows: repeat(2, 1fr);
        cursor: pointer;
        position: relative;
        margin-top: 20px;
        
    }
    div.services-content {
        width: 100%;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        cursor: pointer;
        position: relative;
        margin-top: 20px;
        padding-bottom: 20px;
    }
`;


export const Overlayer = styled.div `
    height : 100%;
    width : 100%;
    position : absolute;
    
    div.overlayer {
        position: absolute;
        width: 100%;
        height: 100%;
        background: transparent;
        border-bottom : 5px solid ${ (props) => props.theme.colors.secundary };
        border-radius: 20px;
    }
    div.overlayer-show {
        border : 5px solid ${ (props) => props.theme.colors.selected };
    }
`;
export const MarginsTextContainer = styled.div `
    margin: 20px;
`;

export const PackageContent = styled.div `
    border : 5px solid ${ (props) => props.theme.colors.secundary };
    padding : 10px;
    position: relative;
    border-radius: 20px;
    margin-top: 20px;
    div.package-top {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.package-top > div {
        width: 400px;
    }
    div.package-middle {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div.package-middle > div {
        flex : 1;
    }
    div.package-down {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;
    }
    div.package-down > div {
        width: 400px;
    }
`;

export const AnnotationsContainer = styled.div `
    z-index : 2000;
    cursor : pointer;
    div {
        
        div {
            
            background: ${ (props) => props.theme.colors.primary };
            border-bottom : 5px solid ${ (props) => props.theme.colors.secundary };
        }
    }
`;
export const LinksSuchThings = styled.div `
    margin-top: 800px;
    margin-left: 10px;
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

