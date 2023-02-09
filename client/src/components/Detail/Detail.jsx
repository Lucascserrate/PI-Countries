import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "react-multi-carousel/lib/styles.css";
import { useParams } from 'react-router-dom';
import Nav from '../Nav/Nav';
import s from './Detail.module.css';

const Detail = () => {
    const [image, setImage] = useState(0)
    const [country, setCountry] = useState()
    let { id } = useParams()
    useEffect(() => {
        axios.get(`/countries/${id}`)
            .then(res => setCountry(res.data))

    }, [id])

    //Carousel
    return (
        <div className={s.container}>
            <nav>
                <Nav back='true' />
            </nav>
            <div className={s.flex}>
                <div className={s.card}>
                    <div className={s.carousel}>
                        <img className={s.bigImg} src={country?.images[image]} alt="" />
                        <div className={s.imgsContainer}>
                            {
                                country
                                    ? country.images?.map((e, i) => (
                                        <div key={i}>
                                            <img className={s.imgs} src={e} alt="" onClick={() => setImage(i)} />
                                        </div>
                                    ))
                                    : undefined
                            }
                        </div>
                    </div>
                    <div>
                        <img className={s.flag} src={country?.flag} alt={country?.name} />
                        <h3 className={s.title}>{country?.name}</h3>
                        <div className={s.tags}>
                        </div>
                        <div className={s.id}>
                            <h3 className={s.span}>{country?.id}</h3>
                        </div>
                        <h4>Continent: <span className={s.span}>{country?.continent}</span></h4>
                        <h4>Capital: <span className={s.span}>{country?.capital}</span></h4>
                        <h4>Subregion: <span className={s.span}> {country?.subregion}</span></h4>
                        <h4>Population: <span className={s.span}>{country?.population}</span> </h4>
                        <h4>Area: <span className={s.span}>{country?.area}</span></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;