import './Main.css'
import React from "react";
import CardComponent from "../CardComponent/CardComponent";
import {Swiper, SwiperSlide} from "swiper/react";
const Main = () => {
    return (
        <section className={'main'}>
            <CardComponent />
            <CardComponent />
            <CardComponent />
            <CardComponent />
        </section>
    )
}

export default Main
