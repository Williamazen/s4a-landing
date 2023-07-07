import { colors } from "../../global"
import styled from "styled-components"

const DownloadButtonContainer = styled.a`
height: 30px;
width: 100%;
padding: 6px 0px;
text-decoration: none;
display: flex;
flex-direction: row;
background-color: ${colors.onSecondary};
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 6px;
color: ${colors.secondary};
gap: 8px;
align-items: center;
justify-content: center;
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
justify-content: space-around;
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