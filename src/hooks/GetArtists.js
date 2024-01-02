import React, { useState, useEffect } from "react"
import Card from "../components/cards/Card"

export default function Artists_Data(props)
{
    const url = "https://localhost:7088/artists"
    const [artist, setArtist] = useState([])

    useEffect(() =>
    {

        fetch(url)
            .then(res => res.json())
            .then(data => setArtist(data.result))

        console.log(props.count)
        console.log(artist)

    }, [props.count])

    /*const artistsElements = artist.map(artistobj =>
    {
        /*return (
            <Card
                key={artistobj.ArtistID}
                {...artistobj}
                updateCardState={props.stateChange}
            />
        )
    })*/
        /*const artistsElements = artist.map(artistobj => {
            return (
              <Card
                key={artistobj.ArtistId} 
                {...artistobj}
                updateCardState={props.stateChange}
              />
            );
          });*/

          const artistsElements = artist.map(artistobj => {
            return (
              <Card
                key={artistobj.ArtistId} 
                {...artistobj}
                updateCardState={props.stateChange}
              />
            );
          });

    

    

          return (
            <div key="artists-list">
              {artistsElements}
            </div>
          );
}