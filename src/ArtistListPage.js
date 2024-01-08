import { useState, useEffect } from 'react';
import {NavLink} from "react-router-dom";

export function ArtistListPage() {

    const [artists, setArtists] = useState([]);
    const [isFetchPending, setFetchPending] = useState(false);

    useEffect(() => {
        setFetchPending(true);
        async function x()
    {
        await fetch("https://localhost:7088/artists").then(async(res) => {
            const data = await res.json();
            setArtists(data.result);
            console.log(data);
        }).catch(console.log)
        .finally(() => {
            setFetchPending(false);
        });
    }
    x();
        
 }, []);
 return (
   <div className='p-5 m-auto text-center content bg-ivory'>
    { isFetchPending ? ( <div className='spinner-border'></div>) : (
        <div>
            <h2>Előadók</h2>
            {artists.map((artist) => (
                <div key={artist.artistId} className='card col-sm-3 d-inline-block m-1 p-2'>
                    <h6 className='text-muted'>{artist.origin}</h6>
                    <h5 className='text-muted'>{artist.artistName}</h5>
                    <div>id={artist.artistId}</div>
                    <div>k:{artist.numberOfWorks}</div>
                    <div className='small'>Aktív: {artist.activeStatus}</div>
                    <NavLink key={`mod-${artist.artistId}`} to={"/mod-eloado/" + artist.artistId}>
                        <i className="bi bi-pencil-square mx-1">Módosítás</i>
                    </NavLink>
                    <NavLink key={"/del-eloado/" + artist.artistId} to={"/del-eloado/" + artist.artistId} className={"text-danger"}>
                        <i className="bi bi-trash3">Törlés</i>
                    </NavLink>
                </div>
                
            ))}
        </div>
    )}
   </div> 
 );
}