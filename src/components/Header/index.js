import { HeaderContainer, HeaderBody } from "./styledHeader"

export default function Header(props) {
    return (
        <HeaderContainer>
            <HeaderBody isMobile={props.isMobile} src='./logo.png' />
        </HeaderContainer>
    )
}