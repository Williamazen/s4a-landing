import styled from "styled-components";
import { colors } from "../../global"

const value = 400;
const BackgroundShape = styled.div`
mask: radial-gradient(${value * 2.2361 + "px"} at 75% calc(100% - ${value * 3 + "px"}),#000 99.95%,#0000 100.05%) calc(50% - ${value * 2 + "px"}) 0/${value * 4 + "px"} 100%,
    radial-gradient(${value * 2.2361 + "px"} at 75% calc(100% + ${value * 2 + "px"}),#0000 99.95%,#000 100.05%) 50% calc(100% - ${value * 1 + "px"})/${value * 4 + "px"} 100% repeat-x;
width: 100%;
height: 600px;
background-color:${colors.primary};
`;

export default BackgroundShape