import React from "react";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { addCategory } from "../service/allapis";
import uniqid from 'uniqid'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ViewAddCategory from "./ViewAddCategory";

function Categories({category}) {
    const [show, setShow] = useState(false);
    const [deleteUpdate,setDeleteUpdate]=useState("")


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


    //create new state to hold input datas
    const[inputs,setInputs]=useState({
      id:'',
      title:'',
      videos:[]
    })

    const takeInput=(e)=>{
      const {name,value}=e.target
      console.log(name);
      console.log(value);

      setInputs({...inputs,[name]:value})
  }

  const handleAdd=async()=>{
    let id=uniqid()
    // console.log(id);
    setInputs({...inputs,["id"]:id})

    //input entered or not
    const {title}=inputs
    if(title==""){  
  
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
    const result=await addCategory(inputs)
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
      

  }
}
  console.log(inputs);




  return (
    <div>
        

<Button className="w-100 mt-3 mb-3" style={{background:'#ff4365', color:'#ffffff'}} variant="info" onClick={handleShow}>
        Add Categories <i class="fa-solid fa-plus fa-beat  ms-2 text-black"></i>
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header style={{background:'#ff4365', color:'#ffffff'}} closeButton>
          <Modal.Title>Add New Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <FloatingLabel controlId="floatingPassword" label="Category Name">
                 <Form.Control onChange={(e)=>takeInput(e)} name="title" type="text" placeholder="Name" />
            </FloatingLabel>

      </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>

      <div>
        <ViewAddCategory  updateDeleteData={setDeleteUpdate}></ViewAddCategory>
  


      </div>
      <ToastContainer />
    </div>
  )
}
export default Categories