import React from 'react'

function Refresh({ updateParentState })
{
    const handleButtonClick = () =>
    {
        updateParentState();
    };

    return (
        <button className="btn btn-primary" onClick={handleButtonClick}>Frissít</button>
    )
}

export default Refresh