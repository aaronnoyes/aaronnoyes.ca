import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    flex-flow: column nowrap;
    border-radius: 10px;
    min-height: 400px;
    min-width: 400px;
    color: white;
    background-size: cover;
    margin: 20px;
    flex-grow: 1;
    padding: 20px 50px;
    align-items: center;
    justify-content: center;
    background: ${props => props.bg ? `url(${props.bg})` : 'none'};
    background-color: rgba(51, 48, 51, 0.397);
    background-size: fill;
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);

    & > h1 {
        text-align: center;
        font-size: 5em;
    }
    
    & > p {
        line-height: 1.5em;
        font-size: 1.2em;
    }
    
    & img {
        width: 300px;
    }
    
    &:hover {
        transform: scale(1.01);
    }

    @media screen and (max-width: 500px) {
        min-width: 200px;
    }
`;

function Card(props) {
    const inline_style = {}

    if(props.image) {
        inline_style.backgroundImage = `url(${props.image})`
    }

    return (
        <Container bg={props.image}>
            {props.children}
        </Container>
    )
}

export default Card;
