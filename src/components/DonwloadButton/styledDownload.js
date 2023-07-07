import { colors } from "../../global"
import styled from "styled-components"

const DownloadButtonContainer = styled.a`
text-decoration: none;
display: flex;
flex-direction: row;
padding: 6px 12px;
background-color: ${colors.secondary};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
color: ${(props => props.disabled ? "#bbbbbb" : colors.onSecondary)};
gap: 8px;
height: 30px;
-webkit-filter: brightness(100%);
&:hover,
:focus{
  -webkit-filter: brightness(85%);
  transition: all 0.3s ease;
  cursor: pointer;
}
&:active{
  -webkit-filter: brightness(50%);
  transition: all 0.1s ease;
}
align-items: center;
pointer-events: ${(props => props.disabled ? "none" : "all")};
-webkit-filter:${(props => props.disabled ? "grayscale(60%)" : "")}; 
`
const ButtonLabel = styled.span`
font-weight: ${props => props.weight};
font-size: ${props => props.size + "px"};
vertical-align: middle;
letter-spacing: -0.03em;
`
const ButtonLabelGroup = styled.span`
display: flex;
flex-direction: column;
min-width: 80px;
gap: 4px;
`

export { DownloadButtonContainer, ButtonLabel, ButtonLabelGroup }