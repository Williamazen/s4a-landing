import { Container, Card, Logo } from "./StyledPartnerRow"
import { language } from "../../global"

export default function PartnerRow() {
    return (
        <Container>
            <Card>
                <a href="https://cnod.pt">
                    <Logo src="./images/cnod.png" width={100} height={100} alt={language.alt.partners.CNOD} />
                </a>
            </Card>
            <Card>
                <a href="https://casapia.pt">
                    <Logo src="./images/CPL.png" width={100} height={100} alt={language.alt.partners.CPL} />
                </a>
            </Card>
            <Card>
                <a href="https://www.apd.org.pt">
                    <Logo src="./images/APD.png" width={200} height={100} alt={language.alt.partners.APD} />
                </a>
            </Card>
            <Card>
                <a href="https://fpdd.org">
                    <Logo src="./images/FPDD.png" width={300} height={100} alt={language.alt.partners.FPDD} />
                </a>
            </Card>
        </Container>
    )
}