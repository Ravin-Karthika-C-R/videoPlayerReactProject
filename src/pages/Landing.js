import React from "react"
import { Button, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"


function Landing() {
  return (
    <div>
        <div className="container">

        
        <Row className="mt-5 mb-5 me-4 ms-5">
            <Col className="ms-4 mt-5">

                <h5 className="mt-5 ms-5" style={{fontSize:25}}><i>
                Subscribe today and start enjoying a world of video content that celebrates the thrill of adventure, the beauty of nature, and the resilience of the human spirit. There's a story waiting for you here at VidYard. Start watching now!</i> </h5>
               <Link to={'/home'}>
                    <Button className="mt-3 ms-5 text-center bg-dark">Get Start</Button>
               </Link> 
            </Col>
            <Col className=" ms-3 me-4 ">
            <img src="https://miro.medium.com/v2/resize:fit:1400/1*f7cZomxEUsR2AYQVlUXZog.gif" height={500}>
            </img>
            </Col>

        </Row>

        <Row className="me-5  mt-5 justify-content-center" style={{ alignItems: "center" }}>
            <h1 className="text-center mb-5">Features</h1>
            <Col md={3} className="ms-5 mb-5">
            <div class="card mb-5" style={{width:'18rem'}}>
                 <img class="card-img-top" src="https://cdn.dribbble.com/users/34556/screenshots/1680799/play.gif" alt="Card image cap"/>
                    <div class="card-body">
            <Link to={'/home'}>

                        <h5 class="card-title text-danger">Managing Videos</h5>
            </Link>

                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       
                    </div>
            </div>
            </Col>


            <Col md={3} className=" mb-5">
            <div class="card  mb-5" style={{width:'18rem'}}>
                <img class="card-img-top" src="https://media2.giphy.com/media/oHvAmqRlyw6oHnIQLL/giphy.gif" height={219} width={300} alt="Card image cap"/>
                    <div class="card-body">
                    <Link to={'/home'}>
                        <h5 class="card-title text-danger">Categorise Videos</h5>
                    </Link>

                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       
                    </div>
            </div>
            </Col>


            <Col md={3} className=" mb-5">
            <div class="card  mb-5" style={{width:'18rem'}}>
                <img class="card-img-top" src="https://solange.co.uk/cdn/shop/files/Rainbow_Soundwave_mobile_750x600_optimised_x800.gif?v=1655295517" height={210} width={300}  alt="Card image cap"/>
                    <div class="card-body">
                    <Link to={'/history'}>
                        <h5 class="card-title text-danger">Watch History</h5>
                        </Link> 
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                       
                    </div>
            </div>
            </Col>
       
        </Row>
        <Row>
            <Col>
            <img></img>
            </Col>
        </Row>
        </div>
    </div>
  )
}
export default Landing