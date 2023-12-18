import React, { useState } from 'react';
import CreateSubjectForm from '../components/forms/CreateSubjectForm';

function CreateArtist(props)
{
    const [formData, setFormData] = useState({
        ArtistName: "",
        Origin: "",
        NumberOfWorks: "",
        ActiveStatus:""
    })

    const handleChange = (e) =>
    {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value, });


    };

    const handleSubmit = async (e) =>
    {

        const url = "https://localhost:7088/artists"
        e.preventDefault()

        await fetch(url, {
            method: 'POST',
            body: JSON.stringify(formData),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(data => console.log(data))

        props.stateChange()
    }

    return (
        <CreateSubjectForm
            {...formData}
            handleChange={handleChange}
            handleSubmit={handleSubmit}
        />
    )
}

export default CreateArtist