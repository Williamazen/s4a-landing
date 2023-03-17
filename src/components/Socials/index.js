import { SocialRow, Link } from './StyledSocials'
import { AiFillInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { MdMail } from 'react-icons/md';
import { links } from '../../global';

export default function Socials(props) {
    return (
        <SocialRow {...props}>
            <Link href={links.instagram} target="_blank"> <AiFillInstagram /></Link>
            <Link href={links.facebook} target="_blank"> <FaFacebookSquare /></Link>
            <Link href={links.email} target="_blank"> <MdMail /></Link>
        </SocialRow>
    )
}