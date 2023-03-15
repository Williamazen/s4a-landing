import styled from "styled-components";
import { colors } from "../../global"

const HeaderContainer = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
width: 100%;
background-color: ${colors.primary};

`;
const HeaderBody = styled.img`
width: ${props => props.isMobile ? '150px' : '250px'}; //5:3 aspect ratio
height: ${props => props.isMobile ? '90px' : '150px'};
&:hover,
:focus{
  cursor: pointer;
}
`;

export { HeaderContainer, HeaderBody }