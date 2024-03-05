import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";
import sephoraLogin from "../../images/sephora-login.png"
function ProfileButton({ user }) {
  const history = useHistory()
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

const currUser = useSelector(state=>state.session.user)
// console.log("this is user=============================", currUser)

  const openMenu = () => {
    if (showMenu) return;
    setShowMenu(true);
  };

  useEffect(() => {
    if (!showMenu) return;

    const closeMenu = (e) => {
      if (!ulRef.current.contains(e.target)) {
        setShowMenu(false);
      }
    };

    document.addEventListener("click", closeMenu);

    return () => document.removeEventListener("click", closeMenu);
  }, [showMenu]);

  const handleLogout = (e) => {
    e.preventDefault();
    dispatch(logout());
    history.push('/')
  };

  const ulClassName = "profile-dropdown" + (showMenu ? "" : " hidden");
  const closeMenu = () => setShowMenu(false);

  return (
    <>
    <div className="button-image">
         <button className="login-button" onClick={openMenu}>
          <div>
        <img  className="img-login" src={sephoraLogin}

        />
        {/* <i className="fas fa-user-circle" /> */}
          </div>
          <div className="login-words">
            {currUser!==null?
             <h5 className="sign-in-btn sign-outbtn">Sign Out</h5>:<h5 className="sign-in-btn">Sign In</h5>}
             {currUser!==null? null:  <h6 className="start-in-btn">To start Shopping</h6>
             }

          </div>
      </button>
    </div>

      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
          <div className="log-out-menu">
            <li className="user-name-log-out">Hi, {user.username}!</li>
            <li className="user-name-email">{user.email}</li>
            <li className="logout-button-menu">
              <button onClick={handleLogout}>Sign Out</button>
            </li>
          </div>

          </>
        ) : (
          <>


            <div className="modal-login">
              <div className="modal-txt">
                <h3 className="h3-hi">Hi, there!</h3>
              <h4 className="h4-sign-in">Sign in to shop and receive FREE standard shipping on all orders.</h4>
              </div>

              <div className="jst-modal-btns">
            <div className="login-modal-btn">
                       <OpenModalButton
className="login-modal-btn1"
              buttonText="Sign In"
              onButtonClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
            </div>

            <div className="signup-modal-btn">
                    <OpenModalButton
              buttonText="Create Account"
              onButtonClick={closeMenu}
              modalComponent={<SignupFormModal />}
            />
            </div>
</div>
          </div>

          </>
        )}
      </ul>
    </>
  );
}

export default ProfileButton;
