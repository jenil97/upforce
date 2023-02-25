import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormPageTwo = ({ next, prev, values, handleChange }) => {
  const [validated, setValidated] = useState(false);

  const handleNext = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }
    setValidated(true);
    if (form.checkValidity() === true) {
      next();
    }
  };

  return (
    <div className="d-md-flex justify-content-evenly py-5">
      <Form noValidate validated={validated} onSubmit={handleNext}>
        <Form.Group style={{ width: "360px" }} controlId="addressLine1">
          <Form.Control
            required
            placeholder="Address Line 1"
            type="text"
            name="addressLine1"
            value={values.addressLine1}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          style={{ width: "360px", marginTop: "20px" }}
          controlId="city"
        >
          <Form.Control
            required
            placeholder="City"
            type="text"
            name="city"
            value={values.city}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          style={{ width: "360px", marginTop: "20px" }}
          controlId="country"
        >
          <Form.Control
            required
            placeholder="Country"
            type="text"
            name="country"
            value={values.country}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide country.
          </Form.Control.Feedback>
        </Form.Group>
      </Form>
      <Form noValidate validated={validated} onSubmit={handleNext}>
        <Form.Group style={{ width: "360px" }} controlId="addressLine2">
          <Form.Control
            required
            placeholder="Address Line 2"
            type="text"
            name="addressLine2"
            value={values.addressLine2}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide address.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          style={{ width: "360px", marginTop: "20px" }}
          controlId="state"
        >
          <Form.Control
            required
            placeholder="State"
            type="text"
            name="state"
            value={values.state}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          style={{ width: "360px", marginTop: "20px" }}
          controlId="pinCode"
        >
          <Form.Control
            required
            placeholder="Pin Code"
            type="number"
            name="pinCode"
            value={values.pinCode}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide pincode.
          </Form.Control.Feedback>
        </Form.Group>

        <div className="mt-4">
          <Button variant="secondary" type="button" onClick={prev}>
            Back
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            variant="primary"
            type="button"
            onClick={next}
          >
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormPageTwo;
