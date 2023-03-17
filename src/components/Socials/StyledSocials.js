import styled from "styled-components"
import { colors } from "../../global"
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
const SocialRow = styled.div`
display: flex;
flex-direction: row;
align-items: center;
color: ${props => props.alt ? colors.secondary : colors.onSecondary};
font-size: 32px;
gap: 16px;
`

export { Link, SocialRow }