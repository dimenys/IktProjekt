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
            const res = await fetch(`https://localhost:7088/artists/${id}`, { credentials: "include" });
            const artist = await res.json();
            setArtist(artist);
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
    { isPending || !artist.id ? ( <div className='spinner-border'></div>) : (       
                <div>
                <h2>Előadó törlése</h2>
                <div className='card p-3'>
                    <div className='card-body'>
                    <h4>{artist.brand}</h4>
                    <h5 className='card-title'>{artist.name}</h5>
                    <div className='lead'>{artist.price}.- HUF</div>
                    <p>Készleten: {artist.quantity} db</p>
                        <img className='img-fluid rounded'
                        style={{ maxHeight: "500px" }}
                        alt = "hiányzik a képed innen!"
                        src={artist.imageURL ? artist.imageURL : "https://via.placeholder.com/400x800"}
                        /></div>
                        <form onSubmit={async (e) => {
                            try{
                            e.preventDefault();
                            await fetch(`https://localhost:7088/artists/${id}`, {
                                method: "DELETE",
                                credentials: "include",
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