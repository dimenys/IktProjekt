import { useNavigate } from 'react-router-dom';

export function ArtistCreatePage() {
const navigate = useNavigate();

return (
    <div className='p-5 content bg-whitesmoke text-center'>
        <h2>Új előadó</h2>
        <form
        onSubmit={(e) => {
            e.persist();
            e.preventDefault();
            fetch("https://localhost:7088/artists", {
                method: "POST",
                credentials: "include",
                body: JSON.stringify({
                    ArtistName: e.target.elements.artistName.value,
                    Origin: e.target.elements.origin.value,
                    NumberOfWorks: e.target.elements.numberOfWorks.value,
                    ActiveStatus: e.target.elements.activeStatus.value,
                }),
            })
            .then(() => {
                navigate("/");
            })
            .catch(console.log);
        }}
            >
            <div className='form-group row pb-3'>
                <label htmlFor="name" className='col-sm-3 col-form-label'> Név: </label>
                    <div>
                        <input type="text" id="name" name="name" className="form-control" autoComplete='name' />
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label htmlFor="NumberOfWorks" className='col-sm-3 col-form-label'> Zenék száma: </label>
                    <div>
                        <input type="number" id="NumberOfWorks" name="NumberOfWorks" className="form-control" autoComplete='NumberOfWorks' />
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label htmlFor="origin" className='col-sm-3 col-form-label'> Származás: </label>
                    <div>
                        <input type="text" id="origin" name="origin" className="form-control" autoComplete='origin' />
                    </div>
            </div>
            <div className='form-group row pb-3'>
                <label htmlFor="activeStatus" className='col-sm-3 col-form-label'> Aktiv?: </label>
                    <div>
                        <input type="text" id="activeStatus" name="activeStatus" className="form-control" autoComplete='activeStatus' />
                    </div>
            </div>
            <button type="submit" className='btn btn-success'>Küldés</button>
            </form>
        
    </div>
);
}