import React, { useState } from "react";
import { doLogin, greet } from "./auth.service";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassoword] = useState();
  const [isChecked, setChecked] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassoword(event.target.value);
  };

  const handleCheckbox = (event) => {
    setChecked(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    doLogin(email, password)
      .then((response) => response.json())
      .then(
        (data) => {
          console.log("Success");
          console.log(data);
          if(data.success === true) {
            alert("Login successful");
          } else {
            alert('Login failed')
          }
        },
        (err) => {
          console.log(err);
          alert("Server error");
        }
      );
  };

  return (
    <>
      Data: Email : {email} <br></br>
      Password : {password}
      <br></br>
      Checkbox : {isChecked}
      <br></br>
      <form onSubmit={handleSubmit}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            onChange={handleEmailChange}
            value={email}
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div class="mb-3 form-check">
          <input
            type="checkbox"
            onChange={handleCheckbox}
            checked={isChecked}
            class="form-check-input"
            id="exampleCheck1"
          />
          <label class="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
}

export default Login;