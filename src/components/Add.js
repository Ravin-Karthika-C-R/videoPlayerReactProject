import React from "react"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Add() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div className="text-center mt-5">
        <img onClick={handleShow} className=" btn" src="https://i.postimg.cc/ht4Qsb0f/124768836-white-arrow-up-with-shadow-in-blue-circle-icon-isolated-on-white-upload-icon-upgrade-sign.png" height={200}/>

      <Modal className=""  show={show} onHide={handleClose}>
        <Modal.Header style={{background:'#ff4365'}} closeButton>
          <Modal.Title className="text-white text-center" style={{background:'#ff4365'}}>Upload New Video </Modal.Title>
        </Modal.Header>
        <Modal.Body className="">
            <input className="bg-white mb-3 form-control" placeholder="Caption" ></input>
            <input className="bg-white mb-3 form-control" placeholder="Cover Image URL" ></input>
            <input className="bg-white form-control" placeholder="YouTube Video URL" ></input>

        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default Add