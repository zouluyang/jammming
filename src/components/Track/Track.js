import React from 'react';
import './Track.css';

function Track({ onAdd, track }) {
  const renderAction = () => {

    if (track.isRemoval) {
      return <button className="Track-action">-</button>;
    }
    return (
      <button
        className="Track-action"
        onClick={() => addTrack(track)}
      >+</button>
    );
  };

  const addTrack = (track) => {
    if (onAdd) {
      console.log(track);
      onAdd(track);
    }
  }

  return (
    <div className="Track">
      <div className="Track-information">
        <h3>{track.name}</h3>
        <p>{track.artist} | {track.album}</p>
      </div>
      {renderAction()}
    </div>
  );
}

export default Track;

