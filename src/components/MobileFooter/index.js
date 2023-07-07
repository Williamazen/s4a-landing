import { Background, Container, LogoRow, CopyrightText, Logo } from './StyledFooter';
import Socials from '../Socials';
import { language } from '../../global';

export default function MobileFooter() {
    return (
        <Background>
            <Container>
                <Socials />
                <LogoRow>
                    <Logo src='./images/ambigrama.svg' alt={language.alt.investors.ambigrama} height={100} width={100} />
                    <Logo src='./images/EU.svg' alt={language.alt.investors.ERDF} height={75} width={75} />
                    <Logo src='./images/voxpop.svg' alt={language.alt.investors.voxpop} height={100} width={100} />
                    <Logo src='./images/uia.svg' alt={language.alt.investors.UIA} height={100} width={100} />
                    <Logo src='./images/text.svg' alt={language.alt.investors.disclaimer} height={100} width={100} />
                </LogoRow>
                <CopyrightText>
                    {language.text.copyright}
                </CopyrightText>
            </Container>
        </Background>
    )
}