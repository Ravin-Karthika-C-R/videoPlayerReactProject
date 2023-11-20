import React from "react"
import { useEffect } from "react"
import { useState } from "react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';


import { Col, Row } from "react-bootstrap"
import { Trash2 } from "react-feather"
import { getCategory, getSingleVideo, getVideo, removeCategory, updateCategory } from "../service/allapis"
import { Link } from "react-router-dom";


function ViewAddCategory({updateDeleteData}) {

    const [allCategories, setVideos]=useState([])

    const handleDelete=async(id)=>{
      const result= await removeCategory(id)
      if(result.status>=200 && result.status<300){
        updateDeleteData(result.data)
      }
      
    }
    const getAllCategories = async()=>{
      const result=await getCategory()
      setVideos(result.data); 
    }
  
    useEffect(()=>{
      getAllCategories()
    },[])
  
    console.log("getcategories",allCategories);

    const draggedover=(e,id)=>{
      e.preventDefault()
      console.log("dragged over cat.."+id);
    }

    const dropped=async(e,id)=>{
      console.log("dropped category id...."+id);
      //access dragged video id
      let videoId=e.dataTransfer.getData('cardId')
      console.log("dropped video id.."+videoId);

      //video
      const {data}=await getSingleVideo(videoId)
      console.log(data);

      //category
      let catgory=allCategories.find(i=>i.id==id)
      console.log(catgory);

      //add video to videos array of category
      catgory.videos.push(data)

      console.log(catgory);

      //update changed category in backend
      await updateCategory(id,catgory)
      await getAllCategories() 
    }
  return (
    <div>
      
    <Row className="container border border-4 ms-1">
        {
          allCategories?.length>0 && allCategories.map(i=>(
        
        <Col lg={12} className=" mt-3  mb-3">  
        <div id="cat" droppable onDragOver={e=>draggedover(e,i?.id)} onDrop={e=>dropped(e,i?.id)} className="border  border-danger" style={{background:'#FCCECE', color:'#ff4365', borderRadius:'20px'}}>
        <h3 className="text-center mt-3" style={{fontFamily:'cursive', fontSize:'20px'}}>{i.title}
        <Link to={`/home/singlecategory/${i.id}`}>
          <FontAwesomeIcon className="ms-2" icon={faPlay} flip style={{ color: '#f03853' }} />
        </Link>

        <Trash2 onClick={()=>handleDelete(i.id)} className="me-5 mt-1 text-black" style={{float:'right'}}></Trash2>
            <hr className="w-75 ms-5 justify-content-center"/>
            <marquee>
         <div  className="d-flex justify-content-evenly">
        {
          i?.videos?.map(item=>(
            <div>
              <img style={{height:'50px', width:'50px'}} src={item?.coverImage}></img>
            </div>
          ))
        }
        </div> 
        </marquee>  
        </h3>
        </div>
        
          </Col>
          ))
          
        }
    </Row>
    </div>
  )
}
export default ViewAddCategory