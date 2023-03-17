import { Background, Container, LogoRow, CopyrightText, Logo, VerticalLine } from './StyledFooter';
import Socials from '../Socials';

export default function Footer() {
    return (
        <Background>
            <Container>
                <Socials />
                <LogoRow>
                    <Logo src='./ambigrama.svg' height={125} width={125} />
                    <VerticalLine />
                    <Logo src='./EU.svg' height={100} width={125} />
                    <Logo src='./voxpop.svg' height={125} width={125} />
                    <Logo src='./uia.svg' height={125} width={125} />
                    <VerticalLine />
                    <Logo src='./text.svg' height={125} width={125} />
                </LogoRow>
                <CopyrightText>
                    © 2023. LICENÇA DE ATRIBUIÇÃO SEM DERIVAÇÕES 4.0 INTERNACIONAL DA CREATIVE COMMONS..
                </CopyrightText>
            </Container>
        </Background>
    )
}