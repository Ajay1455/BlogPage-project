import axios from 'axios'
import { useEffect, useState } from 'react';
import { BsPlayCircleFill } from 'react-icons/bs';
import './MainArticle.css'

function MainArticle(props) {
    const [currentData,setCurrentData]=useState([]);
    
    async function getAllData(){
        const res = await axios.get(`http://localhost:4000/blogs/${props.value}`)
        return res;
      };
      useEffect(() => {
        getAllData().then(res => {
          setCurrentData(res.data)
        })
       },[])
    //    const {Blog}=currentData;
    //    console.log(currentData);
    //    const post=currentData;



  return (
      <div className='articleWrapper'>
        {currentData.map(post=>
        <div className="mainArticleContent">
            <div className="postHeaderContainer">
                <div className="autherPostContainer">
                    <div className="autherPostProfileImgContainer">
                        <img src={post.authorimage} style={{height:'50px',width:'50px',objectFit:"cover"}}
                        width={100} height={100}
                        />
                    </div>
                    <div className="column">
                        <div>{post.authorname}</div>
                        <div className="postDetails">
                            <span>June 15 • 7 min read • </span><span className='listenBtn'>
                              <BsPlayCircleFill/>  Listen </span>
                        </div>
                    </div>
                </div>
               
                <div className='socials'></div>

            </div>

            <div className='articleMainContainer'>
                <div className="bannerContainer">
                    <img src={post.image}
                    height={'100%'}
                    width={'100%'}
                    style={{objectPosition:'cover'}}
                    />
                </div>
                <h1 className='ArtTitle'>
                    {post.title}
                </h1>
                <h4 className="subtitle">
                    <div>{post.authorname}, June 15,2022</div>
                    <div>{post.brief}</div>
                </h4>
                <div className="articleText">
                {post.description}
                </div>
            </div>

        </div>
        )} 
    </div>
  )
}

export default MainArticle