import React, {useState} from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import Result from "./Result";

const Search = () => {
    // const [meal, setMeal] = useState([])
    const [name, setName] = useState("")



    const nameSearch = e => {
        setName(e.target.value)
    }


    return (
        <div>
            <div className="input-box">
                <input className="input" onChange={nameSearch} type="text"/>
                <Link className="search-btn" to={`/search/${name}`} >Найти</Link>
            </div>
            <div className="row">
                {
                    <Result/>
                }
            </div>

        </div>
    );
};

export default Search;