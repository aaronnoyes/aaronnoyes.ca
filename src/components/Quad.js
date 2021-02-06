import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    justify-content: space-around;
    flex-flow: row wrap;
    width: 440px;
    margin: 20px;
    flex-grow: 1;
`;

const Tile = styled.div`
    flex-grow: 1;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(51, 48, 51, 0.397);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    height: 200px;
    width: 40%;
    margin: 10px 20px;

    &:hover {
        transform: scale(1.01);
    }
`;

const TileImage = styled.img`
    max-width: 30%;
`;

function Quad(props) {
    return (
        <Container>
            {props.a1 &&
                <Tile>
                    <TileImage src={props.a1}></TileImage>
                </Tile>
            }
            {props.a2 &&
                <Tile>
                    <TileImage src={props.a2}></TileImage>
                </Tile>
            }
            {props.b1 &&
                <Tile>
                    <TileImage src={props.b1}></TileImage>
                </Tile>
            }
            {props.b2 &&
                <Tile>
                    <TileImage src={props.b2}></TileImage>
                </Tile>
            }
        </Container>
    )
}

export default Quad;