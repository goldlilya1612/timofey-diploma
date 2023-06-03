import {Button, Card, CardBody, Flex, Image, Stack, Text} from "@chakra-ui/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import * as api from "../../api/api";
import {useState} from "react";

const CardComponent = ({card, setIsSelected, isSelected}) => {
    const userId = Number(localStorage.getItem('userId'));
    const isCardSelected = card.buildings_used.includes(userId);
    const handleCardClick = () => {
        // if (isCardSelected) return;
        api.createApplication(localStorage.getItem('token'), {building: card.id})
            .then(() => {
                setIsSelected(!isSelected)
            })
            .catch((err) => console.log(err))
    }

    return (<Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'}
        w={900}
        H={300}
        marginBottom={'20px'}
    >
        <Image w={200} h={200} src={require(`../../images/image-${card.id}.png`)}/>

        <Stack flexGrow={1}>
            <CardBody style={{display: 'flex', justifyContent: 'space-between'}}>
                <Flex w={'70%'} flexDirection={'column'}>
                    <Flex>
                        <Text fontWeight={500}>Город:&ensp;</Text>
                        <Text>{card.address}</Text>
                    </Flex>
                    <Flex>
                        <Text fontWeight={500}>Площадь:&ensp;</Text>
                        <Text>{card.square} м<sup>2</sup></Text>
                    </Flex>
                    <Flex flexDirection={'column'} alignItems={'start'}>
                        <Text fontWeight={500}>Описание: </Text>
                        <Text textAlign={'left'}>{card.descript}</Text>
                    </Flex>
                </Flex>
                <Flex flexDirection={'column'} justifyContent={'space-between'}>
                    <Flex flexDirection={'column'} >
                        <Text fontWeight={500}>Цена:&ensp;</Text>
                        <Text>от {card.price} &#8381;</Text>
                    </Flex>
                    <Button style={{backgroundColor: isCardSelected ? '#9c9c9c' : '#5b53ad'}} disabled={isCardSelected} variant='solid' colorScheme='blue' onClick={handleCardClick}>
                        {isCardSelected ? 'Заявка оставлена' : 'Оставить заявку'}
                    </Button>
                </Flex>
            </CardBody>
        </Stack>
    </Card>)
}

export default CardComponent
