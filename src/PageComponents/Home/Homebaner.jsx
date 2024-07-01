// import React, { useState } from "react";
// import Modal from "react-bootstrap/Modal";
// import "../../assets/CSS/homebanner.css";
// import { TypeAnimation } from "react-type-animation";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// const Homebaner = () => {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   const [fullname, setfullname] = useState("");
//   const [email, setEmail] = useState("");

//   const [mobile, setmobile] = useState("");
//   const [message, setmessage] = useState("");

//   const [errors, setErrors] = useState({});

//   const validateForm = () => {
//     let errors = {};
//     let isValid = true;

//     if (!fullname.trim()) {
//       errors.fullname = "full Name is required";
//       isValid = false;
//     }

//     if (!mobile.trim()) {
//       errors.mobile = "mobile is required";
//       isValid = false;
//     }
//     if (!email.trim()) {
//       errors.email = "email is required";
//       isValid = false;
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       errors.email = "invalid email address";
//       isValid = false;
//     }

//     if (!mobile) {
//       errors.mobile = "Mobile number is required";
//       isValid = false;
//     } else if (!/^\d{10}$/.test(mobile)) {
//       errors.mobile = "Mobile number must be exactly 10 digits";
//       isValid = false;
//     }
//     if (!message.trim()) {
//       errors.message = "message is required";
//       isValid = false;
//     }

//     setErrors(errors);
//     return isValid;
//   };
//   console.log("errors", errors);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (validateForm()) {
//       let newData = {
//         fullname,
//         email,

//         mobile,
//         message,
//       };
//       alert("Data Submited Success..");
//       console.log("newData", newData);
//     }
//   };

//   return (
//     <>
//       <Container className="homebannerback d-none d-lg-block" fluid>
//         <Row>
//           <Col lg={3}></Col>
//           <Col lg={6}>
//             <div className=" homebannertext p-5">
//               {" "}
//               <div className="text-white fs-4 fw-bold">
//                 <span className=" fw-bolder  fs-1">WELCOME</span> To Positive
//                 Meter
//               </div>
//               <p className=" text-white" style={{ textAlign: "justify" }}>
//                 Exploring new food with different transition form all Asian
//                 country especially from Cambodia that you can try at this place
//                 and get a good price from us as well we will make a good impact
//                 to our customers{" "}
//               </p>
//             </div>
//           </Col>
//           <Col lg={3} sm={12} className=" bannerform my-5">
//             <div class="contact-form">
//               <h2 className="py-3">CONTACT</h2>
//               <form onSubmit={handleSubmit}>
//                 <input
//                   type="text"
//                   name="fullName"
//                   className=" bannerinp"
//                   placeholder="Full name"
//                   value={fullname}
//                   onChange={(e) => setfullname(e.target.value)}
//                   required
//                 />
//                 {errors.fullname && (
//                   <span className="error text-danger">{errors.fullname}</span>
//                 )}

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   className=" bannerinp"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 {errors.email && (
//                   <span className="error text-danger">{errors.email}</span>
//                 )}

//                 <input
//                   type="tel"
//                   name="mobileNumber"
//                   placeholder="Mobile Number"
//                   className=" bannerinp"
//                   value={mobile}
//                   onChange={(e) => setmobile(e.target.value)}
//                   required
//                 />
//                 {errors.mobile && (
//                   <span className="error text-danger">{errors.mobile}</span>
//                 )}

//                 <textarea
//                   name="message"
//                   placeholder="Message"
//                   className=" bannertxtarea"
//                   value={message}
//                   onChange={(e) => setmessage(e.target.value)}
//                   required
//                 >
//                   {errors.message && (
//                     <span className="error text-danger">{errors.message}</span>
//                   )}
//                 </textarea>
//                 <button
//                   type="submit"
//                   className="bannerbtn px-4 py-2 m-3 me-4 float-end"
//                 >
//                   Send
//                 </button>
//               </form>
//             </div>
//           </Col>
//         </Row>
//       </Container>
//       <Container className="homebannerback2 d-block d-lg-none " fluid>
//         <Row>
//           <Col lg={12}>
//             <div className=" homebannertext2 py-4 px-2 m-2 ">
//               <div className="text-white fs-1 ">
//                 <span
//                   className=" fw-bolder "
//                   style={{ color: "#EE585D", fontSize: "60px" }}
//                 >
//                   <TypeAnimation
//                     sequence={[`WELCOME`, 1000, ""]}
//                     speed={50}
//                     repeat={Infinity}
//                   />
//                 </span>
//                 <br /> To Positive Meter
//               </div>
//               {/* <p className=' text-white fs-4' style={{ textAlign: "justify" }}>Exploring new food with different transition form all Asian country especially from Cambodia that you can try at this place and get a good price from us as well we will make a good impact to our customers </p> */}
//             </div>
//           </Col>

//           <Col lg={3} sm={12}>
//             <>
//               <Button
//                 variant="primary"
//                 onClick={handleShow}
//                 className="bannerbtn px-4 py-2 m-3 me-4 float-end"
//               >
//                 CONTACT
//               </Button>

//               <Modal show={show} onHide={handleClose}>
//                 <Modal.Body style={{ backgroundColor: "#EE585D" }}>
//                   <Modal.Header closeButton></Modal.Header>
//                   <div className=" bannerform2 ">
//                     <div class="contact-form mx-4 py-4">
//                       <h2 className="py-3">CONTACT</h2>
//                       <form onSubmit={handleSubmit}>
//                       <input
//                   type="text"
//                   name="fullName"
//                   className=" bannerinp"
//                   placeholder="Full name"
//                   value={fullname}
//                   onChange={(e) => setfullname(e.target.value)}
//                   required
//                 />
//                 {errors.fullname && (
//                   <span className="error text-danger">{errors.fullname}</span>
//                 )}

//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email Address"
//                   className=" bannerinp"
//                   value={email}
//                   onChange={(e) => setEmail(e.target.value)}
//                   required
//                 />
//                 {errors.email && (
//                   <span className="error text-danger">{errors.email}</span>
//                 )}

//                 <input
//                   type="tel"
//                   name="mobileNumber"
//                   placeholder="Mobile Number"
//                   className=" bannerinp"
//                   value={mobile}
//                   onChange={(e) => setmobile(e.target.value)}
//                   required
//                 />
//                 {errors.mobile && (
//                   <span className="error text-danger">{errors.mobile}</span>
//                 )}

//                 <textarea
//                   name="message"
//                   placeholder="Message"
//                   className=" bannertxtarea"
//                   value={message}
//                   onChange={(e) => setmessage(e.target.value)}
//                   required
//                 >
//                   {errors.message && (
//                     <span className="error text-danger">{errors.message}</span>
//                   )}
//                 </textarea>

//                         <button
//                           type="submit"
//                           className="bannerbtn px-4 py-2 m-3 me-4 float-end border border-white"
//                         >
//                           Send
//                         </button>
//                       </form>
//                     </div>
//                   </div>
//                 </Modal.Body>
//               </Modal>
//             </>
//           </Col>
//         </Row>
//       </Container>
//     </>
//   );
// };

// export default Homebaner;

import Carousel from 'react-bootstrap/Carousel';
import Image from 'react-bootstrap/Image';
import banner1 from "../../assets/img/Home/image 36.png"
import banner2 from "../../assets/img/Home/image 29.png"
import banner3 from "../../assets/img/Home/image 19.png"
import { Col, Row } from 'react-bootstrap';
import "../../assets/CSS/homebanner.css";
import { useState } from 'react';
function Homebaner() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [fullname, setfullname] = useState("");
  const [email, setEmail] = useState("");

  const [mobile, setmobile] = useState("");
  const [message, setmessage] = useState("");

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!fullname.trim()) {
      errors.fullname = "full Name is required";
      isValid = false;
    }

    if (!mobile.trim()) {
      errors.mobile = "mobile is required";
      isValid = false;
    }
    if (!email.trim()) {
      errors.email = "email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "invalid email address";
      isValid = false;
    }

    if (!mobile) {
      errors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile number must be exactly 10 digits";
      isValid = false;
    }
    if (!message.trim()) {
      errors.message = "message is required";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };
  console.log("errors", errors);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      let newData = {
        fullname,
        email,

        mobile,
        message,
      };
      alert("Data Submited Success..");
      console.log("newData", newData);
    }
  };
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <Image src={banner1} rounded className='img-fluid' />
          <Carousel.Caption>
            {/* <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
            <Row  >
              <Col lg={3}></Col>
              <Col lg={6}>
                <div className=" homebannertext p-10">
                  {" "}
                  <div className="text-white fs-4 fw-bold">
                    <span className=" fw-bolder  fs-1">WELCOME</span> To Positive
                    Meter
                  </div>
                  <p className=" text-white" style={{ textAlign: "justify" }}>
                    Exploring new food with different transition form all Asian
                    country especially from Cambodia that you can try at this place
                    and get a good price from us as well we will make a good impact
                    to our customers{" "}
                  </p>
                </div>
              </Col>
              <Col lg={3} sm={12} className=" bannerform my-5">
                <div class="contact-form">
                  <h2 className="py-3">CONTACT</h2>
                  <form onSubmit={handleSubmit} >
                    <input
                      type="text"
                      name="fullName"
                      className=" bannerinp"
                      placeholder="Full name"
                      value={fullname}
                      onChange={(e) => setfullname(e.target.value)}
                      required
                    />
                    {errors.fullname && (
                      <span className="error text-danger">{errors.fullname}</span>
                    )}
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      className=" bannerinp"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    {errors.email && (
                      <span className="error text-danger">{errors.email}</span>
                    )}

                    <input
                      type="tel"
                      name="mobileNumber"
                      placeholder="Mobile Number"
                      className=" bannerinp"
                      value={mobile}
                      onChange={(e) => setmobile(e.target.value)}
                      required
                    />
                    {errors.mobile && (
                      <span className="error text-danger">{errors.mobile}</span>
                    )}

                    <textarea
                      name="message"
                      placeholder="Message"
                      className=" bannertxtarea"
                      value={message}
                      onChange={(e) => setmessage(e.target.value)}
                      required
                    >
                      {errors.message && (
                        <span className="error text-danger">{errors.message}</span>
                      )}
                    </textarea>
                    <button
                      type="submit"
                      className="bannerbtn px-4 py-2 m-3 me-4 float-end"
                    >
                      Send
                    </button>
                  </form>
                </div>
              </Col>
            </Row>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Image src={banner1} rounded className='img-fluid' />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        {/* <Carousel.Item>
        <Image src={banner1} rounded className='img-fluid'/>
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item> */}
      </Carousel>
    </>
  );
}

export default Homebaner;