import './Header.css'
import Logo from "../../images/Logo";
import {Button, Flex} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
const Header = () => {
    const navigate = useNavigate();

    return (
        <header className={'header'}>
            <Flex>
                <Logo />
                <p className={'header__title'}>ГК «Страна Девеломпент»</p>
            </Flex>
            <Button onClick={() => {
                localStorage.removeItem('token');
                localStorage.removeItem('userId');
                navigate('/signin');
            }}>Выйти</Button>
        </header>
    )
}

export default Header
