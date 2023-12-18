
const DeleteArtist = (props) =>
{
    const url = "https://localhost:7088/artists"

    const handleDelete = async () =>
    {
        await fetch(`${url}/${props.id}`, { method: 'DELETE' })
        props.updateCardState()
    };

    return (
        <button className="btn btn-danger m-2" onClick={handleDelete}>X</button>
    )

}

export default DeleteArtist