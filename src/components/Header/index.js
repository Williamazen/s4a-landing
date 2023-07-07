import { HeaderContainer, HeaderBody, Link } from "./styledHeader"
import { language, locale } from "../../global"

export default function Header(props) {
    return (

        <HeaderContainer  >
            <Link href="/" aria-label={language.alt.logo} lang={locale}>
                <HeaderBody isMobile={props.isMobile} src='./images/logo.png' aria-hidden />
            </Link>
        </HeaderContainer>


    )
}