import React, {useState} from 'react';
import {useNavigate} from "react-router-dom";


const Header = () => {
    const [name, setName] = useState()

    const nav = useNavigate()

    const s = () => {
        nav(`/search/${name}`)
    }

    const enter = (e) => {
        if (e.key === "Enter"){
            nav(`/search/${name}`)
        }

    }

    const nameSearch = e => {
        setName(e.target.value.trim())
    }

    const exit = () => {
        nav(`/meals`)
    }
    return (
        <header>

            <button onClick={exit} className="link">main</button>
            <div className="input-box">
                <input onKeyDown={enter} className="input" onChange={nameSearch} type="text"/>
                <button disabled={!name} onClick={s} className="search-btn"  >Найти</button>
            </div>
        </header>
    );

};

export default Header;