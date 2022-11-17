import React, { useEffect, useState } from "react";
import './Continents.css'
import s from './Home.module.css'
import Nav from "../Nav/Nav";
import { useDispatch, useSelector } from 'react-redux'
import { getCountries } from "../../redux/actions";
import Card from "../Card/Card";
import Loader from "../Loader/Loader";
import Filters from "../Filters/Filters";
import Pagination from "../Pagination/Pagination";

const Home = () => {

    const dispatch = useDispatch()
    const sorting = useSelector(state => state.sorting)

    const [sort, setSort] = useState(true)

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <div className={s.container}>
            {sorting.length ?
                <div>
                    <Nav />
                    <Filters setSort={setSort} sort={sort} />
                    <div className={s.gridContainer}>
                        <div className={s.grid}>
                            {sorting?.map(e => {
                                return (
                                    <div className={e.continent.split(' ')[0].toLowerCase()} key={e.id}  >
                                        <Card id={e.id} name={e.name} flag={e.flag} continent={e.continent} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Pagination />
                </div> : <Loader />
            }
        </div>
    )
}

export default Home;