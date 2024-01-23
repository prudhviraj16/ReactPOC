import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { Button, FormControl } from "@mui/material";
import { useForm } from "react-hook-form";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import { User } from "../../models/user";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type FormValues = {
  username: string;
  password: string;
  confirmPassword: string;
};

const Register = ({
  setShowRegister,
}: {
  setShowRegister: (value: React.SetStateAction<boolean>) => void;
}) => {
  const form = useForm<FormValues>();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const storedUsersString = localStorage.getItem("users");
  const storedUsers = storedUsersString ? JSON.parse(storedUsersString) : [];
  const [users, setUsers] = useState<User[]>(storedUsers);
  const [role, setRole] = useState("");

  const onSubmit = (data: FormValues) => {
    const { username, password, confirmPassword } = data;
    // if all the valid credentials, then redirect to the home page or an error would be thrown
    if (username && password && confirmPassword) {
      let user = {
        username,
        password,
        confirmPassword,
        role,
      };
      users.push(user);
      localStorage.setItem("users", JSON.stringify(users));
      setShowRegister(false);
    } else {
      setShow(true);
    }
  };

  const handleChange = (event: SelectChangeEvent) => {
    setRole(event.target.value as string);
  };

  return (
    <div className="forms">
      <Typography variant="h5" gutterBottom>
        Register
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
        <TextField
          style={{ width: "130%" }}
          id="outlined-basic"
          label="Confirm password"
          variant="outlined"
          {...register("confirmPassword")}
        />
        <p style={{ color: "red" }}>{errors.confirmPassword?.message}</p>
        <FormControl style={{ width: "130%", marginBottom:"30px" }}>
          <InputLabel id="demo-simple-select-label">Role</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={role}
            label="Role"
            onChange={handleChange}
          >
            <MenuItem value={"admin"}>Admin</MenuItem>
            <MenuItem value={"employee"}>Employee</MenuItem>
          </Select>
        </FormControl>
        <div className="buttons" style={{ marginLeft: "10%" }}>
          <Button
            style={{ marginRight: "5%" }}
            type="submit"
            variant="contained"
          >
            Register
          </Button>
          <Button
            type="submit"
            variant="contained"
            onClick={() => setShowRegister(false)}
          >
            Login
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
          <Button type="button" variant="contained" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Register;
