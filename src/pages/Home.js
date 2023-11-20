import React, { useState } from "react"
import { Col, Row } from "react-bootstrap"
import Add from "../components/Add"
import { Link } from "react-router-dom"
import Videos from "../components/Videos"
import Categories from "../components/Categories"
import { useEffect } from "react"


function Home() {

  //state for state lifting

  const [addUpdate,setAddUpdate]=useState("")
  return (
    <div>
      <div className="me-5 ms-5">
        <Row className="mt-5 mb-5">
          <Col>
          <img src="https://img.freepik.com/premium-vector/youtube-player-online-video-streaming_82422-13.jpg?w=2000" height={400} width={350}>
          </img>
          </Col>
          <Col>
          <h1>Start Uploading Videos for Free</h1>
          <h5 style={{fontFamily:'-moz-initial'}}>video player is one of the best in audio video player category. 
            it supports all types of video format and audio format. video player also plays ultra high definition video files too.
             equalizer helps you to make your audio playing super cool.
             enjoy ultimate high quality video player. music player with mp3 cutter makes your favorite song to ring tone features</h5>
          <Link style={{textDecoration:'none'}} to={'/history'}>
          <h5 className="" style={{color:'#ff4365'}}>
          <i class="fa-regular fa-clock fa-spin fa-spin-reverse me-2"></i>Watch History</h5>
          </Link>
          
          </Col>
          <Col>
          <Add updateData={setAddUpdate}></Add>
          </Col>
        </Row>
        <hr/>
        <Row className="p-3 mt-3 bg-light">
          <Col lg={8}>
              <Videos data={addUpdate}></Videos>
          </Col>
          <Col lg={4}>
              <Categories></Categories>
          </Col>
        </Row>

      </div>

    </div>
  )
}
export default Home