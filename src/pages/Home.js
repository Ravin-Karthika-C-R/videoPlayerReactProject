import React from "react"
import { Col, Row } from "react-bootstrap"
import Add from "../components/Add"
import { Link } from "react-router-dom"
import Videos from "../components/Videos"
import Categories from "../components/Categories"


function Home() {
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
          <h3>bcdbsbcjsbjc chbdsbjcbjs</h3>
          <Link style={{textDecoration:'none'}} to={'/history'}>
          <h5 className="text-info">
          <i class="fa-regular fa-clock fa-spin fa-spin-reverse me-2"></i>Watch History</h5>
          </Link>
          
          </Col>
          <Col>
          <Add></Add>
          </Col>
        </Row>
        <hr/>
        <Row className="p-3 mt-3 bg-light">
          <Col lg={8}>
              <Videos></Videos>
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