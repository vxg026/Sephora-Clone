import React, { useState, useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/session";
import OpenModalButton from "../OpenModalButton";
import LoginFormModal from "../LoginFormModal";
import SignupFormModal from "../SignupFormModal";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { useSelector } from "react-redux";

function ProfileButton({ user }) {
  const history = useHistory()
  const dispatch = useDispatch();
  const [showMenu, setShowMenu] = useState(false);
  const ulRef = useRef();

const currUser = useSelector(state=>state.session.user)
console.log("this is user=============================", currUser)

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
        <img  className="img-login" src="https://cdn.discordapp.com/attachments/1062942242450460744/1119323050186387546/sephora.png"

        />
        {/* <i className="fas fa-user-circle" /> */}
          </div>
          <div className="login-words">
            {currUser!==null?
             <h5 className="sign-in-btn">Log Out</h5>:<h5 className="sign-in-btn">Sign In</h5>}
            <h6 className="start-in-btn">To start Shopping</h6>
          </div>
      </button>
    </div>

      <ul className={ulClassName} ref={ulRef}>
        {user ? (
          <>
            <li>{user.username}</li>
            <li>{user.email}</li>
            <li>
              <button onClick={handleLogout}>Log Out</button>
            </li>
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
              onItemClick={closeMenu}
              modalComponent={<LoginFormModal />}
            />
            </div>

            <div className="signup-modal-btn">
                    <OpenModalButton
              buttonText="Create Account"
              onItemClick={closeMenu}
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
