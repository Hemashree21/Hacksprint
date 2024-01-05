import "./Profile.css";
import Topbar from "../Navbar-sg/Navbar";
import Sidebar from "../Leftbar/Leftbar";
import Feed from "../Studygroup/Homesg";
import Rightbar from "../Rightbar/Rightbar";
import avatar from '../../assets/avatar.png';
import cover from '../../assets/ad.jpg';
import Layout from "../Layout";

export default function Profile() {
  return (
    <Layout>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                className="profileCoverImg"
                src={cover}
                alt=""
              />
              <img
                className="profileUserImg"
                src={avatar}
                alt=""
              />
            </div>
            <div className="profileInfo">
                <h4 className="profileInfoName">Safak Kocaoglu</h4>
                <span className="profileInfoDesc">Hello my friends!</span>
            </div>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </Layout>
  );
}