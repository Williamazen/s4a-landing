import styled from "styled-components"
import { colors } from "../../global"

const BodyBackground = styled.div`
background-color: ${colors.primary};
width: 100%;
`
const BodyContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
width: 100%;
`
const Col = styled.div`
display: flex;
flex-direction: column;
gap: ${props => props.gap + "px"};
padding: 8px;
background-color: transparent;
justify-content: center;
align-items: center;
`
const Row = styled.div`
display: flex;
flex-direction: row;
gap: ${props => props.gap + "px"};
background-color: transparent;
justify-content: center;
align-items: center;
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

export { BodyBackground, BodyContainer, Col, Row, Title, Slogan }