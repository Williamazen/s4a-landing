import { HeaderContainer, HeaderBody, Link } from "./styledHeader"
import { language } from "../../global"

export default function Header(props) {
    return (

        <HeaderContainer >
            <Link href="/" aria-label={language.alt.logo}>
                <HeaderBody isMobile={props.isMobile} src='./logo.png' aria-hidden />
            </Link>
        </HeaderContainer>


    )
}