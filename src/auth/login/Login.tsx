import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useForm } from "react-hook-form";
import Button from "@mui/material/Button";
import { FormControl } from "@mui/material";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { User } from "../../models/user";
import Register from "../register/Register";
import { loginFailedAction, loginSuccessAction } from "../../redux/login/login.action";

type FormValues = {
  username: string;
  password: string;
};


const Login = ({ children }: any) => {
  const dispatch = useDispatch();

  const users = JSON.parse(localStorage.getItem("users") || "[]");

  // Using react hook form for validating and submitting user data
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState, reset } = form;
  const { errors } = formState;
  const [show, setShow] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const handleClose = () => setShow(false);
  const onSubmit = (data: FormValues) => {
    const { username, password } = data;
    // for given username and password, we are searching the respective user object and if found the user would be successfully able to view the portal or else error would be thrown
    if (username && password) {
      const foundObject = users.find(
        (item: User) => item.username === username && item.password === password
      );
      if (foundObject) {
        localStorage.setItem("currentUser", JSON.stringify(foundObject));
        dispatch(loginSuccessAction());
        localStorage.setItem("token", "true");

        reset();
      } else setShow(true);
    } else {
      dispatch(loginFailedAction());
      setShow(true);
    }
  };

  const registerPagehandler = () => {
    setShowRegister(true);
  };

  const isLoggedIn = localStorage?.getItem("token");

  return (
    <>
      {/*if loggedin then view the portal or else still view the login*/}
      {isLoggedIn ? (
        <>{children}</>
      ) : (
        <div>
          {showRegister ? (
            <Register setShowRegister={setShowRegister} />
          ) : (
            <div className="forms">
              <Typography variant="h5" gutterBottom>
                Login
              </Typography>
              <FormControl
                component="form"
                className="form"
                onSubmit={handleSubmit(onSubmit)}
                noValidate
              >
                <TextField
                  style={{ width: "130%" }}
                  id="outlined-basic"
                  label="Username"
                  variant="outlined"
                  {...register("username")}
                />
                <p style={{ color: "red" }}>{errors.username?.message}</p>
                <TextField
                  style={{ width: "130%" }}
                  id="outlined-basic"
                  label="Password"
                  variant="outlined"
                  {...register("password")}
                />
                <p style={{ color: "red" }}>{errors.password?.message}</p>
                <div className="buttons" style={{ marginLeft: "10%" }}>
                  <Button
                    style={{ marginRight: "5%" }}
                    type="submit"
                    variant="contained"
                  >
                    Login
                  </Button>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={registerPagehandler}
                  >
                    Register
                  </Button>
                </div>
              </FormControl>

              {/* Error thrown in the form of a modal */}
              <Modal show={show} onHide={handleClose} animation={false}>
                <Modal.Header closeButton>
                  <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>Please fill valid credentials</Modal.Body>
                <Modal.Footer>
                  <Button
                    type="button"
                    variant="contained"
                    onClick={handleClose}
                  >
                    Close
                  </Button>
                </Modal.Footer>
              </Modal>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default Login;
