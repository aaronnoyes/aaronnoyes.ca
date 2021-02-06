import styled from 'styled-components'

const Container = styled.header`
    color: white;
    width: 100vw;
    text-align: center;
    font-size: 2em;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const LogoContainer = styled.div`
    display: flex;
    align-items: stretch;
    padding: 20px
`;

const LogoSquare = styled.div`
    height: 50px;
    width: 50px;
    background-color: ${props => props.co ? props.co : 'none'}
`;

function Header() {
    return (
        <Container>
            <LogoContainer>
                <LogoSquare co='red'></LogoSquare>
                <LogoSquare co='blue'></LogoSquare>
                <LogoSquare co='orange'></LogoSquare>
                <LogoSquare co='green'></LogoSquare>
            </LogoContainer>
        </Container>
    )
}

export default Header;