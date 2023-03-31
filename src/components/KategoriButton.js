import React from 'react'
import './KategoriButton.css'

const KategoriButton = ({filter, setFilter}) => {
    return (
        <div className="kategoriButton">
            <button className="kategori" onClick={() => setFilter("")}>Semua </button>
            <button className="kategori" onClick={() => setFilter("wisata alam")}>Wisata Alam</button>
            <button className="kategori" onClick={() => setFilter("wisata pendidikan")}>Wisata Pendidikan</button>
            <button className="kategori" onClick={() => setFilter("wisata religi")}>Wisata Religi</button>
            <button className="kategori" onClick={() => setFilter("wisata sejarah")}>Wisata Sejarah</button>
            <button className="kategori" onClick={() => setFilter("ruang publik")}>Ruang Publik</button>
        </div>
    )
}

export default KategoriButton
