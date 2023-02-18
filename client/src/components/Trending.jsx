import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../authentication/authRoutes";
import "./Trending.css";
export default function Trending() {

  const {blog} =useContext(AuthContext);
  let count=0;
  return (
    <div className="Trending">
      <h1 style={{fontWeight:"lighter"}}>💹Trending on BlogPlace</h1>
      <div className="content">
    {blog.map(post=>(
      <div className="items">
          {count=count+1}
          <div className="itemleft">{String(count).slice(0,0)}</div>
          <div className="itemright">
            <div className="Userinfo">
              <img
                src={post.authorimage}
              />
              <span>{post.authorname}</span>
            </div>

  <NavLink style={{textDecoration:"none"}} to={`/BlogPlace/post/${post._id}`}>
            <div className="title">
              <h4>{post.title.slice(0,26)+"..."}</h4>
            </div>
        </NavLink>

            <div className="time">feb 8 . 4 min read.</div>
          </div>
        </div>
        ))}
      </div>
      <br/>
    </div>
  );
}
