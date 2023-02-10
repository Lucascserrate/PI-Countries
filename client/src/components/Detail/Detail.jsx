import axios from 'axios';
import React, { useEffect, useState } from 'react';
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

    let max = country?.images.length

    return (
        <div className={s.container}>
            <div className={s.nav}>
                <Nav back='true' />
            </div>
            <div className={s.flex}>
                <div className={s.card}>
                    <div className={s.carousel}>
                        <div className={s.carouselDiv}>
                            <button className={s.arrow} disabled={image === 0} onClick={() => setImage(image - 1)} >
                                <span class="material-symbols-outlined">
                                    arrow_back_ios
                                </span>
                            </button>
                            <button className={s.arrow} disabled={image === max - 1} onClick={() => setImage(image + 1)} >
                                <span className="material-symbols-outlined">
                                    arrow_forward_ios
                                </span>
                            </button>
                            <img className={s.bigImg} src={country?.images[image]} />
                        </div>
                        <div className={s.imgsContainer}>
                            {
                                country
                                    ? country.images?.slice(0, 5).map((e, i) => (
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