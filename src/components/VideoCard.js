import React from "react";
import Card from 'react-bootstrap/Card';
import { Trash2 } from "react-feather";
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function VideoCard() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  return (
    <div>
        <Card style={{ width: '18rem' }}>
      <Card.Img onClick={handleShow} variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVo-V61AY7JFiYQHYa40xi7irmjGzWmdlnXg&usqp=CAU" />
      <Card.Body>
        <Card.Title>Biriyani Recipie</Card.Title>
        
        <Trash2></Trash2>
      </Card.Body>
    </Card>
    <Modal  show={show} onHide={handleClose}>
        <Modal.Header style={{background:'#ff4365'}} closeButton>
          <Modal.Title>Biriyani Recipie</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <iframe width="100%" height="570" src="https://www.youtube.com/embed/mX4M9TNroKc?autoplay=1" title="പൊരിച്ച കോഴിന്റെ ബിരിയാണിയുടെ രുചി😋👌 അതൊന്ന് വേറെ തന്നെ |തലശ്ശേരി സ്റ്റൈൽ| FRIED CHICKEN DUM BIRYANI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Modal.Body>
        <Modal.Footer>
          
        </Modal.Footer>
      </Modal>
    </div>
  )
}
export default VideoCard