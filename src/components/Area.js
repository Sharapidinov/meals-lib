import React, {useEffect, useState} from 'react';
import {useParams, Link} from "react-router-dom";
import axios from "axios";

const Area = () => {

    const {country} = useParams()
    const [name, setName] = useState([])

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${country}`)
            .then(({data}) => setName(data.meals))
    } ,[])

    return (
        <>
            <div className="title-area">
               Country: {country}
            </div>
            <div className="row">
                {
                    name?.map(it => {
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
        </>
    );
};

export default Area;