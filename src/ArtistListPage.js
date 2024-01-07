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
                <div key={artist.Id + 4} className='card col-sm-3 d-inline-block m-1 p-2'>
                    <h6 className='text-muted'>{artist.origin}</h6>
                    <h5 className='text-muted'>{artist.artistName}</h5>
                    <div>{artist.numberOfWorks}</div>
                    <div className='small'>Aktív: {artist.activeStatus}</div>
                    <NavLink key={artist.Id+1} to={"/mod-eloado/" + artist.Id}>
                        <i className="bi bi-pencil-square mx-1">Módosítás</i>
                    </NavLink>
                    <NavLink key={artist.Id+2} to={"/del-eloado/" + artist.Id} className={"text-danger"}>
                        <i className="bi bi-trash3">Törlés</i>
                    </NavLink>
                </div>
                
            ))}
        </div>
    )}
   </div> 
 );
}