import React from 'react'
import { useParams } from 'react-router-dom'
import Maps from '../components/Maps'
import useDetail from '../custom-hooks/useDetail'
import './Detail.css'

const Detail = () => {
    const { slug } = useParams();
    const [post, isLoading, vr, ket] = useDetail(slug)
    const style = { height: '400px', width: '100%' }

    if(isLoading) return (
        <div className="detail">
            <h1 className="detail__title title-skleton"></h1>
            <div className="detail__content">
                <div className="content__image image-skleton"></div>
                <div className="content__description">
                    <h2 className="title-skleton"></h2>
                    <p className="paragraf-skleton"></p>
                </div>
            </div>
            <div className="detail__map">
                <h2 className="map__title title-skleton"></h2>
                <div className="map__location map-skleton"></div>
            </div>
        </div>
    )

    return (
        <div className="detail">
            <h1 className="detail__title">{post.name}</h1>
            <div className="detail__content">
                <div className="content__image">
                    <img src={post.image.fields.file.url} alt={post.name} />
                </div>
                <div className="content__description">
                    <h2>Description</h2>
                    <p>{post.description}</p>
                    <ul type="none" >
                        {ket.map((info) => {
                            return (
                                <li>{info}</li>
                            )
                        })}  
                    </ul>
                </div>
            </div>
           {vr !== undefined ?(
                <div className="content__vr">
                    <h2 className="vr__name"><a href={post.vr} target="_blank" alt={post.name}>Virtual Tour</a></h2>
                    <iframe src={post.vr} alt={post.name} />
                </div>
            ):null}
            <div className="detail__map">
                <h2 className="map__title">Location</h2>
                <div className="map__location">
                    <Maps
                        style={style}
                        lat={post.location.lat}
                        lon={post.location.lon}
                        name={post.name}
                        link={post.maps}
                    />
                </div>
            </div>
        </div>
    )
}

export default Detail
