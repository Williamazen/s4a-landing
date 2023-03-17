import styled from "styled-components";

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
border-top: 1px solid rgba(0,0,0,0.15);
padding-top: 16px;
gap: 32px;
`
const Card = styled.div`
width: 100px;
display: flex;
flex-direction: column;
gap: 8px;
align-items: center;
justify-content: center;
`
const Logo = styled.img`
width: 100px;
height: 100px;
`
const Line = styled.div`
width: 100%;
border-bottom: 1px solid rgba(0,0,0,0.15);
`
const Label = styled.span`
font-size: 15px;
line-height: 18px;
text-align: center;
color: #000000;
white-space: nowrap;
`

export { Container, Card, Logo, Line, Label }