import { BodyBackground, BodyContainer, Col, Row, Title, Slogan, PhoneFrame, Label } from "./styledBody"
import DownloadButton from "../DonwloadButton"
import BackgroundShape from "../BackgroundShape"
import { links, colors, language } from "../../global"
import { BsGooglePlay, BsApple } from 'react-icons/bs';
import WideButton from "../WideButton";
import PartnerRow from "../PartnerRow";
import Footer from "../Footer";

export default function DesktopBody(props) {

    return (
        <>
            <BodyBackground>
                <BodyContainer>
                    <Row>
                        <Col gap={16}>
                            <Col gap={8}>
                                <Title>
                                    {language.text.mainTitle} <bold style={{ color: colors.secondary }}> {language.text.titleHighlight}</bold>
                                </Title>
                                <Slogan>
                                    {language.text.subTitle}
                                </Slogan>
                            </Col>
                            <Col gap={8}>
                                <Row gap={8}>
                                    <DownloadButton href={links.playStore} size={13} label="Google Play" icon={<BsGooglePlay size={"24px"} />} />
                                    <DownloadButton href={links.appStore} size={16} label="App Store" icon={<BsApple size={"24px"} />} />
                                </Row>
                                <WideButton href="/about" size={17} label={language.text.moreInfoButton} />
                            </Col>
                        </Col>

                        <PhoneFrame role="image" src="./smartphone.png" alt={language.alt.screenshot} />
                    </Row>
                    <Row>
                        <Col gap={16}>
                            <Label> {language.text.partners}</Label>
                            <PartnerRow />
                        </Col>
                    </Row>
                    <Row>
                        <Footer />
                    </Row>
                </BodyContainer>
            </BodyBackground>
            <BackgroundShape />
        </>
    )
}