import React from 'react'
import Loder from './Loder';
import {useLocation}  from 'react-router-dom';

const Saved = ({saved, loader}) => {
  return (
    <>
        <div className='container-fluid  text-center' id='top'>
        {loader | saved.length === 0 ? (
          <Loder/>
        ): (
          <>
          <div className='flex'>
        { saved.map((image) => (
        <div key={image.id} className='items' >
        <img src={image.src.medium} alt={image.phptographer}/>
      </div>
      
    ))}
    </div>
          </>
          
        )}
  
    {saved.length != 0 && (
      <a  href='#top' className='btn btn-warning my-5'> 
      Back To Top </a>)}
    
      </div>
    </>
  );
}

export default Saved
