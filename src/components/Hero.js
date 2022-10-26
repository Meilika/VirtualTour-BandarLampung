import React from "react";
import "./Hero.css"
import SearchBar from "./SearchBar";

const HeroListWisata = ({ handleChange, handleClick, handleKey }) => {
    const border = { borderColor: 'white' }
    return (
        <div className="hero-content">
            <div className="hero-wisata">
                <div className="hero_innerWisata">
                    <h1 className="hero_title">Wisata Bandar Lampung</h1>
                    <p className="hero_tagline">Cari destinasi wisata favoritemu!</p>
                    <SearchBar
                        border={border}
                        handleChange={handleChange} handleClick={handleClick} handleKey={handleKey}
                    />
                </div>
            </div>
        </div>
    )
}

export default HeroListWisata;