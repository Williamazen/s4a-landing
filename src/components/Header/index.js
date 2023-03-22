import { HeaderContainer, HeaderBody, Link } from "./styledHeader"
import { language } from "../../global"

export default function Header(props) {
    return (

        <HeaderContainer>
            <Link href="/">
                <HeaderBody isMobile={props.isMobile} src='./logo.png' alt={language.alt.logo} />
            </Link>
        </HeaderContainer>


    )
}