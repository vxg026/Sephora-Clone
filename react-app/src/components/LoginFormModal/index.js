import React, { useState } from "react";
import { login } from "../../store/session";
import { useDispatch } from "react-redux";
import { useModal } from "../../context/Modal";
import "./LoginForm.css";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { thunkCurrProducts } from "../../store/product";

function LoginFormModal() {
  const history = useHistory()
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const { closeModal } = useModal();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    } else {
        closeModal()
        // history.push('/')
        if(window.location.pathname==="/products/curr"){
          dispatch(thunkCurrProducts())
        }
    }
  };
const autoLogin = e=> {
  setEmail('demo@aa.io')
  setPassword('password')
   dispatch(login(email, password))
   .then(closeModal);

  // return dispatch(login({email, password}))
  if(window.location.pathname==="/products/curr"){
    dispatch(thunkCurrProducts())
  }
}
  return (

    <div className="modal-form-login">
      <div className="sign-in-div-modal">
      <h1 className="login-h1-modal">Sign In</h1>
      </div>
      <div className="modal-form-sign-div">
        <h3 className="sign-in-other-text">Sign in to your account to enjoy FREE standard shipping on all orders. </h3>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          {errors.map((error, idx) => (
            <li className="errors-p" key={idx}>{error}</li>
          ))}
        </div>
        <div>

<div className="email-login-div">
       {/* <label> */}
          <input
          placeholder="Email Address"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            // required
          />
        {/* </label> */}
</div>

        <div>


        {errors.email && <p className="errors-p">{errors.email}</p>}
        </div>
        </div>



        <div>
          <div className="email-login-div">
                {/* <label> */}
          <input
          placeholder="Password*"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            // required
          />
        {/* </label> */}
          </div>
<div>

        {errors.password && <p className="errors-p">{errors.password}</p>}
</div>
        </div>
        <div className="login-buttons">
          <div>

        <button className="log-in-btn-black" type="submit">Log In</button>
          </div>

<div>

        <button className="demo-log-btn" onClick={autoLogin}>Login in as Demo User</button>
</div>
         </div>
      </form>
      </div>

  );
}

export default LoginFormModal;
