import Socials from '../Socials'
import DownloadButton from '../DonwloadButton'
import { Container, Background, Logo, MainTitle, SubTitle, Highlights, Text, Row, Link } from './StyledAbout'
import { BsGooglePlay, BsApple } from 'react-icons/bs';
import { links } from '../../global';


export default function AltHeader() {

    return (
        <>
            <Background>
                <Link href='/'><Logo src='./logo.png' /></Link>
            </Background>
            <Row>
                <Container>
                    <MainTitle>Oque é a Spaces4All?</MainTitle>

                    <SubTitle>Introdução</SubTitle>
                    <Text>
                        O projeto Spaces4All é uma solução digital permite a deslocação em espaços público urbanos do concelho de Lisboa, para pessoas com deficiências visuais, auditivas e
                        motoras, apresentando mapas detalhados com percursos, navegação GPS, trajetos
                        pré-definidos e roteiros culturais que possibilitam um aproveitamento com qualidade
                        dos espaços públicos que Lisboa tem para oferecer.
                    </Text>

                    <SubTitle>O projeto</SubTitle>
                    <Text>
                        A Spaces4All foca o acesso a espaços públicos, por parte de pessoas com deficiências visuais, auditivas e motoras, com segurança e qualidade, apoiando e acompanhando a deslocação dentro dos espaços públicos, recorrendo a navegação GPS do local
                        utilizando ferramentas e software de acessibilidade visuais, escritos e sonoros.<br /><br />

                        Focamos o acesso a espaços públicos urbanos (jardins, parques, cemitérios, etc.…) e a navegação dentro dos mesmos, com um foco na dimensão cultural dos locais.<br /><br />

                        A solução digital considera a verificação e construção de acessibilidade aos locais
                        públicos urbanos do concelho de Lisboa, focando os nossos esforços em apoiar
                        pessoas com deficiências visuais, auditivas e motoras.<br /><br />
                    </Text>

                    <SubTitle>Locais</SubTitle>
                    <Highlights>
                        A Spaces4All foca a utilização de espaços públicos urbanos, incluindo:
                        Jardins e parques públicos:
                    </Highlights>
                    <Text>
                        No concelho de Lisboa existem diversos espaços verdes de uso livre para todos, onde é possível passear e, observar a biodiversidade da fauna e flora, e vislumbrar as belas
                        paisagens da capital portuguesa. Um local de encontros, para convívio com família ou
                        amigos. Os jardins e parques urbanos são áreas verdes que podem trazer qualidade de
                        vida para toda a população. Realizar atividades neles traz diferentes benefícios
                        psicológicos, sociais e físicos à saúde.
                    </Text>
                    <Highlights>
                        Cemitérios:
                    </Highlights>
                    <Text>
                        Nos últimos anos, cada vez mais turistas passeiam pelos vários túmulos e mausoléus
                        dos cemitérios portugueses. Nestes existem peças com uma arquitetura diferente e,
                        apesar do que simbolizam, apelativa. Os cemitérios de Lisboa são locais uma grande
                        riqueza patrimonial e cultural que poucas pessoas conhecem.
                    </Text>

                    <SubTitle>Participa no projeto</SubTitle>
                    <Text>
                        Se tens interesse no projeto, segue-nos nas nossas redes sociais:
                    </Text>
                    <Socials alt={true} />
                    <Text>
                        Ou descarregue a app e experimente:
                    </Text>
                    <Row gap={8}>
                        <DownloadButton href={links.playStore} size={13} label="Google Play" icon={<BsGooglePlay size={"24px"} />} />
                        <DownloadButton href={links.appStore} size={16} label="App Store" icon={<BsApple size={"24px"} />} />
                    </Row>
                </Container>
            </Row>
        </>
    )
}