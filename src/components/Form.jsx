import React, { useState } from "react";
import { Button, Alert, Container, Row, Col } from "react-bootstrap";

import FormPageOne from "./FormPageOne";
import FormPageTwo from "./FormPageTwo";

const FormPageThree = ({ prev, values }) => {
  return (
    <>
      <p>First Name: {values.firstName}</p>
      <p>Last Name: {values.lastName}</p>
      <p>Email: {values.email}</p>
      <p>Age: {values.age}</p>
      <p>Height: {values.height}</p>
      <p>Middle Name: {values.middleName}</p>
      <p>Mobile No: {values.mobileNo}</p>
      <p>Birthday: {values.birthday}</p>
      <p>Blood Group: {values.bloodgroup}</p>
      <p>Weight: {values.weight}</p>
      <p>AddressLine1: {values.addressLine1}</p>
      <p>AddressLine2: {values.addressLine2}</p>
      <p>City: {values.city}</p>
      <p>State: {values.state}</p>
      <p>Country: {values.country}</p>
      <p>PinCode: {values.pinCode}</p>
      <Button variant="secondary" onClick={prev}>
        Previous
      </Button>{" "}
      <Button type="submit">Submit</Button>
    </>
  );
};

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    height: "",
    middleName: "",
    mobileNo: "",
    birthday: "",
    bloodgroup: "",
    weight: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    country: "",
    pincode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const next = () => {
    setStep(step + 1);
  };

  const prev = () => {
    setStep(step - 1);
  };

  switch (step) {
    case 1:
      return (
        <Container>
          <Row>
            <Col>
              <FormPageOne
                next={next}
                values={values}
                handleChange={handleChange}
              />
            </Col>
          </Row>
        </Container>
      );
    case 2:
      return (
        <Container>
          <Row>
            <Col>
              <FormPageTwo
                next={next}
                prev={prev}
                values={values}
                handleChange={handleChange}
              />
            </Col>
          </Row>
        </Container>
      );
    case 3:
      return (
        <Container>
          <Row>
            <Col>
              <h1 className="text-success">Data added successfully</h1>
              <FormPageThree prev={prev} values={values} />
            </Col>
          </Row>
        </Container>
      );
    default:
      return <Alert variant="danger">An error occurred.</Alert>;
  }
};

export default MultiStepForm;
