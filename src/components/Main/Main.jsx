import './Main.css'
import React, {useEffect, useState} from "react";
import CardComponent from "../CardComponent/CardComponent";
import * as api from "../../api/api";
const Main = () => {
    const [data, setData] = useState(null)

    useEffect(() => {
        api
            .getBuildings(localStorage.getItem('token'))
            .then((res => setData(res)))
            .catch((err) => console.log(err))
    }, [])

    return (
        <section className={'main'}>
            {
                data?.map((card) => (<CardComponent card={card} />))
            }
        </section>
    )
}

export default Main
