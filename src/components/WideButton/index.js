import { DownloadButtonContainer, ButtonLabel, ButtonLabelGroup } from "./StyledWideButton"


export default function WideButton(props) {
    return (
        <DownloadButtonContainer href={props.href ? props.href : "#"} desktop={props.desktop} aria-label={props.label}>
            <ButtonLabelGroup>
                <ButtonLabel weight={600} size={props.size}>{props.label}</ButtonLabel>
            </ButtonLabelGroup>
        </DownloadButtonContainer>
    )
}