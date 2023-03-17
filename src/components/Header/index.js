import { HeaderContainer, HeaderBody, Link } from "./styledHeader"

export default function Header(props) {
    return (

        <HeaderContainer>
            <Link href="/">
                <HeaderBody isMobile={props.isMobile} src='./logo.png' />
            </Link>
        </HeaderContainer>


    )
}