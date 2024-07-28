import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { GiOpenBook } from "react-icons/gi";
import {
    FooterContainer, 
    FIconLink,
    FIconText,
    FTextFooter,
    FIconWrapper,
    FLogoWrapper,
    } from './StyledFooter'
import { theme } from '../../styles/theme';

function Footer() {
    const icons = [FaGithub, FaLinkedin]
    const textIcon = ['Github', 'LinkedIn']
    const linksIcon = ['https://github.com/crivelarohenrique','https://www.linkedin.com/in/henrique-crivelaro-072025215/']

    return (
    <FooterContainer>
        <FLogoWrapper>
            <GiOpenBook size='2em' color={theme.colors.iconColors}/>
        </FLogoWrapper>
        <FTextFooter>2024 © Desenvolvido por Henrique Crivelaro | React & Express</FTextFooter>
        <FIconWrapper>
            {icons.map((IconComponent , index) => (
                <FIconLink href={linksIcon[index]} key={index} target='_blank'>
                    <IconComponent size="1.5em" color={theme.colors.iconColors}/>
                    <FIconText>{textIcon[index]}</FIconText>
                </FIconLink>
            ))}
        </FIconWrapper>
    </FooterContainer>
)}

export default Footer;