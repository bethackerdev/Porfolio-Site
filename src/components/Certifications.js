import React from "react";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import aws from "../assets/img/aws.png";
import google from "../assets/img/google.png";
import li from "../assets/img/li.png";



const Certifications = () => {
  return (
    <section className= "certifications">
    <h1 className= "certhead"> Certifications</h1>
    <Container className="mt-5 mb-3 help">
      <div className="row">
        <div className="col-md-4">
          <div className="card p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
               <img className= "icon" src={aws} alt="icon" /> 
                <div className="ms-2 c-details">
                  <h6 className="mb-0">AWS</h6> <span>February 2023</span>
                </div>
              </div>
              <div className="badge"> <span>Cloud</span> </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">AWS Cloud Practioner</h3>
              <div className="mt-5">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="mt-3"> <a href="https://www.credly.com/badges/9a413c99-36a7-475d-8e7a-2d229ec559f9"> Check Out My Certificate! </a> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
              <img className= "icon" src={google} alt="icon" /> 
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Google</h6> <span>March 2023</span>
                </div>
              </div>
              <div className="badge"> <span>PM</span> </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">Google Project Management </h3>
              <div className="mt-5">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="mt-3"> <a href="https://www.credly.com/badges/65b112ba-1ebc-4be1-8400-9084514bb97c/linked_in_profile"> Check Out My Certificate! </a> </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center ">
              <img className= "icon" src={li} alt="icon" /> 
                <div className="ms-2 c-details">
                  <h6 className="mb-0">LinkedIn</h6> <span>March 2023</span>
                </div>
              </div>
              <div className="badge"> <span>Design</span> </div>
                </div>
                <div class="mt-5">
                    <h3 class="heading">Figma For UX Design </h3>
                    <div class="mt-5">
                        <div class="progress">
                            <div class="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="mt-3"> <a href="https://www.linkedin.com/learning/certificates/ff08f777a24b7d04af8d854dba053cfdd03b2ff3462f006e69290dd8115f74bc"> Check Out My Certificate! </a> </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="col-md-4">
          <div className="card p-3 mb-2">
            <div className="d-flex justify-content-between">
              <div className="d-flex flex-row align-items-center">
              <img className= "icon" src={google} alt="icon" /> 
                <div className="ms-2 c-details">
                  <h6 className="mb-0">Google</h6> <span>March 2023</span>
                </div>
              </div>
              <div className="badge"> <span>PM</span> </div>
            </div>
            <div className="mt-5">
              <h3 className="heading">Google Project Management </h3>
              <div className="mt-5">
                <div className="progress">
                  <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <div className="mt-3"> <a href="https://www.credly.com/badges/65b112ba-1ebc-4be1-8400-9084514bb97c/linked_in_profile"> Check Out My Certificate! </a> </div>
              </div>
            </div>
          </div>
        </div>
    </Container>
    </section>

)
};

export default Certifications;
