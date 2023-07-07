import { BodyBackground, BodyContainer, Col, Row, Title, Slogan, PhoneFrame, Label } from "./styledBody"
import DownloadButton from "../DonwloadButton"
import { links, colors, language } from "../../global"
import { BsGooglePlay, BsApple, BsGithub } from 'react-icons/bs';
import PartnerRow from "../PartnerRow";
import MobileFooter from "../MobileFooter";
import WideButton from "../WideButton";
export default function DesktopBody(props) {

    return (
        <>
            <BodyBackground>
                <BodyContainer>
                    <Col gap={32}>
                        <Col gap={8}>
                            <Title aria-label={language.text.mainTitle}>
                                {language.text.mainTitle}<span style={{ color: colors.secondary }}> {language.text.titleHighlight}</span>
                            </Title>
                            <Slogan>
                                {language.text.subTitle}
                            </Slogan>
                        </Col>
                        <Col gap={8}>
                            <Row gap={8}>
                                {/*<DownloadButton href={links.appStore} size={16} label="App Store" icon={<BsApple size={"24px"} />} />*/}
                                <DownloadButton href={links.playStore} size={13} label="Google Play" icon={<BsGooglePlay size={"24px"} />} />
                                <DownloadButton href={links.github} size={16} label="GitHub" icon={<BsGithub size={"24px"} />} />
                            </Row>
                            <WideButton href="/about" size={17} label={language.text.moreInfoButton} />
                        </Col>
                        <PhoneFrame src="./images/smartphone.png" alt={language.alt.screenshot} />
                    </Col>
                    <Row>
                        <Col gap={16}>
                            <Label>{language.text.partners}</Label>
                            <PartnerRow />
                        </Col>
                    </Row>
                    <Row>
                        <MobileFooter />
                    </Row>
                </BodyContainer>
            </BodyBackground>
        </>
    )
}
