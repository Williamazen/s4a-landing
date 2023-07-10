import Socials from '../Socials'
import DownloadButton from '../DonwloadButton'
import { Container, Background, Logo, MainTitle, SubTitle, Highlights, Text, Row, Link } from './StyledAbout'
import { BsGooglePlay, BsApple, BsGithub } from 'react-icons/bs';
import { links, language } from '../../global';

export default function AboutBody() {

    return (
        <>
            <Background>
                <Link href='/' aria-label={language.alt.logo}><Logo src='./images/logo.png' aria-hidden /></Link>
            </Background>
            <Row>
                <Container>
                    <MainTitle>{language.about.mainTitle}</MainTitle>
                    <SubTitle>{language.about.title[0]}</SubTitle>
                    <Text>
                        {language.about.text[0]}
                    </Text>

                    <SubTitle>{language.about.title[1]}</SubTitle>
                    <Text>
                        <p>{language.about.text[1][0]}</p>
                        <br />
                        <p>{language.about.text[1][1]}</p>
                        <br />
                        <p>{language.about.text[1][2]}</p>
                        <br />
                        <p>{language.about.text[1][3]}</p>
                    </Text>

                    <SubTitle>{language.about.title[2]}</SubTitle>
                    <Highlights>
                        {language.about.highlights[0]}<br /><br />
                        {language.about.highlights[1]}
                    </Highlights>
                    <Text>
                        {language.about.text[2]}
                    </Text>
                    <Highlights>
                        {language.about.highlights[2]}
                    </Highlights>
                    <Text>
                        {language.about.text[3]}
                    </Text>

                    <SubTitle>{language.about.title[3]}</SubTitle>
                    <Text>
                        {language.about.text[4]}
                    </Text>
                    <Socials alt={true} />
                    <Text>
                        {language.about.text[5]}
                    </Text>
                    <Row gap={8}>
                        <DownloadButton href={links.playStore} size={13} label="Google Play" icon={<BsGooglePlay size={"24px"} />} disabled />
                        <DownloadButton href={links.github} size={16} label="GitHub" icon={<BsGithub size={"24px"} />} />
                    </Row>
                </Container>
            </Row>
        </>
    )
}