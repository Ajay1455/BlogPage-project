import "./PostCard.css";
import {FiBookmark} from 'react-icons/fi'
import {NavLink} from 'react-router-dom'
import { useContext } from "react";
import { AuthContext } from "../authentication/authRoutes";

function PostCard() {

    const { blog } = useContext(AuthContext);

    return (
      <>
        {blog.slice(0,6).map(post=> (
      <div className="postContainer">
    <div className="PostDetails">
      <div className="autherContainer">
        <div className="autherImgContainer">
          <img src={post.authorimage} width={40} height={40} />
        </div>

        <div className="authername">{post.authorname}</div>
      </div>

      <NavLink style={{textDecoration:"none"}} to={`/BlogPlace/post/${post._id}`}>
      <h1 className="title">
        {post.title.slice(0,35)+"..."}
      </h1>
      </NavLink>
      <div className="briefing">
        {post.brief.slice(0,33)+"..."}
      </div>
      <div className="detailsContainer">
        <span style={{ margin: "0 2", fontSize: ".8rem" }}>
          Jun 15 • 5 min read •{" "}
          <span
            style={{
              background: "#F2F3F2",
              padding: "0.2rem",
              borderRadius: "50px",
              fontSize: ".8rem",
            }}
          >
            {post.tag}
          </span>
        </span>
        <span className="bookmarkContainer">
            <FiBookmark style={{height:"1rem",width:'1.25rem'}}/>
        </span>
      </div>
    </div>

    <div className="thumbnail">
        <img width={100} height={100} src={post.image} />
    </div>

    </div>
      ))}
      </>
  );
}

export default PostCard;
