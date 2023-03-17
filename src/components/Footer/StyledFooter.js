import styled from "styled-components";
import { colors } from "../../global";

const Background = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
width: 100%;
background-color: ${colors.secondary};
padding: 64px 0;
`
const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap: 32px;
`
const SocialRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
color: ${colors.onSecondary};
font-size: 32px;
gap: 16px;
`
const LogoRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
gap: 8px;

`
const CopyrightText = styled.span`
font-style: italic;
font-weight: 100;
font-size: 8px;
line-height: 9px;
color: rgba(255,255,255,0.75);
`
const VerticalLine = styled.div`
height: 100px;
border: 1px solid rgba(255,255,255,0.75);
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
export { Background, Container, SocialRow, LogoRow, CopyrightText, VerticalLine, Logo, Link }