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
import Errors from "../Errors/Errors";

const Home = () => {

    const dispatch = useDispatch()
    const sorting = useSelector(state => state.sorting)
    const error = useSelector(state => state.error)
    /*   const countries = useSelector(state => state.countries) */

    const [sort, setSort] = useState(true)
    // Pagination
    const [current, setCurrent] = useState(1)
    const [perPage] = useState(10)
    const max = Math.ceil(sorting.length / perPage);

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return (
        <div className={s.container}>
            {sorting.length ?
                <div>
                    <Nav />
                    {error && <Errors />}
                    <Filters setSort={setSort} sort={sort} />
                    <div className={s.gridContainer}>
                        <div className={s.grid}>
                            {sorting?.slice((current - 1) * perPage, (current - 1) * perPage + perPage).map(e => {
                                return (
                                    <div className={e.continent.split(' ')[0].toLowerCase()} key={e.id}  >
                                        <Card id={e.id} name={e.name} flag={e.flag} continent={e.continent} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <Pagination current={current} setCurrent={setCurrent} max={max} />
                </div> : <Loader />
            }
        </div>
    )
}

export default Home;