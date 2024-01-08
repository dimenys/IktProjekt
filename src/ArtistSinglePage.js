import { useState, useEffect } from 'react';
import { useParams, NavLink } from "react-router-dom";
export function ArtistSinglePage() {

    const param = useParams();
    const id = param.eloadoId;
    const [artist, setArtist] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        (async() => {
            try {
        const res = await fetch(`https://localhost:7088/artists/${id}`)
        const eloado =await res.json();
        setArtist(eloado);
        } catch(error) {
            console.log(error);
        }
        finally{
            setPending(false);
        }
    })();
 }, [id]);
 return (
   <div className='p-5 m-auto text-center content bg-lavender'>
    { isPending || !artist.Id ? ( <div className='spinner-border'></div>) : (       
                <div className='card p-3'>
                <div className='card-body'>
                <h4>{artist.origin}</h4>
                <h5 className='card-title'>{artist.artistName}</h5>
                <div className='lead'>{artist.numberOfWorks}</div>
                <p>Aktiv: {artist.activeStatus}</p>
                    </div>
                </div>
            )}
        </div>
    ); 
}