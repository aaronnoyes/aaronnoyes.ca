import styled from 'styled-components'

const Logo = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 5rem;
    margin: 1rem;
    width: 5rem;
    @media (min-width: 688px) {
        height: 7rem;
        width: 7rem;
    }
    @media (min-width: 992px) {
        height: 10rem;
        width: 10rem;
    }
`;

const Image = styled.img`
    max-height: 100%;
    max-width: 100%;
`;

const SkillImage = ({logo, index}) => {
    return (
        <Logo>
        <Image
            alt={logo.name}
            src={`/assets/logos/${logo.file}`}
            key={index}
        />
    </Logo>
    )
}

export default SkillImage