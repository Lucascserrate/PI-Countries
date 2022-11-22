import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getCountries } from "../../redux/actions";
import s from './Create.module.css';

const Create = () => {
    let countries = useSelector(state => state.countries)

    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])


    const [create, setCreate] = useState({
        name: '',
        difficulty: '',
        duration: '',
        season: '',
        country: []
    })

    const handleInput = (e) => {
        setCreate({
            ...create,
            [e.target.name]: e.target.value
        })
    }

    const handleSelect = (e) => {
        if (e.target.value !== 'countries') {
            setCreate({
                ...create,
                country: [...create.country, e.target.value]
            })
        }
    }

    const handleCreate = () => {
        axios.post('/activities', create)
        alert('Activity created')
    }

    const handleDelete = (e) => {
        e.preventDefault()
        setCreate({
            ...create,
            country: create.country.filter(el => el !== e.target.value)
        })
    }

    return (
        <div className={s.container}>
            <div className={s.nav}>
                <Link to='/home'>
                    <h2 className={s.back}>{'< Back'}</h2>
                </Link>
            </div>
            <div className={s.bg}>
                <form className={s.form} onSubmit={handleCreate} >
                    <h2 className={s.title}>Create Activity</h2>
                    <div className={s.div} >
                        <label className={s.label} >Name</label>
                        <input type="text" name="name" onChange={handleInput} className={s.input} required />
                    </div>
                    <div className={s.div} >
                        <label className={s.label} >Difficulty</label>
                        <select name="difficulty" onChange={handleInput} className={s.input} required >
                            <option value="">--Select Difficulty--</option>
                            <option value="1">⭐ ☆ ☆ ☆ ☆</option>
                            <option value="2">⭐⭐ ☆ ☆ ☆</option>
                            <option value="3">⭐⭐⭐ ☆ ☆</option>
                            <option value="4">⭐⭐⭐⭐ ☆</option>
                            <option value="5">⭐⭐⭐⭐⭐</option>
                        </select>
                    </div>
                    <div className={s.div} >
                        <label className={s.label} >Duration</label>
                        <input type="number" name="duration" onChange={handleInput} className={s.input} min='1' required />
                    </div>
                    <div className={s.div} >
                        <label className={s.label} >Season</label>
                        <select name="season" onChange={handleInput} className={s.input} required >
                            <option value=''>--Select Season--</option>
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                    </div>
                    <div className={s.div}>
                        <label className={s.label} >Countries</label>
                        <select name="country" onChange={handleSelect} className={s.input} >
                            <option value='countries' >--Select Countries--</option>
                            {countries?.map((e, i) => <option key={i} value={e.name}>{e.name}</option>)}
                        </select>
                    </div>
                    <div className={s.flagBox}>
                        {/* {create.country?.map(e => <button onClick={handleDelete} key={e}><img className={s.flag} src={e} alt='flag' /></button>)} */}
                        {create.country?.map((e, i) => <span key={i} className={s.span} value={e} >{e}<button onClick={handleDelete} className={s.btnDelete} value={e} >x</button> </span>)}
                    </div>
                    <div className={s.btnBox}>
                        <button type="submit" className={s.btn} >
                            <span className={s.shadow}></span>
                            <span className={s.edge}></span>
                            <span className={s.front}>Create</span>
                        </button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Create;