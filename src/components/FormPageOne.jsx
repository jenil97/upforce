import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const FormPageOne = ({ next, values, handleChange }) => {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
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
    <div className="d-md-flex justify-content-evenly">
      <Form
        className="py-3"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group style={{ width: "360px" }} controlId="firstName">
          <Form.Control
            required
            placeholder="First Name"
            type="text"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a first name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          style={{ width: "360px", marginTop: "20px" }}
          controlId="lastName"
        >
          <Form.Control
            required
            placeholder="Last Name"
            type="text"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a last name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          style={{ width: "360px", marginTop: "20px" }}
          controlId="email"
        >
          <Form.Control
            required
            placeholder="Email"
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide email.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          style={{ width: "360px", marginTop: "20px" }}
          controlId="age"
        >
          <Form.Control
            required
            placeholder="Age"
            type="number"
            name="age"
            value={values.age}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide your age.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          style={{ width: "360px", marginTop: "20px" }}
          controlId="height"
        >
          <Form.Control
            required
            placeholder="Height"
            type="text"
            name="height"
            value={values.height}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide your height.
          </Form.Control.Feedback>
        </Form.Group>

        <div>
          <div style={{ marginTop: "20px", color: "gray" }}>Gender</div>
          <div style={{ marginTop: "10px" }} className="d-flex gap-3">
            <div className="form-check" id="male">
              <input
                className="form-check-input"
                type="radio"
                name="male"
                id="male"
                value={values.male}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check" id="female">
              <input
                className="form-check-input"
                type="radio"
                name="female"
                id="female"
                value={values.Female}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Female
              </label>
            </div>
          </div>
        </div>
      </Form>
      <Form
        style={{ marginLeft: "5px" }}
        className="py-3"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Form.Group style={{ width: "360px" }} controlId="middlename">
          <Form.Control
            required
            placeholder="Middle Name"
            type="text"
            name="middleName"
            value={values.middleName}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide a middle name.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          style={{ width: "360px", marginTop: "20px" }}
          controlId="mobileno"
        >
          <Form.Control
            required
            placeholder="Mobile No."
            type="number"
            name="mobileNo"
            value={values.mobileNo}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide mobile no.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          style={{ width: "360px", marginTop: "20px" }}
          controlId="birthday"
        >
          <Form.Control
            required
            placeholder="Birthday"
            type="number"
            name="birthday"
            value={values.birthday}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide birthday.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          style={{ width: "360px", marginTop: "20px" }}
          controlId="bloodgroup"
        >
          <Form.Control
            required
            placeholder="Blood Group"
            type="text"
            name="bloodgroup"
            value={values.bloodgroup}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide bloodgroup.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group
          style={{ width: "360px", marginTop: "20px" }}
          controlId="weight"
        >
          <Form.Control
            required
            placeholder="Weight"
            type="text"
            name="weight"
            value={values.weight}
            onChange={handleChange}
          />
          <Form.Control.Feedback type="invalid">
            Please provide your weight.
          </Form.Control.Feedback>
        </Form.Group>

        <div>
          <div style={{ marginTop: "20px", color: "gray" }}>Marital Status</div>
          <div style={{ marginTop: "10px" }} className="d-flex gap-2">
            <div className="form-check">
              <input className="form-check-input" type="radio" name="male" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Single
              </label>
            </div>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="female" />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Married
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Divorced
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Widowed
              </label>
            </div>
          </div>
        </div>

        <div style={{ marginLeft: "-10px" }} className="mt-4">
          <Button type="submit" className="btn btn-secondary px-4" disabled>
            Back
          </Button>
          <Button
            style={{ marginLeft: "10px" }}
            type="submit"
            className="btn btn-primary px-4"
          >
            Next
          </Button>
        </div>
      </Form>
    </div>
  );
};

export default FormPageOne;
