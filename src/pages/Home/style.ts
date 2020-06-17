import styled from 'styled-components';


export const HomePage = styled.div `
    display: grid;
    position: relative;
    grid-template-columns: 2fr 3fr 2fr;
    height: 100vh;
`;
export const ContentRight = styled.aside  `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 200px;
    div:first-child {
        margin-top: 100px;
    }
    div > img {
        width: 500px;
        height: 200px;
    }
`;


export const ContentMain = styled.main `
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 200px;
    background: linear-gradient(
        90deg,
        ${ (props) => props.theme.colors.primary },
        ${ (props) => props.theme.colors.background }
    );
`;
/*
.button {
    width: 200px;
    height: 50px;
    background: #005;
    display: flex;
    align-items: center;
    border-radius: 10px;
    text-decoration: none;
    transition-duration: .2s;
}
.button > span.icon {
    background: linear-gradient(180deg, #008, #002);
    height: 100%;
    display: flex;
    align-items : center;
    padding: 0 18px;
    border-radius: 10px 0 0 10px;
}
.button > span.press {
    text-align: center;
    font-size: 1.3em;
    margin: 0 auto;
    
}

.button:hover {
    border-bottom: 5px solid #002;
    box-shadow: 0 0 10px #008;
}

.aside-text{
    display: flex;
    flex-direction: row;
    font-size: 3em;
    align-items: center;
    justify-content: flex-start;
    background: #002;
    padding: 10px;
    border-radius: 20px;
}*/
    

export const Picture = styled.div `
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 20px 0;
    background: ${ (props) => props.theme.colors.background };
    padding: 50px;
    border-radius: 40px;
    img {
        width: 200px;
        height: 200px;
        border-radius: 20px;
    }
    h1 {
        display: flex;
        align-items: center;
        justify-content: center;
    }
`;