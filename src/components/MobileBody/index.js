import { BodyBackground, BodyContainer, Col, Row, Title, Slogan, PhoneFrame, Label } from "./styledBody"
import DownloadButton from "../DonwloadButton"
import { links, colors } from "../../global"
import { BsGooglePlay, BsApple } from 'react-icons/bs';
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
                            <Title>
                                A beleza de Lisboa acessível a <span style={{ color: colors.secondary }}>todos.</span>
                            </Title>
                            <Slogan>
                                Mais de 50 localidades mapeadas pensando em você.
                            </Slogan>
                        </Col>
                        <Col gap={8}>
                            <Row gap={8}>
                                <DownloadButton href={links.playStore} size={13} label="Google Play" icon={<BsGooglePlay size={"24px"} />} />
                                <DownloadButton href={links.appStore} size={16} label="App Store" icon={<BsApple size={"24px"} />} />
                            </Row>
                            <WideButton href="/about" size={17} label="Saiba Mais" />
                        </Col>
                        <PhoneFrame src="./smartphone.png" />
                    </Col>
                    <Row>
                        <Col gap={16}>
                            <Label>Parcerias</Label>
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