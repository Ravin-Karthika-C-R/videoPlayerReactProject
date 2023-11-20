import React from "react"
import { Button, Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"


function Landing() {
  return (
    <div>
        <div className="container" style={{background:'#F5F5F5'}}> 

        
        <Row className="mt-5 mb-5 me-4 ms-5">
            <Col className="ms-4 mt-5">

                <h5 className="mt-5 ms-5" style={{fontSize:25}}><i>
                Subscribe today and start enjoying a world of video content that celebrates the thrill of adventure, the beauty of nature, and the resilience of the human spirit. There's a story waiting for you here at VidYard. Start watching now!</i> </h5>
               <Link to={'/home'}>
                    <Button className="mt-3 ms-5 text-center bg-dark">Get Start</Button>
               </Link> 
            </Col>
            <Col className=" ms-3 me-4 ">
            <img src="https://cdn.dribbble.com/users/60779/screenshots/2313582/playbutton_animation_nocard_2x.gif" height={500} width={500}>
            </img>
            </Col>

        </Row>

        <Row className="me-5  mt-5 justify-content-center" style={{ alignItems: "center" }}>
            <h1 className="text-center mb-5">Features</h1>
            <Col md={3} className="ms-5 mb-5">
            <div class="card mb-5" style={{width:'18rem'}}>
                 <img class="card-img-top" src="https://i.postimg.cc/g07kM9FP/play-fill-loader-unscreen.gif"  alt="Card image cap"/>
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
                <img class="card-img-top" src="https://media.giphy.com/avatars/soundplate/oTH1GytwBbvD.gif" height={219} width={300} alt="Card image cap"/>
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
                <img class="card-img-top" src="https://media3.giphy.com/media/umDiqaSIBFbGMDUYoP/giphy.gif?cid=6c09b952b43mnllh18vmm5agfdho7lczsa82q6uc4gdu5rgx&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=s" height={210} width={300}  alt="Card image cap"/>
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