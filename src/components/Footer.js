import React from "react";
import './Footers.css'
import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="padding_4x">
  <div className="flex">
    <section className="flex-content padding_1x">
    <img
                  alt=""
                  src="https://w7.pngwing.com/pngs/69/965/png-transparent-red-play-button-button-icon-next-button-text-button-vector-web-button-thumbnail.png"
                  width="40"
                  height="40"
                  className="d-inline-block align-top"
                />
    <strong className="" style={{ fontSize:'30px', fontFamily: 'Dancing Script',color:'#FCCEEE'}}> VidYard </strong>
      <p className="mt-3">Video player is one of the best in audio video player category. it supports all types of video format and audio format.
         video player also plays ultra high definition video files too. equalizer helps you to make your audio playing super cool. 
        enjoy ultimate high quality video player. music player with mp3 cutter makes your favorite song to ring tone features</p>
    </section>
    <section className="flex-content padding_1x">
      <h3></h3>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
      <a href="#"></a>
    </section>
    <section className="flex-content padding_1x">
      <h3>Quick Links</h3>
    <Link to="/"><a href="#">Main</a> </Link>  
    <Link to="/home"><a href="#">Home</a> </Link>  
    <Link to="/history"><a href="#">Watch History</a> </Link>  
    </section>
    
    
    <section className="flex-content padding_1x">
      <h3>Newsletter</h3>
      <p>You can trust us. we only send promo offers,</p>
      <fieldset className="fixed_flex">
        <input type="email" name="newsletter" placeholder="Your Email Address"/>
        <button className="btn btn-danger btn_2">Subscribe</button>
      </fieldset>
    </section>
  </div>
  <div className="flex">
    <section className="flex-content padding_1x">
      <p>Copyright ©2023 All rights reserved || website name</p>
    </section>
    <section className="flex-content padding_1x">
      <a href="#"><i className="fa fa-facebook"></i></a>
      <a href="#"><i className="fa fa-twitter"></i></a>
      <a href="#"><i className="fa fa-dribbble"></i></a>
      <a href="#"><i className="fa fa-linkedin"></i></a>
    </section>
  </div>
</footer>
  );
}

export default Footer;
