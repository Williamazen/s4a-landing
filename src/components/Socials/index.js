import { SocialRow, Link } from './StyledSocials'
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { links } from '../../global';

export default function Socials(props) {
    return (
        <SocialRow {...props}>
            <Link href={links.instagram} target="_blank" aria-label="Instagram" > <AiFillInstagram aria-label="Instagram" /></Link>
            <Link href={links.facebook} target="_blank" aria-label="Facebook"> <FaFacebookSquare aria-label="Facebook" /></Link>
            <Link href={links.email} target="_blank" aria-label="email" > <MdMail aria-label="Email" /></Link>
        </SocialRow>
    )
}
