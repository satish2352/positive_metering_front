import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import axios from "axios";
import { useNavigate } from 'react-router-dom'
import { Col, Container, Row } from 'react-bootstrap'
import '../../assets/CSS/getaquote.css'
import im1 from "../../assets/img/About/Group 1000003851.png"
import im from "../../assets/img/About/Layer71.png"
import ResponsiveImage from '../../pages/ResponsiveImage'
import imgmobile from '../../assets/img/About/aboutmobileview.png'

// Form component
const QuoteForm = ({ onClose }) => {
    const [fullname, setfullname] = useState("");
    const [email, setEmail] = useState("");
    const [mobile, setmobile] = useState("");
    const [message, setmessage] = useState("");
    const [errors, setErrors] = useState({});

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
            errors.email = "Invalid email address";
            isValid = false;
        }

        if (!mobile.trim()) {
            errors.mobile = "Mobile is required";
            isValid = false;
        } else if (!/^\d{10}$/.test(mobile)) {
            errors.mobile = "Mobile number must be exactly 10 digits";
            isValid = false;
        }

        if (!message.trim()) {
            errors.message = "Message is required";
            isValid = false;
        }

        setErrors(errors);
        return isValid;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
            try {
                const response = await axios.post('/carousal-form/addcarousalform', {
                    name: fullname,
                    email,
                    mobile,
                    message,
                });
                if (response.status === 200) {
                    alert("Data Submitted Successfully.");
                    console.log("newData", response.data);
                    onClose && onClose(); // Close the modal if onClose function is provided
                } else {
                    alert("Failed to submit data.");
                }
                setEmail("")
                setmessage("")
                setmobile("")
                setfullname("")
            } catch (error) {
                alert("Failed to submit data.");
                console.error("Error submitting form:", error);
            }
        }
    };

    return (
        <form onSubmit={handleSubmit} className=" formbacks d-grid p-lg-5">
            <input
                type="text"
                name="fullName"
                className="bannerinp ms-2"
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
                className="bannerinp ms-2"
                placeholder="Email Address"
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
                className="bannerinp ms-2"
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
                value={message}
                style={{marginLeft:"7px"}}
                className="bannertxtarea2 bannertxtarea ps-3 "
                onChange={(e) => setmessage(e.target.value)}
                required
            />
            {errors.message && (
                <span className="error text-danger">{errors.message}</span>
            )}
            <button
                type="submit"
                className="bannerbtn w-50 py-2 m-3 me-4 float-end"
            >
                SEND
            </button>
        </form>
    );
};

// Modal component
function MyVerticallyCenteredModal(props) {
    return (
        <Modal
            {...props}
            centered
            closeButton
        >
            <Modal.Body className="getquoteformback">
                <QuoteForm onClose={props.onHide} />
            </Modal.Body>
        </Modal>
    );
}

// Main component
const Getaquote = () => {

    const [modalShow, setModalShow] = useState(false);

    return (
        <>
            <Container fluid className='my-1 mt-2 my-lg-0' style={{ position: "relative" }}>
                <Row className='getaquoteback'>
                    <Col lg={3} className='d-none d-lg-block'>
                        <img src={im} className='img-fluid h-50' alt="" />
                    </Col>
                    <Col lg={6} className='getaquotebackone' style={{ letterSpacing: '3px' }}>
                        <h1 className='p-5 text-white fw-light'>
                            "Streamline Your Dispensing Process <span className='fw-bold fs-1'>Shop Now!</span>"
                        </h1>
                    </Col>
                    <Col lg={3}>
                        <img src={im1} alt="" className='getaquotebackleftimg img-fluid' />
                        <div className='getaquotebackleft text-center px-3'>
                            <h4 className='text-white mx-4'>Its Not Just About The Machinery..</h4>
                            <h6 className='text-uppercase fw-bold'>Its about the efficiency!!</h6>
                            <button
                                style={{ background: "#636262" }}
                                onClick={() => setModalShow(true)}
                                className='text-white border-0 fs-4 py-2 px-4 rounded-5'
                            >
                                Get A Quote
                            </button>
                            <MyVerticallyCenteredModal
                                show={modalShow}
                                onHide={() => setModalShow(false)}
                            />
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
}

export default Getaquote;
