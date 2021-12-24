import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from "axios";

const MealsInfo = () => {

    const params = useParams()

    const [food, setFood] = useState({})

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`)
            .then(({data}) =>{
                const meal = {...data.meals[0]}
                const res = []

                for (let i = 1; i <= 20; i++){
                    if(meal[`strIngredient${i}`] ){
                        res.push(meal[`strIngredient${i}`])
                    }
                }

                meal.res = res
                setFood(meal)
            })
    }, [params.id])


    return (
        <div className="card">
            <div className="card-box">
                <img className="card-img" src={`${food.strMealThumb}`} alt=""/>
                <div className="title">{food.strInstructions}</div>
                <div className="row">{food.res?.map((it,ind) => {
                    return(
                        <div className="col-3">
                            <Link to={`/ingredients/${it}`}>
                                <img  src={`https://www.themealdb.com/images/ingredients/${it}.png`} alt=""/>
                                <div key={ind}>{it}</div>
                            </Link>
                        </div>
                    )
                })}</div>
            </div>
        </div>
    );
};

export default MealsInfo;