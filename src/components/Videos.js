import React, { useEffect, useState } from "react"
import VideoCard from "./VideoCard"
import { getVideo } from "../service/allapis"
import { Col, Row } from "react-bootstrap"
import { Loader } from "react-feather"

function Videos({data}) {

  const [allVideos, setVideos]=useState([])
  const [deleteUpdate, setDeleteUpdate]=useState("")
  const getAllVideos = async()=>{
    const result=await getVideo()
    setVideos(result.data);
  }

  useEffect(()=>{
    getAllVideos()
  },[data,deleteUpdate])

  console.log(allVideos);
  
  return (
    <Row className="container">
        {
          allVideos.length>0?allVideos.map(i=>(
        
        <Col lg={4} md={6} className="p-3">  <VideoCard updateData={setDeleteUpdate} video={i}></VideoCard>  </Col>
          ))
          :<Loader></Loader>
        }
    </Row>
  )
}
export default Videos