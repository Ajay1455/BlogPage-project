import "./ReadersNav.css";
import { FiHome } from "react-icons/fi";
import { FaEdit } from "react-icons/fa";
import { GrNotification } from "react-icons/gr";
import { RiArticleLine } from "react-icons/ri";
import { BsBookmarks } from "react-icons/bs";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../authentication/authRoutes";

function ReadersNav() {
  const url =
    "https://media.istockphoto.com/id/1414371525/vector/modern-letter-pb-or-bp-monogram-logo-design.jpg?b=1&s=170667a&w=0&k=20&c=gLEB1EF7n3pwM7NTvXdl-8ADNe5nykw19xv44lfB9kQ=";

    const {user} =useContext(AuthContext);
    
    return (
    <div className="wrapper">
      <NavLink to="/BlogPlace">
        <div className="logoContainer">
          <img src={url} />
        </div>
      </NavLink>
      <div className="iconsContainer">
        <FiHome />
        <GrNotification />
        <BsBookmarks />
        <RiArticleLine />
        <div className="divider" />
        <FaEdit />
      </div>

      <div className="profileImgContainer">
        <img className="profileImg" src={user.profilePic} />
      </div>

    </div>
  );
}

export default ReadersNav;
