import Socials from '../Socials'
import DownloadButton from '../DonwloadButton'
import { Container, Background, Logo, MainTitle, SubTitle, Highlights, Text, Row, Link } from './StyledAbout'
import { BsGooglePlay, BsApple } from 'react-icons/bs';
import { links, language } from '../../global';

export default function AboutBody() {

    return (
        <>
            <Background>
                <Link href='/'><Logo src='./logo.png' /></Link>
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
                        Cemitérios:
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
                        <DownloadButton href={links.playStore} size={13} label="Google Play" icon={<BsGooglePlay size={"24px"} />} role={language.alt.buttons.appStore} />
                        <DownloadButton href={links.appStore} size={16} label="App Store" icon={<BsApple size={"24px"} />} role={language.alt.buttons.appStore} />
                    </Row>
                </Container>
            </Row>
        </>
    )
}