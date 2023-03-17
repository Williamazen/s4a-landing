import { Container, Card, Logo } from "./StyledPartnerRow"

export default function PartnerRow() {
    return (
        <Container>
            <Card>
                <Logo src="./cnod.png" />
            </Card>
            <Card>
                <Logo src="./CPL.png" />
            </Card>
        </Container>
    )
}