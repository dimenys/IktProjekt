import DeleteArtist from "../../hooks/DeleteArtist"
import UpdateArtist from "../../hooks/UpdateArtist"
import "./card.css"

function Card(props)
{
    return (
        <div className="card width m-1 p-1 d-inline-block move shadow-5 grow" key={props.ArtistID}>
            <div className="card-body">
                <p className="delete-icon">
                    <DeleteArtist
                        {...props}
                    />
                </p>

                <UpdateArtist
                    {...props}
                />
            </div>
        </div>

    )
}

export default Card
