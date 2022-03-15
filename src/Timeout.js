import React, { useState, useRef } from "react";
import { useIdleTimer } from "react-idle-timer";
import TimeoutModal from "./TimeoutModal";
import { useNavigate, useLocation } from "react-router-dom";


const  Timeout = () =>{
  const location = useLocation();
  const navigate = useNavigate();
  const timeout = 3000;
  const myTimeout = useRef(null);

  const handleOnIdle = () => {
    if (location.pathname !== "/") {
      setShowModal(true);
       myTimeout.current = setTimeout(() => {
        setShowModal(false);
        handleLogout();
      }, 1000 * 5 * 1); // 5 seconds
    }
  };
  const [showModal, setShowModal] = useState(false);
  const {reset} = useIdleTimer({timeout,onIdle: handleOnIdle});

  const handleReset = () => reset();
  
  const togglePopup = () => {
    setShowModal(!showModal);
  };

  const handleStayLoggedIn = () => {
    clearTimeout(myTimeout.current);
    togglePopup();
    handleReset();
  };

  const handleLogout = () => {
    navigate("/");
  };

  return (
    <TimeoutModal
      showModal={showModal}
      togglePopup={togglePopup}
      handleStayLoggedIn={handleStayLoggedIn}
    />
  );
}


export default Timeout