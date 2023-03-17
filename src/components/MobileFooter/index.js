import { Background, Container, LogoRow, CopyrightText, Logo } from './StyledFooter';
import Socials from '../Socials';


export default function MobileFooter() {
    return (
        <Background>
            <Container>
                <Socials />
                <LogoRow>
                    <Logo src='./ambigrama.svg' height={100} width={100} />
                    <Logo src='./EU.svg' height={75} width={75} />
                    <Logo src='./voxpop.svg' height={100} width={100} />
                    <Logo src='./uia.svg' height={100} width={100} />
                    <Logo src='./text.svg' height={100} width={100} />
                </LogoRow>
                <CopyrightText>
                    © 2023. LICENÇA DE ATRIBUIÇÃO SEM DERIVAÇÕES 4.0 INTERNACIONAL DA CREATIVE COMMONS..
                </CopyrightText>
            </Container>
        </Background>
    )
}