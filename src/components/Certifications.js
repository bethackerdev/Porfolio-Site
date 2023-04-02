import React from "react";
import { Container } from "react-bootstrap";
import aws from "../assets/img/aws.png";
import google from "../assets/img/google.png";
import nucamplogo from "../assets/img/nucamplogo.png";



const Certifications = () => {
  return (
    <section className="certifications">
      <h1 className="certhead"> Certifications</h1>
      <Container className="mt-5 mb-3">
        <div className="row">
        <div className="col-md-3">
            <div className="card p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <img className="icon" src={nucamplogo} alt="icon" />
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Nucamp</h6> <span>March 2023</span>
                  </div>
                </div>
                <div className="badge"> <span>Dev</span> </div>
              </div>
              <div className="mt-3">
                <h3 className="heading">Full Stack Development With Mobile </h3>
                <div className="mt-5">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="mt-3"> <a href="https://drive.google.com/file/d/1IFXEM0HKTil4sB7cPYQxjXNgDaiLHLp4/view?usp=share_link"> Check Out My Certificate! </a> </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="card p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <img className="icon" src={aws} alt="icon" />
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">AWS</h6> <span>February 2023</span>
                  </div>
                </div>
                <div className="badge"> <span>Cloud</span> </div>
              </div>
              <div className="mt-3">
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
          <div className="col-md-3">
            <div className="card p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <img className="icon" src={google} alt="icon" />
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Google</h6> <span>March 2023</span>
                  </div>
                </div>
                <div className="badge"> <span>PM</span> </div>
              </div>
              <div className="mt-3">
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
         
         <div className="col-md-3">
            <div className="card p-3 mb-2">
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-row align-items-center">
                  <img className="icon" src={google} alt="icon" />
                  <div className="ms-2 c-details">
                    <h6 className="mb-0">Google</h6> <span>March 2023</span>
                  </div>
                </div>
                <div className="badge"> <span>UX</span> </div>
              </div>
              <div className="mt-3">
                <h3 className="heading">UX Design with Figma </h3>
                <div className="mt-5">
                  <div className="progress">
                    <div className="progress-bar" role="progressbar" style={{ width: "100%" }} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                  </div>
                  <div className="mt-3"> <a href="https://www.credly.com/badges/65b112ba-1ebc-4be1-8400-9084514bb97c/linked_in_profile"> Check Out My Certificate! </a> </div>
                </div>
              </div>
            </div>
          </div>
          </div>
         
         
             
    </Container>
    </section>

)
};

export default Certifications;
