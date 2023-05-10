import {Button, Card, CardBody, Flex, Image, Stack, Text} from "@chakra-ui/react";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CardComponent = () => {
    return (<Card
        direction={{ base: 'column', sm: 'row' }}
        overflow='hidden'
        boxShadow={'rgba(149, 157, 165, 0.2) 0px 8px 24px'}
        w={900}
        H={300}
        marginBottom={'20px'}
    >
        <Swiper
            // install Swiper modules
            spaceBetween={50}
            slidesPerView={1}
            modules={[Navigation, Pagination, Scrollbar, A11y]}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
        >
            <SwiperSlide>
                <Image
                    objectFit='cover'
                    h={'100%'}
                    maxW={{ base: '100%', sm: '250px' }}
                    src='https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60'
                    alt='Caffe Latte'
                />
            </SwiperSlide>
            <SwiperSlide>
                <Image
                    objectFit='cover'
                    h={'100%'}
                    maxW={{ base: '100%', sm: '250px' }}
                    src='https://images.unsplash.com/photo-1682702750536-965e89de4450?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80'
                    alt='Caffe Latte'
                />
            </SwiperSlide>
        </Swiper>

        <Stack flexGrow={1}>
            <CardBody style={{display: 'flex', justifyContent: 'space-between'}}>
                <Flex w={'70%'} flexDirection={'column'}>
                    <Flex>
                        <Text fontWeight={500}>Адрес:&ensp;</Text>
                        <Text>Аптекарский переулок 15</Text>
                    </Flex>
                    <Flex>
                        <Text fontWeight={500}>Площадь:&ensp;</Text>
                        <Text>55 м<sup>2</sup></Text>
                    </Flex>
                    <Flex flexDirection={'column'} alignItems={'start'}>
                        <Text fontWeight={500}>Описание: </Text>
                        <Text textAlign={'left'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</Text>
                    </Flex>
                </Flex>
                <Flex flexDirection={'column'} justifyContent={'space-between'}>
                    <Flex flexDirection={'column'} >
                        <Text fontWeight={500}>Цена:&ensp;</Text>
                        <Text>от 100000000 &#8381;</Text>
                    </Flex>
                    <Button variant='solid' colorScheme='blue'>
                        Оставить заявку
                    </Button>
                </Flex>
            </CardBody>
        </Stack>
    </Card>)
}

export default CardComponent
