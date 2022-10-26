import React from 'react'
import './KategoriButton.css'

const KategoriButton = ({filter, setFilter}) => {
    return (
        <div className="kategoriButton">
            <button className="kategori" onClick={() => setFilter("")}>Semua </button>
            <button className="kategori" onClick={() => setFilter("Wisata Alam")}>Wisata Alam</button>
            <button className="kategori" onClick={() => setFilter("Taman Bermain")}>Taman Bermain</button>
            <button className="kategori" onClick={() => setFilter("Wisata Satwa")}>Wisata Satwa</button>
        </div>
    )
}

export default KategoriButton
