import React from 'react';
import "../Styles/MusicPlayer.css";



function MusicPlayer({song, imgSrc}) {
  return <div className='musciPlayer'>
      <div className='songImage'></div>
      <div className='songAttributes'>
          <audio src={song} preload="metadata"/>
          <div className='top'>
            <div className='left'></div>
            <div className='middle'></div>
            <div className='right'></div>
          </div>
          <div className='bottom'></div>
      </div>
  </div>;
}

export {MusicPlayer};