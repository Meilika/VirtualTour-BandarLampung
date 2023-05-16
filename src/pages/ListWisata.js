import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useWisata } from "../custom-hooks";
import TextTruncate from 'react-text-truncate';
import "./ListWisata.css";
import KategoriButton from "../components/KategoriButton";

const ListWisata = () => {
    const [posts, isLoading ] = useWisata();
    const [filter, setFilter] = useState("");

    if (isLoading) return (
        <div className="content-wisata">
            <div className="wisata-title-isLoading"></div>
            <div className="wisata">
                {[1, 2, 3, 4, 5, 6].map(n => (
                    <div>
                        <div className="wisata-pic-isLoading" />
                        <div className="wisata-name-isLoading"></div>
                    </div>
                ))}
            </div>
        </div>
    )
    return (
        <div className="content-wisata">
            <h1 className="wisata-title">Explore Wisata </h1>
            <KategoriButton setFilter={setFilter} />
            <div className="wisata">
                {posts.filter((post) => {
                    if (filter === "") {
                        return post
                    } else if (post.fields.category === filter) {
                        return post
                    } 
                }).map((post) => {
                    return (
                        <div className="list-wisata" key={post.fields.id} >
                            <img className="wisata-pic" src={post.fields.image.fields.file.url} alt={post.fields.name} />
                            <div className="list-desc">
                                <div className="wisata-name" >
                                    <p>{post.fields.name}</p>
                                </div>
                                <div className="wisata-category" >
                                    <span>{post.fields.category}</span>
                                </div>
                                <p className="wisata-desc">
                                    <TextTruncate
                                        line={4}
                                        element="p"
                                        truncateText="…"
                                        text={post.fields.description}
                                    />
                                </p>
                                <div className="wisata-button__container">
                                    <Link to={post.fields.slug}>
                                        <button className="wisata-button"><span>Lihat Detail</span></button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ListWisata;