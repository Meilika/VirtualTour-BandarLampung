import React from 'react'
import './KategoriButton.css'

const KategoriButton = ({filter, setFilter}) => {
    return (
        <div className="kategoriButton">
            <button className="kategori" onClick={() => setFilter("")}>Semua </button>
            <button className="kategori" onClick={() => setFilter("wisata alam")}>Wisata Alam</button>
            <button className="kategori" onClick={() => setFilter("taman bermain")}>Taman Bermain</button>
            <button className="kategori" onClick={() => setFilter("taman konservasi")}>Taman Konservasi</button>
        </div>
    )
}

export default KategoriButton
