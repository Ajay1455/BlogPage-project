import { useParams } from 'react-router-dom'
import './Blog.css'
import MainArticle from './blog/MainArticle'
import ReadersNav from './blog/ReadersNav'
import Recommendation from './blog/Recommendation'

function Blog() {
  const {id}=useParams();
  return (
    <div className='postContent'>
        <ReadersNav />
        <MainArticle value={id}/>
        <Recommendation />
    </div>
  )
}

export default Blog