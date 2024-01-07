import { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";

export function ArtistListPage() {

    const [artists, setArtists] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        fetch("https://localhost:7088/artists", {credentials: "include"})
        .then((res) => res.json())
        .then((eloadok) => setArtists(eloadok))
        .catch(console.log)
        .finally(() => {
            setFetchPending(false);
        });
 }, []);
 return (
   <div className='p-5 m-auto text-center content bg-ivory'>
    { isFetchPending ? ( <div className='spinner-border'></div>) : (
        <div>
            <h2>Előadók</h2>
            {artists.map((artist) => (
                <div key={artist.id + 4} className='card col-sm-3 d-inline-block m-1 p-2'>
                    <h6 className='text-muted'>{artist.brand}</h6>
                    <h5 className='text-muted'>{artist.name}</h5>
                    <div>{artist.price}.- HUF</div>
                    <div className='small'>Készleten: {artist.quantity} db</div>
                    <NavLink key={artist.id} to={"/eloado/" + artist.id}>
                    <div className='card-body'>
                        <img className='img-fluid'
                        style={{ maxHeight: 200 }}
                        alt = "hiányzik a képed innen!"
                        src={artist.imageURL ? artist.imageURL : "https://via.placeholder.com/400x800"}
                        />
                    </div></NavLink>
                    <br />
                    <NavLink key={artist.id+1} to={"/mod-eloado/" + artist.id}>
                        <i className="bi bi-pencil-square mx-1">Módosítás</i>
                    </NavLink>
                    <NavLink key={artist.id+2} to={"/del-eloado/" + artist.id} className={"text-danger"}>
                        <i className="bi bi-trash3">Törlés</i>
                    </NavLink>
                </div>
                
            ))}
        </div>
    )}
   </div> 
 );
}