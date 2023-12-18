import React, { useState } from 'react'
import UpdateSubjectForm from '../components/forms/UpdateSubjectForm';

export default function UpdateArtist(props)
{
    const [formData, setFormData] = useState({
        ArtistName: props.ArtistName,
        Origin: props.Origin,
        NumberOfWorks: props.NumberOfWorks,
        ActiveStatus: props.ActiveStatus
    })

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, });

    };

    const handleSubmit = async (e) =>
    {
        const url = `https://localhost:7088/artists/${props.ArtistID}`
        e.preventDefault()

        await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))

        alert("Sikeres frissítés")
    }

    return (
        <>
            <UpdateSubjectForm
                {...formData}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
            />
        </>
    )

}
