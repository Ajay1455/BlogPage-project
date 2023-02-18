import Header from "./Header";
import React from "react";
import Navbar from "./Navbar";
import Trending from "./Trending";
import Footer from "./Footer";
import PostCard from "./PostCard";
import Login from "./afterLogin/Login";

function Home() {
  const postsList = {
    display: "flex",
    flexDirection: "column",
    gap: "0.75rem",
    padding: "0.5rem",
  };
  const container = {
    maxWidth: "80rem",
    flex: "1",
  };
  const main = {
    display: "flex",
    justifyContent: "center",
  };
  return (
    <>
      <Navbar />
      <Header />
      <Trending />
      <hr />
      <div style={main}>
        <div style={container}>
          <div style={postsList}>
            <PostCard />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Home;
