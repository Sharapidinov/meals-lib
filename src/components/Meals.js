import React, {useEffect, useState} from 'react';
import {Link, useParams, useNavigate} from "react-router-dom";
import axios from "axios";

const Meals = () => {

    const [foods, setFoods] = useState([])

    const [name, setName] = useState("")

    const nav = useNavigate()

    const nameSearch = e => {
        setName(e.target.value.trim())
    }

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v2/1/randomselection.php`).then(({data}) => setFoods(data.meals))

    }, [])

    const s = () => {
        nav(`/search/${name}`)
    }

    const enter = (e) => {
        if (e.key === "Enter") {
            nav(`/search/${name}`)
        }
    }

    return (

        <>
            <div className="input-box">
                <input onKeyDown={enter} className="input" onChange={nameSearch} type="text"/>
                <button disabled={!name} onClick={s} className="search-btn"  >Найти</button>
            </div>
            <div className="row">
                {
                    foods.map(it => {
                        return (
                            <div className="col-3">
                                    <div className="box">

                                    <Link to={`/meals/${it.idMeal}`}>
                                        <img width={100} src={it.strMealThumb} alt=""/>
                                        <h3> Name: {it.strMeal}</h3>
                                    </Link>
                                        <Link to={`/area/${it.strArea}`}>
                                           Area:  {it.strArea}
                                        </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </>

    );
};

export default Meals;