import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import axios from "axios";

const Result = () => {
    const params = useParams()
    const [results, setResults] = useState([])

    useEffect(() => {
        axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.name}`)
            .then(({data}) => {
                setResults(data.meals)
            })
    }, [params])




    return (
        <div className="row">
            {
                results?
                results.map(it => {
                    return(
                        <>
                            <div className="col-3">
                                <div className="box">
                                    <img width={100} src={it.strMealThumb} alt=""/>
                                    <Link to={`/meals/${it.idMeal}`}>{it.strMeal}</Link>
                                </div>
                            </div>

                            {

                            }


                        </>

                    )
                }) : `Не найдено`
            }
        </div>
    );
};

export default Result;