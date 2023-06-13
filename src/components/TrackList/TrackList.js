import React from 'react';
import Track from '../Track/Track';
import './TrackList.css';

function Tracklist(props) {
    if (props.tracks) {
      return (
        <div className="TrackList">
          {
            props.tracks.map(track => {
              return (
                <Track key={track.id} track={track} onAdd={props.onAdd}/>
              );
            })
          }
        </div>
      );
    } else {
      return null;
    }
  }
  
  export default Tracklist;