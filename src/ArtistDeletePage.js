import { useState, useEffect } from 'react';
import {NavLink, useNavigate, useParams} from "react-router-dom";

export function ArtistDeletePage() {
    const navigate = useNavigate();
    const param = useParams();
    const id = param.eloadoId;
    const [artist, setArtist] = useState([]);
    const [isPending, setPending] = useState(false);

    useEffect(() => {
        setPending(true);
        
        (async () => {
            try {
            const res = await fetch(`https://localhost:7088/artists/${id}`);
            const artist = await res.json();
            console.log(artist)
            setArtist(artist.result);
        } catch (error) {
            console.log(error);   
        }
        finally {
            setPending(false);
        }
    })();
    }, [id]);
    return (
             <div className='p-5 m-auto text-center content bg-lavender'>
    { isPending || !artist.artistId ? ( <div className='spinner-border'></div>) : (       
                <div>
                <h2>Előadó törlése</h2>
            
                <div className='card p-3'>
                    <div className='card-body'>
                    <h4>{artist.origin}</h4>
                    <h5 className='card-title'>{artist.artistName}</h5>
                    <div className='lead'>{artist.numberOfWorks}</div>
                    <p>Aktiv: {artist.activeStatus}</p>
                        </div>
                        <form onSubmit={async (e) => {
                            try{
                            e.preventDefault();
                            await fetch(`https://localhost:7088/artists/${id}`, {
                                method: "DELETE"
                            });
                            navigate("/");}
                        catch(error) {
                            console.log(error);
                        };
                        }}>
                        <div>
                            <NavLink  to={"/"}>
                                <button className="bi bi-backspace btn btn-warning rounded">Mégsem</button>
                            </NavLink>
                            <button className="bi bi-trash3 btn btn-danger rounded">Törlés</button>
                        </div>
                        </form>
                    </div>
                </div>
            )} </div>
    );
}