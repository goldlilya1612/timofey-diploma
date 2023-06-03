import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputRightElement,
    Link,
    Text
} from "@chakra-ui/react";
import {useState} from "react";

const AuthorizationPage = ({onLogin}) => {
    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });
    const [show, setShow] = useState(false)
    const isDisabled = !(formData.username && formData.username.includes('@') && formData.password)

    const handleSubmit = (e) => {
        e.preventDefault();
        onLogin(formData);
    }
    const handleShowClick = () => setShow(!show)

    return (
        <section className={'registrartion'}>
            <Flex flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
                <Heading marginBottom={'30px'}>Авторизация</Heading>
                <form className={'form'} onSubmit={handleSubmit}>
                    <Box marginBottom={'30px'}>
                        <FormControl isRequired marginBottom={'10px'}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' value={formData?.username} onChange={(e) => {setFormData({
                                ...formData,
                                username: e.target.value,
                            })}}/>
                        </FormControl>
                        <FormControl isRequired marginBottom={'10px'}>
                            <FormLabel>Пароль</FormLabel>
                            <InputGroup>
                                <Input type={show ? 'text' : 'password'} value={formData?.password} onChange={(e) => {setFormData({
                                    ...formData,
                                    password: e.target.value,
                                })}}/>
                                <InputRightElement width='6rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleShowClick}>
                                        {show ? 'Спрятать' : 'Показать'}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                    </Box>
                    <Button isDisabled={isDisabled} w={'200px'} type={"submit"}>Войти</Button>
                </form>
                <Text marginBottom={'40px'}>Для регистрации нажмите <Link href={'/signup'} color={'blue'}>здесь</Link></Text>
            </Flex>
        </section>
    )
}

export default AuthorizationPage
