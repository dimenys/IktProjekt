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

    console.log(param)
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(`https://localhost:7088/artists/${id}`);
          const artistData = await response.json();
          setArtist(artistData);
          setModname(artistData.name);
          setModnumberOfWorks(artistData.numberOfWorks);
          setModorigin(artistData.origin);
          setModactiveStatus(artistData.activeStatus);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchData();
    }, [id]);
  
    useEffect(() => {
      const saveChanges = async () => {
        
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
           onSubmit={async (e) => {
            e.persist();
            e.preventDefault();
            try {
              const body={

                  ArtistName: modname,
                  Origin: modorigin,
                  NumberOfWorks: modnumberOfWorks,
                  ActiveStatus: modactiveStatus,
              }
              console.log(body)
              const response = await fetch(`https://localhost:7088/artists/${id}`, {
                
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
              }
              ).then(() => {
                navigate("/");
            });
            } catch (error) {
              console.log(error);
            }
            
        }}
            >
            <div className='form-group row pb-3'>
            <div><label htmlFor="ArtistName" className='col-sm-3 col-form-label'> Név: </label>
                        <input type="text" id="ArtistName" name="artistName" className="form-control" defaultValue={modname} onChange={modName} autoComplete="off"/>
                    </div>
            </div>
            <div className='form-group row pb-3'>
            <div><label htmlFor="Origin" className='col-sm-3 col-form-label'> Származás: </label>   
                        <input type="text" id="Origin" name="origin" className="form-control" defaultValue={modorigin} onChange={modOrigin} autoComplete="off"/>
                    </div>
            </div>
            <div className='form-group row pb-3'>
            <div><label htmlFor="NumberOfWorks" className='col-sm-3 col-form-label'> Zenék száma: </label>   
                        <input type="number" id="NumberOfWorks" name="numberOfWorks" className="form-control" defaultValue={modnumberOfWorks} onChange={modNumberOfWorks} autoComplete="off" />
                    </div>
            </div>
            <div className='form-group row pb-3'>
            <div><label htmlFor="activeStatus" className='col-sm-3 col-form-label'> Aktív: </label>   
                        <input type="text" id="activeStatus" name="activeStatus" className="form-control" defaultValue={modactiveStatus} onChange={modActiveStatus} autoComplete="off" />
                    </div>
            </div>
            <button type="submit" className='btn btn-success'>Küldés</button>
            </form>
        
    </div>
);
}