import React from "react"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import uniqid from 'uniqid'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addVideo } from "../service/allapis";
function Add({updateData}) {
  const [show, setShow] = useState(false);

  //create new state to hold input datas
  const[inputs,setInputs]=useState({
    id:'',
    title:'',
    coverImage:'',
    videoURL:''
  })

  const takeInput=(e)=>{
      const {name,value}=e.target
      console.log(name);
      console.log(value);

      setInputs({...inputs,[name]:value})
  }

  // console.log(inputs);

  const convertURL=(e)=>{
    var url=e.target.value
    url=url.slice(-11,)
    console.log(url);
    var convertedURL=`https://www.youtube.com/embed/${url}?autoplay=1`
    const {name}=e.target
    setInputs({...inputs,[name]:convertedURL})
  }
  // console.log(inputs);

  //generating id
  const handleAdd=async()=>{
    let id=uniqid()
    // console.log(id);
    setInputs({...inputs,["id"]:id})

    //input entered or not
    const {title,coverImage,videoURL}=inputs
    if(title=="" || coverImage=="" || videoURL==""){  
  
      toast.error('All inputs are required!', {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }); 
  } 
  else{
    const result=await addVideo(inputs)
    // console.log(result);
    if(result.status>=200 && result.status<300){
      toast.success(`${result.data.title} is added!!!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        }); 
    }
    
      handleClose()
      updateData(result.data)

  }
}
  console.log(inputs);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="text-center mt-5">
        <img onClick={handleShow} className=" btn" src="https://www.durham.ca/en/health-and-wellness/resources/Images/Report-Imms-Icon.png" height={200}/>

      <Modal className=""  show={show} onHide={handleClose}>
        <Modal.Header style={{background:'#FC9F9F', color:'#ffffff'}} closeButton>
          <Modal.Title className="text-dark text-center" style={{background:'#FC9F9F'}}>Upload New Video </Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
        <FloatingLabel controlId="floatingPassword" label="Caption">
                 <Form.Control name='title' onChange={(e)=>takeInput(e)} type="text" placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword1" label="Cover Image URL">
                 <Form.Control name='coverImage' onChange={(e)=>takeInput(e)} type="text" placeholder="Name" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword2" label="YouTube Video URL">
                 <Form.Control name='videoURL' onChange={(e)=>convertURL(e)} type="text" placeholder="Name" />
            </FloatingLabel>
           

        </Modal.Body>
        <Modal.Footer  style={{background:'#ff4365', color:'#ffffff'}}>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="light" onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>

      <ToastContainer />
    </div>
  )
}
export default Add