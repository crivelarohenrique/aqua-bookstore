import { Link } from 'react-router-dom';
import { 
    HeaderContainer, 
    HeaderLogoWrapper
} from './StyledHeader'
import { GiOpenBook } from "react-icons/gi";
import Navbar from '../Navbar';
import { theme } from '../../styles/theme';
import MenuBurger from '../MenuBurger';

function Header() { 
    return (
    <HeaderContainer>
        <HeaderLogoWrapper>
            <Link to='/'>
                <GiOpenBook size='3em' color={theme.colors.iconColors}/>
            </Link>
        </HeaderLogoWrapper>
        <MenuBurger />
        <Navbar />
    </HeaderContainer>
)}

export default Header;