import './Post.css';
import { useState } from 'react';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Like from '../../assets/like.png';
import Heart from '../../assets/heart.png';
import { Users } from '../../dummyData';

export default function Post({post}) {
    const [like,setLike] = useState(1)
    const [isLiked,setIsLiked] = useState(false)

    const likeHandler = () => {
        setLike(isLiked ? like-1 : like+1)
        setIsLiked(!isLiked)
    }
  return (
    <div className='post'>
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={Users.filter((u) => u.id === post?.userId)[0].profilePicture} alt="" className='postProfileImg'/>
                    <span className='postUsername'>{Users.filter(u=>u.id===post.userId)[0].username}</span>
                    <span className='postDate'>{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post?.desc}</span>
                <img src={post.photo} alt="" className='postImg'/>
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                <img src={Like} alt="" onClick={likeHandler} className='likeIcon'/>
                <img src={Heart} alt="" onClick={likeHandler} className='heartIcon'/>
                <span className="postLikeCounter">{like} ppl liked</span>
                </div>
            <div className="postBottomRight">
                <span className="postCommentText">{post.comment} comments</span>
            </div> </div>
        </div>
    </div>
  )
}
