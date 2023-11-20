import React from "react"
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div  >
         <Navbar className="p-3" style={{background:'#ff4365'}} id="nav">
        <Container className="" style={{background:'#ff4365'}}>
          <Link to={'/'} style={{background:'#ff4365', textDecoration:'none'}}>
              <Navbar.Brand href="#home" className="" style={{background:'#ff4365'}}>
                <img
                  alt=""
                  src="https://w7.pngwing.com/pngs/69/965/png-transparent-red-play-button-button-icon-next-button-text-button-vector-web-button-thumbnail.png"
                  width="70"
                  height="50"
                  className="d-inline-block align-top"
                />{' '}
                <strong className="" style={{background:'#ff4365', fontSize:'30px', fontFamily: 'Dancing Script',color:'#FCCEEE'}}>VidYard</strong>
              </Navbar.Brand>
          </Link>
        </Container>
      </Navbar>
    </div>
  )
}
export default Header