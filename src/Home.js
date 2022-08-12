import React from "react";
import "./Home.css";
import contentimg from "./contentimg.jpg";
import bedroom1 from "./bedroom.jpg";
import bedroom2 from "./bedroom2.jpg";
import usamaimg from "./imgg.jpeg";
import Junaid from "./Junaid.jpeg";
import Menubar from "./Menubar";
import Footer from "./Footer";

function Home() {
  return (
    <div>
      <Menubar />
      <div className="home">
        <p className="Home-text">
          Enjoy <span>Luxury</span> Experience
        </p>
      </div>
      <div className="Section">
        <div className="content">
          WELCOME TO PEARL-CONTINENTAL HOTEL RAWALPINDI Pearl-Continental Hotel
          Rawalpindi is centrally located in the heart of Rawalpindi. The hotel
          is less than 25km away from the Capital. Standing proud on the
          prestigious Mall Road, this cosmopolitan city is known for its
          commercial & shopping areas. We will ensure your stay is hassle-free
          while providing you comforts that you expect away from home.
        </div>
        <div className="image">
          <img src={contentimg}></img>
        </div>
      </div>
      <div className="contentsec">
        <p id="ttext">
          <center>
            {" "}
            <b>
              <div className="contentheading">ACCOMMODATION</div>
            </b>
          </center>
          <center>
            {" "}
            <b>
              <div>LUXURY ROOMS</div>
            </b>
          </center>
          Your top priority after a tiring journey would be to find the right
          space to wind down. The deluxe hotel rooms and suites at the
          Pearl-Continental hotel in Rawalpindi, Pakistan, offer maximum comfort
          allowing you ample of space to relax and recover from jet lag or a
          long drive. We proudly boast the best accommodation in Rawalpindi for
          business and leisure.
        </p>
      </div>
      <div className="bedroomimg">
        <img src={bedroom1}></img>
        <img src={bedroom2}></img>
      </div>
      <div className="Adminsec">
        <center>
          <h1>Admins</h1>
        </center>
        <div className="Admins">
          <div className="Usama">
            <img className="usamapic" src={usamaimg}></img>
            <h3>Malik Usama Bin Nusrat</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicingLorem, ipsum
              dolor sit amet consectetur adipisicingLorem, ipsum dolor sit amet
              consectetur adipisicingLorem, ipsum dolor sit amet consectetur
              adipisicing{" "}
            </p>
          </div>
          <div className="Usama">
            <img className="usamapic" src={Junaid}></img>
            <h3>Muhammmad Junaid Ibrahim</h3>
            <p>
              {" "}
              Lorem, ipsum dolor sit amet consectetur adipisicingLorem, ipsum
              dolor sit amet consectetur adipisicingLorem, ipsum dolor sit amet
              consectetur adipisicingLorem, ipsum dolor sit amet consectetur
              adipisicing
            </p>
          </div>
        </div>
      </div>
      <Footer />
    </div>

    // </div>
  );
}

export default Home;
