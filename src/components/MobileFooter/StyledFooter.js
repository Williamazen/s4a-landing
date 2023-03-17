import styled from "styled-components";
import { colors } from "../../global";

const Background = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;

background-color: ${colors.secondary};
padding: 64px 16px;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
gap: 32px;
`

const LogoRow = styled.div`
display: flex;
flex-direction: row;
flex-wrap: wrap;
align-items: center;
justify-content: center;
gap: 8px;


`
const CopyrightText = styled.span`
font-style: italic;
width: 100%;
text-align: center;
font-weight: 100;
font-size: 8px;
line-height: 9px;
color: rgba(255,255,255,0.75);
`

const Logo = styled.img`
width: ${props => props.width + "px"};
height: ${props => props.height + "px"};
`
const Link = styled.a`
text-decoration: none;
color: inherit;
&:hover,
:focus{
  -webkit-filter: brightness(85%);
  transition: all 0.3s ease;
  cursor: pointer;
}
`
export { Background, Container, LogoRow, CopyrightText, Logo, Link }