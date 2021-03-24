import React from "react"
import $ from 'jquery';
import HorizontalScroll from 'react-scroll-horizontal'


import Menu from "../../components/Layout/LayoutPublic/LayoutPublic";

import tasksImg from '../../assets/images/Background/tasks.svg'
import responsiveImg from '../../assets/images/Background/responsive.svg'
import pcImg from '../../assets/images/Background/pc.svg'
import silueta from '../../assets/images/Background/SiluetaYisus.svg'

const Home = () => {

  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 0) {
        $(".section1").css({ "opacity": "0" })
      }
      else {
        $(".section1").css({ "opacity": "1" })
      }
      if ($(this).scrollTop() > 0) {
        $(".section2").css({ "opacity": "1" })
      }
      else {
        $(".section2").css({ "opacity": "0" })
      }
    })
  })
  return (
    <div className="home">
      <Menu />
      
      <div className="container">
        <div className="section1">
          <img src={tasksImg} alt="task" />
          <img src={responsiveImg} alt="responsive" />
          <img className="computer" src={pcImg} alt="computer" />
          <span className="primary-title">¡PLEASE SCROLL! </span>
        </div>

      </div>
      <div className="section2">
        <h3 >WEB DESIGNER </h3>
        <img src={silueta} alt="silueta" />
      </div>
    </div>
  )
}
export default Home