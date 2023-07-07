import { DownloadButtonContainer, ButtonLabel, ButtonLabelGroup } from "./styledDownload"
export default function DownloadButton(props) {
    return (
        <DownloadButtonContainer href={props.href ? props.href : ""} target="_blank" aria-label={"Get it on" + props.label} disabled={props.disabled}>
            {props.icon && props.icon}
            <ButtonLabelGroup>
                <ButtonLabel weight={500} size={10}>Get it on</ButtonLabel>
                <ButtonLabel weight={500} size={props.size}>{props.label}</ButtonLabel>
            </ButtonLabelGroup>
        </DownloadButtonContainer>
    )
}