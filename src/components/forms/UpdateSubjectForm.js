import React from 'react'
import "./update.css"
export default function UpdateSubjectForm(props)
{
    return (
        <div>
            <form onSubmit={props.handleSubmit}>
                <div className="mb-3 mt-3">
                <label htmlFor="name" className="form-label">Név:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={props.ArtistName}
                        onChange={props.handleChange}
                        className="form-control"
                        placeholder="Előadó neve"
                    />
                </div>
                <div className="mb-3">
                <label htmlFor="Origin" className="form-label">Origin:</label>
                    <input
                        type="text"
                        id="Origin"
                        name="origin"
                        value={props.Origin}
                        onChange={props.handleChange}
                        className="form-control"
                        placeholder="Origin"
                    />
                </div>
                <div className="mb-3">
                <label htmlFor="NumberOfWorks" className="form-label">Számok:</label>
                    <input
                        type="text"
                        id="NumberOfWorks"
                        name="NumberOfWorks"
                        value={props.NumberOfWorks}
                        onChange={props.handleChange}
                        className="form-control"
                        placeholder="NumberOfWorks"
                    />
                </div>
                <div className='text-center '>
                    <button type="submit" className="btn btn-primary m-2">Frissít</button>
                </div>

            </form>
        </div>
    )
}
