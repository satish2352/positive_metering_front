import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ReCAPTCHA from "react-google-recaptcha";
import "../../assets/CSS/requestcall.css";
import homepagevideo from "../../assets/video/My Videodsgfdg.mp4";
import mobilepagevideo from "../../assets/video/WhatsApp-Video-2024-07-18-at-115.mp4";

const Requestcallback = () => {

  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth >= 768 && window.innerWidth < 1232);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 1232);
  const [videoSrc, setVideoSrc] = useState(mobilepagevideo);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1232);
      setIsDesktop(width >= 1232);

    }

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [isCaptchaVerified, setCaptchaVerified] = useState(false);
  const [content, setContent] = useState(
    "Unlock unparalleled dosing precision and reliability with our state-of-the-art Plunger Type Dosing Pumps. Engineered to surpass industry standards and meet the most demanding applications, our pumps redefine excellence in fluid handling."
  );

  useEffect(() => {
    const updateContent = () => {

      if (window.innerWidth < 493) {
        setContent(""); // Set content to empty if width is below 493px
      } else if (window.innerWidth < 744) {
        setContent(
          "Experience next-level dosing precision with our advanced Plunger Type Dosing Pumps, designed to exceed the highest industry standards. Ideal for the most challenging applications, our pumps set a new benchmark in fluid handling."
        );
      } else {
        setContent(
          <div
            className="p-3 p-lg-5 d-grid align-items-center"
            style={{ textAlign: "justify" }}
          >
            <div className="description">
              Unlock unparalleled dosing precision and reliability with
              our state-of-the-art Plunger Type Dosing Pumps. Engineered
              to surpass industry standards and meet the most demanding
              applications, our pumps redefine excellence in fluid
              handling.
            </div>
            <ul className="features">
              <li>Plunger-style dosing pump featuring gland packing</li>
              <li>Accurate metering instruments</li>
              <li>
                Consistent metering accuracy regardless of back pressure
              </li>
              <li>
                Flow rate linearly related to changes in stroke length
              </li>
              <li>
                Optional external setup for flushing the gland packing
              </li>
            </ul>
          </div>
        );
      }
    };

    window.addEventListener("resize", updateContent);

    // Initial check
    updateContent();

    // Cleanup on unmount
    return () => window.removeEventListener("resize", updateContent);
  }, []);
  const captchaRef = useRef(null);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!fullname.trim()) {
      errors.fullname = "Full Name is required";
      isValid = false;
    }

    if (!email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Invalid Email Id";
      isValid = false;
    }

    if (!mobile.trim()) {
      errors.mobile = "Mobile is required";
      isValid = false;
    } else if (!/^\d{10}$/.test(mobile)) {
      errors.mobile = "Mobile No Must Be 10 Digits";
      isValid = false;
    }

    if (!message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    if (!isCaptchaVerified) {
      errors.captcha = "Please complete the reCAPTCHA before submitting.";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateForm()) {
      try {
        const response = await axios.post("/carousal-form/addcarousalform", {
          name: fullname,
          email,
          mobile,
          message,
        });
        if (response.status === 200) {
          alert("Thank You..! We Will Connect With You Soon.");
          try {
            const response = await axios.post('https://positivemetering.in/contacts.php',
              {
                name: fullname,
                email,
                mobile,
                message
              },
              {
                headers: {
                  'Content-Type': 'application/json', // Ensure you're sending JSON data
                },
              }
            );
            if (response.status === 200) {
              console.log('Email sent successfully');
            } else {
              console.log('Failed to send email');
            }
          } catch (error) {
            console.error('There was an error sending the email!', error);
            console.log('Error sending email');
          }
          setFullname("");
          setEmail("");
          setMobile("");
          setMessage("");
          setErrors({});
        } else {
          setSuccessMessage("Failed to submit data.");
        }
      } catch (error) {
        setSuccessMessage("Failed to submit data.");
        console.error("Error submitting form:", error);
      }
    }
  };

  const handleCaptchaChange = (value) => {
    setCaptchaVerified(true);
    console.log("Captcha value:", value);
  };

  return (
    <>
      {isMobile ? (
        // Content to render on mobile

        <></>
      ) : isTablet ? (
        <Container fluid className="requestcallbackcontainer ">
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="viod"
          >
            <source src={homepagevideo} type="video/mp4" />
          </video>

          <div className="requestcallback d-flex align-items-center justify-content-evenly">
            <Container className="p-4">
              <Row className="d-flex justify-content-evenly fw-bold">

                <Col lg={12} className="requestcallbackleft">
                  <div className="requestcallbacklefttop">
                    <h4 className="text-white text-center py-3 text-uppercase">
                      Request A CALL BACK
                    </h4>
                  </div>
                  <div className="p-3 px-lg-5">
                    <form onSubmit={handleSubmit}>
                      <div className=" row">
                        <div className="col-6 d-grid fw-bold">
                          <label className="requestinputlb ms-2 p-2">
                            Full Name
                          </label>
                          <input
                            type="text"
                            className="requestinput"
                            placeholder="Enter Full Name"
                            value={fullname}
                            onChange={(e) => setFullname(e.target.value)}
                            required
                          />
                          {errors.fullname && (
                            <span className="error text-danger">
                              {errors.fullname}
                            </span>
                          )}
                        </div>
                        <div className=" col-6 d-grid">
                          <label className="requestinputlb ms-2 p-2">
                            Email Id
                          </label>
                          <input
                            type="text"
                            className="requestinput"
                            placeholder="Enter Email Id"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                          />
                          {errors.email && (
                            <span className=" ms-4 fw-light text-danger">
                              {errors.email}
                            </span>
                          )}
                        </div>
                        <div className="d-grid col-6">
                          <label className="requestinputlb ms-2 p-2">
                            Mobile No
                          </label>
                          <input
                            type="number"

                            className="requestinput"
                            placeholder="Enter Mobile No"
                            pattern="^\d{10}$"
                            value={mobile}
                            onChange={(e) => setMobile(e.target.value)}
                            required
                          />
                          {errors.mobile && (
                            <span className=" ms-4 fw-light text-danger">
                              {errors.mobile}
                            </span>
                          )}
                        </div>
                        <div className="d-grid col-6">
                          <label className="requestinputlb ms-2 p-2">Message</label>
                          <textarea
                            className="requesttext "
                            style={{ padding: "12px", paddingLeft: "22px" }}
                            placeholder="Enter Message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                          ></textarea>
                          {errors.message && (
                            <span className="error text-danger">
                              {errors.message}
                            </span>
                          )}
                        </div>
                      </div>
                      <ReCAPTCHA

                        ref={captchaRef}
                        // sitekey="6LevTFsqAAAAAD5gvKBNZTzNtgPHTX38UAlQdV_E"
                        // sitekey="6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz"
                        // positive.in
                        //  sitekey="6LfKtTgqAAAAAGiBqsRqk3xuGrMnqfIlKQgMpT4f"
                        // positive.com
                        // sitekey="6Lc9fHAqAAAAAHnziHljOuI8xEvd4VU-xTikN5Y4"
                        // positive.ae
                        sitekey="6LdscT8qAAAAAPbFHPpVbW3vesSLNAIEqdZuB8Dq"
                        onChange={handleCaptchaChange}
                      />
                      {errors.captcha && (
                        <span className="error text-danger">
                          {errors.captcha}
                        </span>
                      )}
                      <div className="d-flex justify-content-end ">
                        <button
                          className="px-4 py-2 text-center formrequestbtn"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      ) : (
        // Content to render on desktop
        <Container fluid className="requestcallbackcontainer ">
          <video
            autoPlay
            loop
            muted
            poster="https://assets.codepen.io/6093409/river.jpg"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
            className="viod"
          >
            <source src={homepagevideo} type="video/mp4" />
          </video>

          <div className="requestcallback d-flex align-items-center justify-content-evenly">
            <Container className="p-4">
              <Row className="d-flex justify-content-evenly fw-bold">
                <Col lg={7} className="requestcallbackleft d-none d-lg-block">
                  <div className="requestcallbacklefttop">
                    <h4 className="text-white text-center py-3">
                      PLUNGER TYPE DOSING PUMPS
                    </h4>
                  </div>
                  <div
                    className="p-3 p-lg-5 d-grid align-items-center"
                    style={{ textAlign: "justify" }}
                  >
                    <div className="description">
                      Unlock unparalleled dosing precision and reliability with
                      our state-of-the-art Plunger Type Dosing Pumps. Engineered
                      to surpass industry standards and meet the most demanding
                      applications, our pumps redefine excellence in fluid
                      handling.
                    </div>
                    <ul className="features">
                      <li>Plunger-style dosing pump featuring gland packing</li>
                      <li>Accurate metering instruments</li>
                      <li>
                        Consistent metering accuracy regardless of back pressure
                      </li>
                      <li>
                        Flow rate linearly related to changes in stroke length
                      </li>
                      <li>
                        Optional external setup for flushing the gland packing
                      </li>
                    </ul>
                  </div>
                </Col>
                <Col lg={4} className="requestcallbackleft">
                  <div className="requestcallbacklefttop">
                    <h4 className="text-white text-center py-3 text-uppercase">
                      Request A CALL BACK
                    </h4>
                  </div>
                  <div className=" px-lg-5">
                    <form onSubmit={handleSubmit}>
                      <div className="d-grid fw-bold">
                        <label className="requestinputlb ms-2 p-2">
                          Full Name
                        </label>
                        <input
                          type="text"
                          className="requestinput"
                          placeholder="Enter Full Name"
                          value={fullname}
                          onChange={(e) => setFullname(e.target.value)}
                          required
                        />
                        {errors.fullname && (
                          <span className="error text-danger">
                            {errors.fullname}
                          </span>
                        )}
                      </div>
                      <div className="d-grid">
                        <label className="requestinputlb ms-2 p-2">
                          Email Id
                        </label>
                        <input
                          type="text"
                          className="requestinput"
                          placeholder="Enter Email Id"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                        {errors.email && (
                          <span className=" ms-4 fw-light text-danger">
                            {errors.email}
                          </span>
                        )}
                      </div>
                      <div className="d-grid">
                        <label className="requestinputlb ms-2 p-2">
                          Mobile No
                        </label>
                        <input
                          type="number"

                          className="requestinput"
                          placeholder="Enter Mobile No"
                          pattern="^\d{10}$"
                          value={mobile}
                          onChange={(e) => setMobile(e.target.value)}
                          required
                        />
                        {errors.mobile && (
                          <span className=" ms-4 fw-light text-danger">
                            {errors.mobile}
                          </span>
                        )}
                      </div>
                      <div className="d-grid">
                        <label className="requestinputlb ms-2 p-2">Message</label>
                        <textarea
                          className="requesttext "
                          style={{ padding: "12px", paddingLeft: "22px" }}
                          placeholder="Enter Message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                        ></textarea>
                        {errors.message && (
                          <span className="error text-danger">
                            {errors.message}
                          </span>
                        )}
                      </div>
                      <ReCAPTCHA
                        className="my-4"
                        ref={captchaRef}
                        // sitekey="6LevTFsqAAAAAD5gvKBNZTzNtgPHTX38UAlQdV_E" // local web
                        sitekey="6LdscT8qAAAAAPbFHPpVbW3vesSLNAIEqdZuB8Dq" // ae
                        // sitekey="6LfKtTgqAAAAAGiBqsRqk3xuGrMnqfIlKQgMpT4f" //.in
                        // sitekey="6Le657EpAAAAADHl0EnUi-58y19XOcORV9dehjAz"
                        // positive.com
                        // sitekey="6Lc9fHAqAAAAAHnziHljOuI8xEvd4VU-xTikN5Y4"
                        onChange={handleCaptchaChange}
                      />
                      {errors.captcha && (
                        <span className="error text-danger">
                          {errors.captcha}
                        </span>
                      )}
                      <div className="d-flex justify-content-end pb-2">
                        <button
                          className="px-4 py-2 text-center formrequestbtn"
                          type="submit"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </Col>
              </Row>
            </Container>
          </div>
        </Container>
      )}



    </>
  );
};

export default Requestcallback;
