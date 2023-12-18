import React, { useState } from 'react';
import GetArtists from "../hooks/GetArtists"
import CreateArtist from "../hooks/CreateArtist"

function Main()
{
    const [count, setCount] = useState(0)

    const handleCountState = () =>
    {
        setCount(count + 1)
    };


    return (
        <div className="container">
            <div className="row">
                <div className="col-md-9">
                    <GetArtists stateChange={handleCountState} count={count} />
                </div>

                <div className="col-md-3">
                    <CreateArtist stateChange={handleCountState} count={count} />
                </div>
            </div>


        </div>
    )

}
export default Main