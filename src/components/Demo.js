import { useState } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Alert from 'react-bootstrap/Alert';

function Demo({ show, handleClose }) {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleNameChange = (e) => {
    const input = e.target.value;
    const nameRegex = /^[a-zA-Z\s]*$/;
    if (nameRegex.test(input)) {
      setName(input);
    }
  };

  const handlePhoneChange = (e) => {
    const input = e.target.value;
    if (input.length <= 10 && /^\d*$/.test(input)) {
      setPhone(input);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let isValid = true;

    if (!name.length) {
      setNameError("Please Enter Your Name");
      isValid = false;
    } else {
      setNameError("");
    }

    if (!emailRegex.test(email)) {
      setEmailError("Please Enter a valid Email");
      isValid = false;
    } else {
      setEmailError("");
    }

    if (!phone.length) {
      setPhoneError("Please Enter Your Phone Number");
      isValid = false;
    } else if (phone.length < 10) {
      setPhoneError("Phone number is invalid");
      isValid = false;
    } else {
      setPhoneError("");
    }

    if (isValid) {
      setSuccessMessage("Your request has been received. Our team will respond shortly.");
      setName("");
      setEmail("");
      setPhone("");
    } else {
      setSuccessMessage("");
    }
  };

  return (
    <Modal
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      size="lg"
      className='customModel'
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>Book Demo</Modal.Title>
      </Modal.Header>

      <Form onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Col lg={6} className='mb-3'>
            <Form.Group controlId="validationCustom01">
              <Form.Label>Your Name<span className='errorCls'>*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Name"
                value={name}
                onChange={handleNameChange}
              />
            </Form.Group>
            {nameError && <p className='errormsg'>{nameError}</p>}
          </Col>
          <Col lg={6} className='mb-3'>
            <Form.Group controlId="validationCustom02">
              <Form.Label>Email<span className='errorCls'>*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>
            {emailError && <p className='errormsg'>{emailError}</p>}
          </Col>
          <Col lg={12} className='mb-3'>
            <Form.Group controlId="validationCustom03">
              <Form.Label>Mobile No.<span className='errorCls'>*</span></Form.Label>
              <Form.Control
                type="text"
                placeholder="Mobile No."
                value={phone}
                onChange={handlePhoneChange}
              />
            </Form.Group>
            {phoneError && <p className='errormsg'>{phoneError}</p>}
          </Col>
          <Col lg={12} className='mb-1'>
            <Form.Group>
              <Form.Label>Your Message</Form.Label>
              <Form.Control as="textarea" placeholder="Your Message" rows={3} />
            </Form.Group>
          </Col>
        </Row>

        <Button type="submit" className='btnsub default-btn btn'>Submit</Button>
      </Form>

      {successMessage && (
        <Alert variant="success" className="mt-3">
          {successMessage}
        </Alert>
      )}
    </Modal>
  );
}

export default Demo;
