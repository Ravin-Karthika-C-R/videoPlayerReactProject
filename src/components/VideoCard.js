import React from "react";
import Card from 'react-bootstrap/Card';
import { Trash2 } from "react-feather";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { addHistory, removeVideo } from "../service/allapis";
import uniqid from 'uniqid'
import { format } from "date-fns";

function VideoCard({video,updateData}) {
    const [show, setShow] = useState(false);
    const handleDelete=async(id)=>{
      const result=await removeVideo(id)
      if(result.status>=200 && result.status<300){
        updateData(result.data)
      }
      
    }
    const handleClose = () => setShow(false);
    const handleShow = async() => {
      setShow(true);
      //history
      //id
      let id=uniqid()

      //date
      let date=format(new Date(),'MM/dd/yyyy h:mm a')
      console.log(date);
      //title
      let title=video.title
      //videourl
      let videoURL=video.videoURL

      var body={
        id,time:date,title,videoURL
      }
      // console.log(body);

      await addHistory(body)
  
    }

    const dragStarted=(e,id)=>{
      console.log("drag is started....video id is"+id);

      //store dragged data
      e.dataTransfer.setData('cardId',id)
    }
  return (
    <div>
        <Card draggable onDragStart={(e)=>dragStarted(e,video?.id)} style={{ width: '18rem' }}>
      <Card.Img className="w-100" style={{height:'200px'}} onClick={handleShow} variant="top" src={video.coverImage} />
      <Card.Body>
        <Card.Title>
          {video?.title.length>27?video?.title.slice(0,24)+"...":video?.title}
        </Card.Title>
        
        <Trash2 onClick={()=>handleDelete(video?.id)} size={55} className="btn text-danger"></Trash2>
      </Card.Body>
    </Card>
    <Modal  show={show} onHide={handleClose}>
        <Modal.Header style={{background:'#ff4365', color:'#ffffff'}} closeButton>
          <Modal.Title>{video?.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="570" src={video?.videoURL} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default VideoCard