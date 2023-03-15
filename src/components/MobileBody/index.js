import { BodyBackground, BodyContainer, Col, Row, Title, Slogan } from "./styledBody"
import DownloadButton from "../DonwloadButton"
import { links, colors } from "../../global"
import { BsGooglePlay, BsApple } from 'react-icons/bs';

export default function DesktopBody(props) {

    return (
        <>
            <BodyBackground>
                <BodyContainer>
                    <Col gap={16}>
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
                        </Col>
                    </Col>
                </BodyContainer>
            </BodyBackground>
        </>
    )
}