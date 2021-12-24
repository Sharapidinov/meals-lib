import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const MealCard = () => {

    const {name} = useParams()

    const [ing, setIng] = useState([])

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${name}`)
            .then(({data}) => setIng(data.meals))
    },[name])

    return (

        <div className="row">
            <div className="col-6">
                <div className="box-card">
                    <img className="card-img" src={`https://www.themealdb.com/images/ingredients/${name}.png`} alt=""/>
                    <div key={name}>{name}</div>
                </div>
            </div>

            <div className="col-6">

            <div className="row">
                {
                    ing.map(it =>{
                        return(
                            <div className="col-3">
                               <div className="box-card">
                                   <Link to={`/meals/${it.idMeal}`}>
                                       <img className="card-img" src={it.strMealThumb} alt=""/>
                                       <div>{it.strMeal}</div>
                                   </Link>
                               </div>
                            </div>
                        )
                    })
                }
            </div>

            </div>

        </div>
    );
};

export default MealCard;