import { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../authentication/authRoutes';
import "./Navbar.css";
export default function Navbar() {
  const navigate = useNavigate();
  const [navbar, setNavbar] = useState(false);

  const { user } = useContext(AuthContext);

  const changeBackground = () => {
    if (window.scrollY >= 400) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };
  window.addEventListener("scroll", changeBackground);

  return (
    <div className="Navbar">
      <div className="left">
        <div className="logo">
          <img
            src="https://media.istockphoto.com/id/1414371525/vector/modern-letter-pb-or-bp-monogram-logo-design.jpg?b=1&s=170667a&w=0&k=20&c=gLEB1EF7n3pwM7NTvXdl-8ADNe5nykw19xv44lfB9kQ="
            alt=""
          />
          <h1>BlogPlace</h1>
        </div>
      </div>
      <div className="right">
        <h4>Our Story</h4>
        <h4>Membership</h4>
        <h4>Write</h4>
        <div className="GetStarted">
          <img src={user.profilePic} alt="" />
          <span>{user.userName}</span>
        </div>
      </div>
    </div>
  );
}
