import { Container, Card, Logo } from "./StyledPartnerRow"
import { language } from "../../global"

export default function PartnerRow() {
    return (
        <Container>
            <Card>
                <Logo src="./cnod.png" width={100} height={100} alt={language.alt.partners.CNOD} />
            </Card>
            <Card>
                <Logo src="./CPL.png" width={100} height={100} alt={language.alt.partners.CPL} />
            </Card>
            <Card>
                <Logo src="./APD.png" width={200} height={100} alt={language.alt.partners.APD} />
            </Card>
        </Container>
    )
}