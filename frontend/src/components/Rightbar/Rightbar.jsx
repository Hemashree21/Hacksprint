import React from 'react';
import './Rightbar.css';
import Profile from '../../assets/avatar.png';
import gift from '../../assets/gift.png';
import ad from '../../assets/ad.jpg';
import Online from '../online/Online';
import {Users} from '../../dummyData';

export default function Rightbar({profile}) {

  const HomeRightbar = () => {
    return (
      <>
      <div className="birthdayContainer">
          <img src={gift} alt="" className='birthdayImg'/>
          <span className="birthdayText"><b>Jane</b> and <b>3 other friends</b> have a birthday today</span>
        </div>
        <img src={ad} alt="" className="rightbarAd" />
        <h4 className="rightbarTitle"><b>Online Friends</b></h4>
        <ul className="rightbarFriendList">
          {Users.map(u=>(
            <Online key={u.id} user={u}/>
          ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = () => {
    return (
      <>
      <h4 className='rightbarTitle'>User Information</h4>
      <div className="rightbarInfo">
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">City: </span>
          <span className="rightbarInfoValue">Bangalore</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">From: </span>
          <span className="rightbarInfoValue">India</span>
        </div>
        <div className="rightbarInfoItem">
          <span className="rightbarInfoKey">Age: </span>
          <span className="rightbarInfoValue">19</span>
        </div>
      </div>
      <h4 className='rightbarTitle'>User Friends</h4>
      <div className="rightbarFollowings">
        <div className="rightbarFollowing">
          <img src={Profile} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src={Profile} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src={Profile} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src={Profile} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src={Profile} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
        <div className="rightbarFollowing">
          <img src={Profile} alt="" className="rightbarFollowingImg" />
          <span className="rightbarFollowingName">John Carter</span>
        </div>
      </div>
      </>
    )
  }
  return(
    <div className="rightbar">
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}