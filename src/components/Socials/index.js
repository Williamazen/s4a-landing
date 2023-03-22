import { SocialRow, Link } from './StyledSocials'
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { links, language } from '../../global';

export default function Socials(props) {
    return (
        <SocialRow {...props}>
            <Link href={links.instagram} target="_blank" role="Instagram" > <AiFillInstagram /></Link>
            <Link href={links.facebook} target="_blank" role="Facebook"> <FaFacebookSquare /></Link>
            <Link href={links.email} target="_blank" role="email" > <MdMail /></Link>
        </SocialRow>
    )
}