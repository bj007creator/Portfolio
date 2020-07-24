import styled from 'styled-components';

export const ContactsPage = styled.div `
    display: grid;
    grid-template-columns: 2fr 5fr;
    @media (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
    position: relative;
    height: 100vh;
`;


export const AsideLeftContacts = styled.aside `
    background: ${ (props) => props.theme.colors.primary };
`;

export const ContactsMain = styled.div `
    width: 100%;
    padding : 200px 20px 20px 20px;
    background: linear-gradient(
        90deg,
        ${ (props) => props.theme.colors.primary },
        ${ (props) => props.theme.colors.background },
        ${ (props) => props.theme.colors.background }
    );
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;
export const TitleContacts = styled.div `
    display: flex;
    width: 100%;
    div {
        flex : 1;
    }
`;

export const ContactsContent = styled.div `
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    position: relative;
    flex: 1;
    height: 550px;
    margin : 5px 0;
    @media (max-width: 1000px) {
        min-width : 500px;
    }
    > div {
        height : 100%;
        width : 100%;

    }
    div > div {
        z-index: 20;
    }
    div.legend-contacts-content {
        height: 100%;
        width: 100%;
        position: absolute;
        z-index: 55;
        left: 0;
        top: 0;
    }
    div.legend-contacts-content  > div{
        position: absolute;
        bottom: 0;
        right: 20px;
    }
`;

