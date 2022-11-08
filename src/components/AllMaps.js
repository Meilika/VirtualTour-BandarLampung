import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import 'leaflet/dist/leaflet.css'
import L from "leaflet";
import { useWisata } from '../custom-hooks/'
import { NavLink } from "react-router-dom";

const markerIcon = new L.Icon({
    iconUrl: '/marker.png',
    iconSize: [20, 30]
})


const AllMaps = ({ style, setInput, input }) => {

    const [posts, isLoading] = useWisata()

    if (isLoading) return <p>Loading...</p>
    return (
        <div className="maps">
            <MapContainer
                center={[-5.397487033029457, 105.25749477039165]}
                zoom={11}
                style={style}
                scrollWheelZoom={false}>                
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />

                {posts.filter((post)=>{
                      if (setInput === "") {
                        return post
                    } else if (post.fields.name.toLowerCase().includes(input.toLowerCase())) {
                        return post
                    }
                }).map((post) => {
                    let lat = post.fields.location.lat
                    let lon = post.fields.location.lon
                    return (
                        <div>
                            <Marker position={[lat, lon]} icon={markerIcon}>
                                <Popup>
                                    <h3>
                                        <NavLink to={`/wisata/${post.fields.slug}`}>{post.fields.name}</NavLink>
                                    </h3>
                                    <img width={80} src={post.fields.image.fields.file.url} alt={post.fields.name} />
                                    <p><a href={post.fields.maps}>Telusuri Rute melalui Google Maps</a></p>
                                </Popup>
                            </Marker>
                        </div>
                    )
                })}
            </MapContainer>
        </div>
    )
}

export default AllMaps
