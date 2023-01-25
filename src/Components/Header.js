import styled from 'styled-components';
import { FaLaptop, FaTabletAlt, FaMobileAlt } from 'react-icons/fa';
import useWindowSize from '../hooks/useWindowSize';

const Header = () => {
    const { width } = useWindowSize();
    return (
        <Wrapper className="gap-2">
            <Text>React Js Blog</Text>
            {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop />}
        </Wrapper>
    );
};

const Wrapper = styled.header`
    min-height: 50px;
    display: flex;
    align-items: center;
    padding-left: 10px;
    background: lightslategray;
`;

const Text = styled.p`
    font-family: Ubuntu, sans-serif;
    font-size: 20px;
    font-weight: 400;
`;

export default Header;
