import {
    Box,
    Button,
    Flex,
    FormControl,
    FormLabel,
    Heading,
    Input,
    InputGroup,
    InputLeftAddon, InputRightElement,
    Link,
    Text
} from "@chakra-ui/react";
import './RegistrationPage.css'
import {useCallback, useState} from "react";
const RegistrationPage = ({onRegister}) => {
    const [formData, setFormData] = useState({
        fio: '',
        email: '',
        phone: '',
        telegramName: '',
        password: '',
    });
    const [show, setShow] = useState(false)
    const isDisabled = !(formData.fio && formData.email && formData.email.includes('@') && formData.phone && formData.password)

    const resetForm = useCallback(
        (
            newData = {
                fio: '',
                email: '',
                phone: '',
                telegramName: '',
                password: '',
            },
        ) => {
            setFormData(newData);
        },
        [setFormData]
    );
    const handleShowClick = () => setShow(!show)
    const handleSubmit = (e) => {
        const data = {...formData, phone: formData.phone}
        e.preventDefault();
        resetForm();
        onRegister(data);
    }

    return (
        <section className={'registrartion'}>
            <Flex flexDir={'column'} alignItems={'center'} justifyContent={'center'}>
                <Heading marginTop={'100px'} marginBottom={'30px'}>Регистрация</Heading>
                <form className={'form'} onSubmit={handleSubmit}>
                    <Box marginBottom={'30px'}>
                        <FormControl isRequired marginBottom={'10px'}>
                            <FormLabel>ФИО</FormLabel>
                            <Input type='text' value={formData?.fio} onChange={(e) => {setFormData({
                                ...formData,
                                fio: e.target.value,
                            })}} />
                        </FormControl>
                        <FormControl isRequired marginBottom={'10px'}>
                            <FormLabel>Email</FormLabel>
                            <Input type='email' value={formData?.email} onChange={(e) => {setFormData({
                                ...formData,
                                email: e.target.value,
                            })}} />
                        </FormControl>
                        <FormControl isRequired marginBottom={'10px'}>
                            <FormLabel>Номер телефона</FormLabel>
                            <InputGroup>
                                <InputLeftAddon children='+7' />
                                <Input type='tel' value={formData?.phone} onChange={(e) => {setFormData({
                                    ...formData,
                                    phone: e.target.value,
                                })}}/>
                            </InputGroup>
                        </FormControl>
                        <FormControl marginBottom={'10px'}>
                            <FormLabel>Ник в telegram</FormLabel>
                            <Input type='text' value={formData?.telegramName} onChange={(e) => {setFormData({
                                ...formData,
                                telegramName: e.target.value,
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
                    <Button isDisabled={isDisabled} w={'200px'} type={"submit"}>Зарегистрироваться</Button>
                </form>
                <Text marginBottom={'40px'}>Для авторизации нажмите <Link href={'/signin'} color={'blue'}>здесь</Link></Text>
            </Flex>
        </section>
    )
}

export default RegistrationPage
