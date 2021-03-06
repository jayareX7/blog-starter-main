import React from "react";
import Fade from 'react-reveal/Fade'

const ResidentialSteps = () => {
  return (
    <section className="chat_core_features_area sec_pad" style={{marginBottom: 4 + 'em'}}>
      <div className="container">
        <div className="hosting_title chat_title text-center">
          <Fade bottom duration={1600}>
          <h2 style={{lineHeight: 9 + "rem", fontSize: 8 + "rem", letterSpacing: 0.2 + "rem", fontFamily: "Bison"}}>
            Our Process
            <br /> <div className={{lineHeight: 12 + "rem", fontSize: 5 + "rem", letterSpacing: 0.2 + "rem", fontFamily: "Bison"}}>That makes us 
            <span style={{fontSize: 8 + "rem", letterSpacing: 0.2 + "rem", fontFamily: "Bison-Bold"}}> top notch</span></div>
          </h2>
          </Fade>
        </div>
        <div className="row">
         

         <Fade left duration={1400}>      
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item">
              <div className="round">
                <div className="round_circle two"></div>
                <img
                  className="top_img p_absoulte"
                  src='assets/triangle.png'
                  alt=""
                />
                <img src='assets/search.png' alt="" />
              </div>
              <a href=".#">
                <h4 className="sacramento">Search And Find </h4>
              </a>
              <p>
             <span> Select A Service</span><br/><br/>
                 Its as easy as 1,2,3 
              </p>
            </div>
          </div>
          </Fade>

          <Fade left duration={1800}>  
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp">
              <div className="round">
                <div className="round_circle"></div>
                <img
                  className="top_img p_absoulte"
                  src='assets/pluse.png'
                  alt=""
                />
                  <img src='assets/mobile.png' alt="" />
                </div>
              <a href=".#">
                <h4>Choose A Service</h4>
              </a>
              <p>
            <span>Book Clean</span><br/><br/>
              Select an available date and time that works for you!
              </p>
            </div>
          </div>
          </Fade>



          <Fade left duration={2200}>  
          <div className="col-lg-4 col-md-6">
            <div className="chat_features_item wow fadeInUp" data-wow-delay="0.4s">
              <div className="round">
                <div className="round_circle three"></div>
                <img
                  className="top_img p_absoulte"
                  src='assets/box.png'
                  alt=""
                />
                <img src='assets/book.png' alt="" />
              </div>
              <a href=".#">
                <h4>Confirm Booking</h4>
              </a>
              <p>
              <span> Confirm Your Selected Service</span> <br/><br/>
                 Everything look good? checkout and pay, youre all set!
              </p>
            </div>
          </div> 
        </Fade>

        </div>
      </div>
     

    </section>
  );
};
export default ResidentialSteps;
