import './Main.css'
import React, {useEffect, useState} from "react";
import CardComponent from "../CardComponent/CardComponent";
import * as api from "../../api/api";
const Main = () => {
    const [data, setData] = useState(null)
    const [isSelected, setIsSelected] = useState(false)

    useEffect(() => {
        api
            .getBuildings(localStorage.getItem('token'))
            .then((res => setData(res)))
            .catch((err) => console.log(err))
    }, [isSelected])

    return (
        <section className={'main'}>
            {
                data?.map((card) => (<CardComponent card={card} setIsSelected={setIsSelected} isSelected={isSelected}/>))
            }
        </section>
    )
}

export default Main
