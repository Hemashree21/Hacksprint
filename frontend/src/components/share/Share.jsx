import React from 'react';
import './Share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
import smp from '../../assets/social-media-post.jpg';
import LabelIcon from '@mui/icons-material/Label';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';

const Share = () => {
  return (
    <div className='share'>
        <div className="shareWrapper">
            <div className="shareTop">
            <img src={smp} alt="social-media-post" className='shareProfileImg'/>
            <input type="text" placeholder='Whats in your mind Hemashree?' className='shareInput'/>
        </div>
        <hr className='shareHr'/>
        <div className="shareBottom">
            <div className="shareOptions">
                <div className="shareOption">
                    <PermMediaIcon htmlColor='tomato' className='shareIcon'/>
                    <span className='shareOptionText'>Photo or Video</span>
                </div>
                <div className="shareOption">
                    <LabelIcon htmlColor='blue' className='shareIcon'/>
                    <span className='shareOptionText'>Tag</span>
                </div>
                <div className="shareOption">
                    <LocationOnIcon htmlColor='green' className='shareIcon'/>
                    <span className='shareOptionText'>Location</span>
                </div>
                <div className="shareOption">
                    <EmojiEmotionsIcon htmlColor='goldenrod' className='shareIcon'/>
                    <span className='shareOptionText'>Feelings</span>
                </div>
            </div>
            <button className='shareButton'>Share</button>
        </div>
        </div>
    </div>
  )
}

export default Share