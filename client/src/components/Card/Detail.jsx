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

    const handleChangeImage = (i) => {
        setImage(i)
    }
    console.log(image)

    return (
        <div className={s.container}>
            <nav>
                <Nav />
            </nav>
            <div className={s.flex}>
                <div className={s.card}>
                    <div>
                        <img className={s.bigImg} src={country?.images[image]} />
                        {
                            country
                                ? country.images?.map((e, i) => (
                                    <div key={i}>
                                        <img id={i} className={s.imgs} src={e} />
                                    </div>
                                ))
                                : undefined
                        }
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
                        <button onClick={setImage(2)}>hola</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detail;