import { Background, Container, LogoRow, CopyrightText, Logo, VerticalLine } from './StyledFooter';
import Socials from '../Socials';
import { language } from '../../global';

export default function Footer() {
    return (
        <Background>
            <Container>
                <Socials />
                <LogoRow>
                    <Logo src='./images/ambigrama.svg' alt={language.alt.investors.ambigrama} height={125} width={125} />
                    <VerticalLine />
                    <Logo src='./images/EU.svg' alt={language.alt.investors.ERDF} height={100} width={125} />
                    <Logo src='./images/voxpop.svg' alt={language.alt.investors.voxpop} height={125} width={125} />
                    <Logo src='./images/uia.svg' alt={language.alt.investors.UIA} height={125} width={125} />
                    <VerticalLine />
                    <Logo src='./images/text.svg' alt={language.alt.investors.disclaimer} height={125} width={125} />
                </LogoRow>
                <CopyrightText>
                    {language.text.copyright}
                </CopyrightText>
            </Container>
        </Background>
    )
}