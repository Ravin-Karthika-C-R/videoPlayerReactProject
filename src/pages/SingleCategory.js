import React, { useState,useEffect } from 'react'
import { useParams} from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Trash2 } from 'react-feather';
import { getSingleCategoryVideos, updateCatagories } from '../service/allapis';
function SingleCategory() {
    const {id}=useParams()
    // console.log(id);
    const [cat,setCat]=useState()
    const getSingleCategory=async()=>{
       const result=await getSingleCategoryVideos(id)
       setCat(result.data);
       console.log(cat);
    }

    const handleVideoDelete=async(videoId)=>{
      const updatedVideos = cat.videos.filter((video) => video.id !== videoId);

      // Update the category with the new videos array
      await updateCatagories(id, { ...cat, videos: updatedVideos });
          getSingleCategory()

    }
    useEffect(()=>{
      getSingleCategory()
    },[])
  
return (
<div >
          <h1 className='text-center mt-5 ' style={{fontFamily:"Dancing Script",fontWeight:"bolder",color:'#ff4365'}}>Category Items</h1>

      <div className='d-flex container p-5'>
      {cat && cat.videos && cat.videos.length > 0 && // Check if cat is not null or undefined and videos array exists
        cat.videos.map((video) => (
          <div className='p-3 m-3' key={video.id}>
            <Card style={{ width: '18rem' }}>
              <Card.Img style={{width:"285px",height:"250px"}} variant="top" src={video.coverImage} />
              <Card.Body>
                <Card.Title>{video.title}</Card.Title>
                <hr />
               <div className='text-center'>
                    <Button className='text-danger bg-white ' style={{border:'none'}}>
      
                      <Trash2 onClick={()=>handleVideoDelete(video.id)} />
                    </Button>
               </div>
              </Card.Body>
            </Card>
          </div>
        ))}
              </div> 
  </div> )
}

  
export default SingleCategory