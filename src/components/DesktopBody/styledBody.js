import styled from "styled-components"
import { colors } from "../../global"

const BodyBackground = styled.div`
background-color: ${colors.primary};
width: 100%;
height: 150px;
`
const BodyContainer = styled.div`
position: absolute;
z-index: 1;
display: flex;
flex-direction: column;
gap: 64px;
justify-content: center;
width: 100%;
padding-top: 32px;
`
const Col = styled.div`
display: flex;
flex-direction: column;
gap: ${props => props.gap + "px"};
padding: 8px;
background-color: transparent;
justify-content: center;
align-items: center;
width: ${props => props.width + "%"};;
`
const Row = styled.div`
display: flex;
flex-direction: row;
gap: ${props => props.gap + "px"};
background-color: transparent;
justify-content: center;
align-items: flex-start;
flex-wrap: wrap;

width: 100%;
`
const Title = styled.div`
max-width: 500px;
font-weight: 700;
font-size: 50px;
text-align: center;
color: #FFFFFF;
line-height: 59px;
letter-spacing: -0.03em;
`
const Slogan = styled.div`

font-size: 18px;
text-align: center;
color: #FFFFFF;
`
const PhoneFrame = styled.img`
position: relative;
width: 300px;
height: 600px;
filter: drop-shadow(10px 14px 16px rgba(0, 0, 0, 0.25));
`
const Label = styled.span`
font-weight: 600;
font-size: 32px;
text-align: center;
color: ${colors.secondary};

`
export { BodyBackground, BodyContainer, Col, Row, Title, Slogan, PhoneFrame, Label }