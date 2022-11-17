import axios from "axios";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import s from './Create.module.css';

const Create = () => {
    let countries = useSelector(state => state.countries)
    countries = countries.sort()

    const [create, setCreate] = useState({
        name: '',
        difficulty: '',
        duration: 0,
        season: '',
    })

    const handleCreate = async () => {
        const post = await axios.post('http://localhost:3001/activities')
    }

    return (
        <div className={s.container}>
            <div className={s.nav}>
                <Link to='/home'>
                    <h2 className={s.back}>{'< Back'}</h2>
                </Link>
            </div>
            <div className={s.bg}>
                <form className={s.form} >
                    <h2 className={s.title}>Create Activity</h2>
                    <div className={s.div} >
                        <label className={s.label} htmlFor="">Name</label>
                        <input type="text" className={s.input} />
                    </div>
                    <div className={s.div} >
                        <label className={s.label} htmlFor="">Difficulty</label>
                        <select className={s.input} >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className={s.div} >
                        <label className={s.label} htmlFor="">Duration</label>
                        <input type="number" className={s.input} />
                    </div>
                    <div className={s.div} >
                        <label className={s.label} htmlFor="">Season</label>
                        <select className={s.input} >
                            <option value="Summer">Summer</option>
                            <option value="Autumn">Autumn</option>
                            <option value="Winter">Winter</option>
                            <option value="Spring">Spring</option>
                        </select>
                    </div>
                    <div className={s.div}>
                        <label className={s.label} htmlFor="">Countries</label>
                        <select className={s.input} >
                            {countries?.map(e => {
                                return (
                                    <option key={e.id} value={e.name}>{e.name}</option>
                                )
                            })}
                        </select>
                    </div>
                    <div className={s.btnBox}>
                        <button className={s.btn}>
                            <span className={s.shadow}></span>
                            <span className={s.edge}></span>
                            <span className={s.front}>Submit</span>
                        </button>
                    </div>
                </form>
            </div >
        </div >
    )
}

export default Create;