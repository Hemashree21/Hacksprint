import React from 'react';
import './Homesg.css';
import Share from '../share/Share';
import Post from '../post/Post';
import {Posts} from '../../dummyData';

const Homesg = () => {
  return (
    <div className='homesg-container'>
      <div className="homesgWrapper">
        <Share/>
        {Posts.map((p) => (
          <Post key={p.id} post={p}/>
        ))}
      </div>
    </div>
  )
}

export default Homesg