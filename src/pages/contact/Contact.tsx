import { TextField, FormControl } from "@mui/material";
import Button from "@mui/material/Button";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import { IMAGE_URL } from "./constants";
import { useNavigate } from "react-router-dom";

type FormValues = {
  username: string;
  email: string;
  number: string;
  description: string;
};


const Contact = () => {
  // Using react hook form for validating and submitting user data 
  const form = useForm<FormValues>();
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    const { username, email, number, description } = data;
    if (username && email && number && description) {
      alert("Form Submitted!. We will get back to you")
      navigate("/")
    } else {
      // shows popup if any invalid credentials
      setShow(true);
    }
  };

  return (
    <div className="form-container">
      <img src={IMAGE_URL} alt="" />
      <FormControl
        component="form"
        className="form"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        <TextField
          className="label"
          fullWidth
          label="Name"
          {...register("username")}
        />
        <p style={{ color: "red" }}>{errors.username?.message}</p>

        <TextField
          className="label"
          fullWidth
          label="Email"
          {...register("email")}
        />
        <p style={{ color: "red" }}>{errors.email?.message}</p>

        <TextField
          className="label"
          fullWidth
          label="Number"
          {...register("number")}
        />
        <p style={{ color: "red" }}>{errors.number?.message}</p>

        <TextField
          className="label"
          id="outlined-multiline-static"
          label="Description"
          multiline
          rows={4}
          {...register("description")}
        />
        <p style={{ color: "red" }}>{errors.description?.message}</p>

        <Button type="submit" variant="contained">
          Submit
        </Button>
      </FormControl>

      {/* Errors thrown in the form of modal */}
      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Please fill valid credentials</Modal.Body>
        <Modal.Footer>
          <Button type="button" variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Contact;
