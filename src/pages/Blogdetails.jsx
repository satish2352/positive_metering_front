import React, { useState } from "react";
import "./blogdetails.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";
import blogdetails_img1 from "../assets/img/Blogdetails/blogdetails_img1.png";
import blogdetails_img2 from "../assets/img/Blogdetails/blogdetails_img2.png";

import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import Form from "react-bootstrap/Form";
import Heading from "../components/Heading";

function MyVerticallyCenteredModal(props) {
  const [fullname, setfullname] = useState("");
  const [clg, setclg] = useState("");
  const [mobile, setmobile] = useState("");
  const [dob, setdob] = useState("");
  const [gender, setgender] = useState("");
  const [fieldofstudy, setfieldofstudy] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [comment, setcomment] = useState("");
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!fullname.trim()) {
      errors.fullname = "full Name is required";
      isValid = false;
    }
    if (!clg.trim()) {
      errors.clg = "collage Name is required";
      isValid = false;
    }

    if (!mobile.trim()) {
      errors.mobile = "mobile is required";
      isValid = false;
    }
    // if (!email.trim()) {
    //   errors.email = 'email is required';
    //   isValid = false;
    // } else if (!/\S+@\S+\.\S+/.test(email)) {
    //   errors.email = 'invalid email address';
    //   isValid = false;
    // }
    // if (!aadhaar.trim()) {
    //   errors.aadhaar = 'aadhaar is required';
    //   isValid = false;
    // }
    // else if (!/^\d{12}$/.test(aadhaar)) {
    //   errors.aadhaar = 'Mobile number must be exactly 12 digits';
    //   isValid = false;
    // }
    if (!mobile) {
      errors.mobile = "Mobile number is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile number must be exactly 10 digits";
      isValid = false;
    }
    if (!dob.trim()) {
      errors.dob = "DOB is required";
      isValid = false;
    }

    if (!gender.trim()) {
      errors.gender = "gender is required";
      isValid = false;
    }

    if (!fieldofstudy.trim()) {
      errors.fieldofstudy = "field of study is required";
      isValid = false;
    }
    if (!username.trim()) {
      errors.username = "username is required";
      isValid = false;
    }
    if (!password.trim()) {
      errors.password = "password is required";
      isValid = false;
    }
    if (!comment.trim()) {
      errors.comment = "comment is required";
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
        clg,
        mobile,
        dob,
        gender,
        fieldofstudy,
        username,
        password,
        comment,
      };
      alert("Data Submited Success..");
      console.log("newData", newData);
    }
  };

  // const handlesubmit = (e) => {
  //   e.preventDefault();
  //   alert('Thank you for your feedback')
  // }
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Get A Quote Form
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter name"
                  value={fullname}
                  onChange={(e) => setfullname(e.target.value)}
                />
                {errors.fullname && (
                  <span className="error text-danger">{errors.fullname}</span>
                )}
              </Form.Group>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Collage Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="collage name"
                  value={clg}
                  onChange={(e) => setclg(e.target.value)}
                />
                {errors.clg && (
                  <span className="error text-danger">{errors.clg}</span>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Mobile no</Form.Label>
                <Form.Control
                  type="tel"
                  placeholder="enter number"
                  value={mobile}
                  onChange={(e) => setmobile(e.target.value)}
                />
                {errors.mobile && (
                  <span className="error text-danger">{errors.mobile}</span>
                )}
              </Form.Group>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>DOB</Form.Label>
                <Form.Control
                  type="date"
                  placeholder="collage name"
                  value={dob}
                  onChange={(e) => setdob(e.target.value)}
                />
                {errors.dob && (
                  <span className="error text-danger">{errors.dob}</span>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Form.Label>Gender</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={gender}
                onChange={(e) => setgender(e.target.value)}
              >
                <option>Open this select menu</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </Form.Select>
              {errors.gender && (
                <span className="error text-danger">{errors.gender}</span>
              )}
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Form.Label>Feild of Study</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={fieldofstudy}
                onChange={(e) => setfieldofstudy(e.target.value)}
              >
                <option>Open this select menu</option>
                <option value="B.Tech">B.Tech</option>
                <option value="M.Tech">M.Tech</option>
                <option value="MBA">MBA</option>
                <option value="BCA">BCA</option>
                <option value="MCA">MCA</option>
              </Form.Select>
              {errors.fieldofstudy && (
                <span className="error text-danger">{errors.fieldofstudy}</span>
              )}
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} sm={12}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="enter username"
                  value={username}
                  onChange={(e) => setusername(e.target.value)}
                />
                {errors.username && (
                  <span className="error text-danger">{errors.username}</span>
                )}
              </Form.Group>
            </Col>
            <Col lg={6} md={6} sm={12}>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="enter password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
                {errors.password && (
                  <span className="error text-danger">{errors.password}</span>
                )}
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Comment</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={comment}
              onChange={(e) => setcomment(e.target.value)}
            />
            {errors.comment && (
              <span className="error text-danger">{errors.comment}</span>
            )}
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

function Blogdetails() {
  window.scrollTo(0, 0);

  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      <Heading heading={"Blog"} />
      <Container className="mt-3"  heading={"Blog"}>
        <Row>
          <Col lg={8} md={8} sm={12}>
            <Image src={blogdetails_img1} height={"500rem"} fluid />
          </Col>
          <Col lg={4} md={4} sm={12}>
            <Image
              src={blogdetails_img2}
              rounded
              style={{ height: "31rem", width: "30rem" }}
              fluid
            />
            <Button
              variant="dark"
              id="getaquote_button"
              style={{ height: "45px", width: "200px", borderRadius: "60px" }}
              onClick={() => setModalShow(true)}
            >
              Get A Quote
            </Button>
            <MyVerticallyCenteredModal
              show={modalShow}
              onHide={() => setModalShow(false)}
            />
          </Col>
        </Row>
        <div className="mt-3"></div>
        <h1>
          PHOSPHATE DOSING IN PROPANE DEHYOGENATION POH UNIT INTEGRATED WITH
          POLYPROLENE
        </h1>
      </Container>
      <div className="mt-3"></div>
      <Container>
        <p>
          Sonatrach Refinery is the national state-owned oil company of Algeria.
          Founded in 1963, it is known today to be the largest company in Africa
          with 154 subsidiaries, and is often referred to as the first African
          oil “major”.
        </p>
        <p>
          The Sonatrach Refinery is to set up three Central Processing (CPF)
          facilities at:
          <p>
            1.Hassi Ba Hamou and Reg Mouaded Field (6 MMSCMD capacity)
            <p>
              2.Hassi Tidjerane Field (4 MMSCMD capacity)
              <p>
                3.Tinerkouk Field (4 MMSCMD capacity)
                <p>
                  The three facilities are located close to each other in the
                  Adrar province of Algeria
                  <p>
                    Positive Metering Pumps (India) Pvt Ltd, was awarded the
                    following Chemical Injection Packages
                    <p>
                      1.pH Injection Skids
                      <p>
                        2.Corrosion Inhibitor Injection Skids
                        <p>
                          3.Biocide Injection Skids
                          <p>
                            4.Methanol Injection Skids
                            <p>
                              A set above all packages was designed,
                              manufactured and dispatched to each of the above
                              locations. Piping engineers, Process Equipment
                              Engineers at Positive Metering Pumps company took
                              special efforts in researching the needs of the
                              prestigious customer. A quality Plan was drawn for
                              the project considering the stringent requirements
                              and best engineering practices. Each process while
                              executing the project was thoroughly monitored. It
                              resulted in offering Factory Acceptance Test
                              confidently and it went smooth before dispatches.
                              <p>
                                The film shows Biocides Injection Packages kept
                                ready just before dispatch after boxing. The
                                place is the manufacturing facility of Positive
                                Metering Pumps (I) Pvt Ltd ( Plant III, at
                                Sinnar, Maharashtra, India )
                              </p>
                            </p>
                          </p>
                        </p>
                      </p>
                    </p>
                  </p>
                </p>
              </p>
            </p>
          </p>
        </p>
      </Container>
      <div className="mb-5"></div>
    </>
  );
}

export default Blogdetails;
