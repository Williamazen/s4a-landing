import styled from "styled-components";
import { colors } from "../../global";

const Container = styled.div`
display: flex;
flex-direction: column;
max-width: 1000px;
padding: 32px 16px;
gap: 32px;
`

const Background = styled.div`
background-color: ${colors.primary};
padding: 16px;
`
const Logo = styled.img`
width: 150px;
height: 90px;
`
const MainTitle = styled.span`
font-size: 32px;
font-weight:bold ;
`

const SubTitle = styled.span`
font-size: 22px;
font-weight: bold;
`

const Highlights = styled.span`
font-size: 16px;
font-weight:bold;
`
const Text = styled.span`
font-size: 16px;
`
const Row = styled.div`
display: flex;
flex-direction: row;
gap: ${props => props.gap + "px"};
background-color: transparent;
justify-content: center;
align-items: flex-start;
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

export { Container, Background, Logo, MainTitle, SubTitle, Highlights, Text, Row, Link }