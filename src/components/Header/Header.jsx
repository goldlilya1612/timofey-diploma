import './Header.css'
import Logo from "../../images/Logo";
import {Box, Button, Flex} from "@chakra-ui/react";
const Header = () => {
    return (
        <header className={'header'}>
            <Flex>
                <Logo />
                <p className={'header__title'}>Название компании</p>
            </Flex>
            <Button>Выйти</Button>
        </header>
    )
}

export default Header
