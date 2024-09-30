import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

function Demo({ show, handleClose }) {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [emailError, setEmailError] = useState("");
  const [nameError, setNameError] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);


  const handlePhoneChange = (e) => {
    const input = e.target.value;
    if (input.length <= 10 && /^\d*$/.test(input)) { // Ensures only numbers are allowed
      setPhone(input);
    }
  };

  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidName = name.length > 0;
    const isValidEmail = emailRegex.test(email);
    const isValidPhone = phone.length === 10;

    if (isValidName && isValidEmail && isValidPhone) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  };

  useEffect(() => {
    validateForm();
  }, [name, email, phone]);

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!name.length) {
      setNameError("Please Enter Your Name");
      return;
    } else {
      setNameError("");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setEmailError("Please Enter a valid Email");
      return;
    } else {
      setEmailError("");
    }


    if (!phone.length) {
      setPhoneError("Enter your phone number");
      return;
    } else if (phone.length !== 10) {
      setPhoneError("Phone number is invalid");
      return;
    } else {
      setPhoneError("");
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
                onChange={(e) => setName(e.target.value)}
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


        <Button type="submit" className='btnsub default-btn btn' disabled={isButtonDisabled}>
          Submit
        </Button>
      </Form>
    </Modal>
  );
}

export default Demo;
