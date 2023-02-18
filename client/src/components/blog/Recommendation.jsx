import { useContext } from "react";
import { BsSearch } from "react-icons/bs";
import { IoMdMailUnread } from "react-icons/io";
import { AuthContext } from "../../authentication/authRoutes";
import "./Recommendation.css";

function Recommendation({auther}) {

  const { user ,blog} = useContext(AuthContext);

  return (
    <div className="recWrapper">
      <div className="accentedBtn">Get Unlimited Access</div>
      <div className="searchBar">
        <BsSearch />
        <input type="text" className="searchInput" placeholder="Search" />
      </div>

      <div className="AutherContainer">
        <div className="AutherImgContainer">
          <img src={user.profilePic} width={100} height={100} />
        </div>

        <div className="AutherName">{user.userName}</div>
        <div className="followers">1M followers</div>
        <div className="AutherAction">
          <button className="actionBtn">Follow</button>
          <button className="actionBtn">
            <IoMdMailUnread />
          </button>
        </div>
      </div>

      <div className="RecommendationContainer">
        <div className="Title">More from BlogPage</div>
        <div className="ArticlesContainer">
          
          {blog.slice(0,3).map(post=> (
          <div className="articleContentWrapper">
            <div className="articleContent">
              <div className="recommendationAutherContainer">
                <div className="recommendAutherProfileImgContainer">
                  <img src={post.authorimage} style={{height:'26px',width:'25px'}} height={100} width={100} />
                </div>
                <div className="recommendationAutherName">{post.authorname}</div>
              </div>
              <div className="recommendedTitle">
                {post.title}
              </div>
            </div>

            <div className="recommendationThumbnailContainer">
              <img
                className="recommendationThumbnail"
                src={post.image}
                height={60}
                width={80}
              />
            </div>
          </div>
          ))};
        </div>
      </div>
    </div>
  );
}

export default Recommendation;
