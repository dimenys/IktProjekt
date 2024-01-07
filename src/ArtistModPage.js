import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

export function ArtistModPage() {

    const param = useParams();
    const navigate = useNavigate();
    const id = param.eloadoId;
    const [, setArtist] = useState([]);
    const [modname, setModname] = useState("");
    const [modorigin, setModorigin] = useState("");
    const [modnumberOfWorks, setModnumberOfWorks] = useState("");
    const [modactiveStatus, setModactiveStatus] = useState("");

    useEffect(() => {
        (async () => {
          try {
            const res = await fetch(`https://localhost:7088/artists/${id}`, { credentials: "include" });
            const artistData = await res.json();
            setArtist(artistData);
            setModname(artistData.name);
            setModnumberOfWorks(artistData.numberOfWorks);
            setModorigin(artistData.origin);
            setModactiveStatus(artistData.activeStatus);
          } catch (error) {
            console.log(error);
          }
        })();
      }, [id, modname, modnumberOfWorks, modorigin, modactiveStatus]);
      useEffect(() => {
        const saveChanges = async () => {
          try {
            const res = await fetch(`https://localhost:7088/artists/${id}`, {
              method: "PUT",
              credentials: "include",
              body: JSON.stringify({
                ArtistName: modname,
                Origin: modorigin,
                NumberOfWorks: modnumberOfWorks,
                ActiveStatus: modactiveStatus,
              }),
            });
          } catch (error) {
            console.log(error);
          }
        };
      
        saveChanges();
      }, [id, modname, modorigin, modnumberOfWorks, modactiveStatus]);
    
      const modName = (e) => {
        setModname(e.target.value);
      };
    
      const modNumberOfWorks = (e) => {
        setModnumberOfWorks(e.target.value);
      };
    
      const modOrigin = (e) => {
        setModorigin(e.target.value);
      };
    
      const modActiveStatus = (e) => {
        setModactiveStatus(e.target.value);
      };
    
      return (
        <div className='p-5 content bg-lavender text-center'>
          <h2>Előadó módosítás</h2>
           <form
        //     onSubmit={(e) => {
        //       e.preventDefault();
        //       fetch(`https://localhost:7088/artists/${id}`, {
        //         method: "PUT",
        //         credentials: "include",
        //         body: JSON.stringify({
        //           ArtistName: e.target.elements.ArtistName.value,
        //           Origin: e.target.elements.Origin.value,
        //           NumberOfWorks: e.target.elements.NumberOfWorks.value,
        //           ActiveStatus: e.target.elements.ActiveStatus.value,
        //         }),
        //       })
        //         .then(() => {
        //           navigate("/");
        //         })
        //         .catch(console.log);
        //     }}
            >
            <div className='form-group row pb-3'>
            <div><label htmlFor="ArtistName" className='col-sm-3 col-form-label'> Név: </label>
                        <input type="text" id="ArtistName" name="ArtistName" className="form-control" defaultValue={modname} onChange={modName} autoComplete="off"/>
                    </div>
            </div>
            <div className='form-group row pb-3'>
            <div><label htmlFor="Origin" className='col-sm-3 col-form-label'> Származás: </label>   
                        <input type="text" id="Origin" name="Origin" className="form-control" defaultValue={modorigin} onChange={modOrigin} autoComplete="off"/>
                    </div>
            </div>
            <div className='form-group row pb-3'>
            <div><label htmlFor="NumberOfWorks" className='col-sm-3 col-form-label'> Zenék száma: </label>   
                        <input type="number" id="NumberOfWorks" name="NumberOfWorks" className="form-control" defaultValue={modnumberOfWorks} onChange={modNumberOfWorks} autoComplete="off" />
                    </div>
            </div>
            <div className='form-group row pb-3'>
            <div><label htmlFor="ActiveStatus" className='col-sm-3 col-form-label'> Aktív: </label>   
                        <input type="text" id="ActiveStatus" name="ActiveStatus" className="form-control" defaultValue={modactiveStatus} onChange={modActiveStatus} autoComplete="off" />
                    </div>
            </div>
            <button type="submit" className='btn btn-success'>Küldés</button>
            </form>
        
    </div>
);
}