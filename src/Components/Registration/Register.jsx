import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import './register.css'
import RegisterForm from './RegisterForm';

const Register = () => {

  const [userDetails, setUserDetails] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    confirmation: false
  });

  const [userDetailsError, setUserDetailsError] = useState({
    name: "",
    username: "",
    email: "",
    mobile: "",
    confirmation: ""
  });

  const navigate = useNavigate();


  const handleOnchangeEvent = (e) => {
    let name = e.target.name, value = e.target.value;
    if (name === "confirmation") {
      value = !userDetails.confirmation;
    }
    setUserDetails({
      ...userDetails,
      [name]: value
    })
  }

  const handleSubmitEvent = (e) => {
    e.preventDefault();
    let v1 = false, v2 = false, v3 = false, v4 = false, v5 = false;
    v1 = validateEmail();
    v2 = validateMobileNumber();
    v3 = validateName();
    v4 = validateUserName();
    v5 = validateConfirmation();
    if (v1 && v2 && v3 && v4 && v5) {
      localStorage.setItem("user", userDetails);
      navigate("/category")
    }
  }

  const validateConfirmation = (confirmation = userDetails.confirmation) => {
    if (confirmation === false) {
      setUserDetailsError((prev) => {
        return {
          ...prev,
          confirmation: "Check this box if you want to proceed"
        }
      })
      return false;
    } else {
      setUserDetailsError((prev) => {
        return {
          ...prev,
          confirmation: ""
        }
      })
    }
    return true;
  }

  const validateMobileNumber = (mobile = userDetails.mobile) => {
    if (mobile === "") {
      setUserDetailsError((prev) => {
        return {
          ...prev,
          mobile: "Field is required"
        }
      })
      return false;
    } else if (mobile.length !== 10) {
      setUserDetailsError((prev) => {
        return {
          ...prev,
          mobile: "Mobile number must be 10 digits"
        }
      })
      return false;
    } else {
      setUserDetailsError((prev) => {
        return {
          ...prev,
          mobile: ""
        }
      })
    }
    return true;
  }

  const validateName = (name = userDetails.name) => {
    if (name === "") {
      setUserDetailsError((prev) => {
        return {
          ...prev,
          name: "Field is required"
        }
      })
      return false;
    } else {
      setUserDetailsError((prev) => {
        return {
          ...prev,
          name: ""
        }
      })
    }
    return true;
  }

  const validateUserName = (username = userDetails.username) => {
    if (username === "") {
      setUserDetailsError((prev) => {
        return {
          ...prev,
          username: "Field is required"
        }
      })
      return false;
    } else {
      setUserDetailsError((prev) => {
        return {
          ...prev,
          username: ""
        }
      })
    }
    return true;
  }

  const verifyEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  }

  const validateEmail = (email = userDetails.email) => {
    if (email === "") {
      setUserDetailsError((prev) => {
        return {
          ...prev,
          email: "Field is required"
        }
      })
      return false;
    } else if (!verifyEmail(email)) {
      setUserDetailsError((prev) => {
        return {
          ...prev,
          email: "This Field must be email"
        }
      })
      return false;
    } else {
      setUserDetailsError((prev) => {
        return {
          ...prev,
          email: ""
        }
      })
    }
    return true;
  }

  return (
    <div>
      <RegisterForm
        userDetails={userDetails}
        userDetailsError={userDetailsError}
        handleSubmitEvent={handleSubmitEvent}
        handleOnchangeEvent={handleOnchangeEvent}
      />
    </div>
  )
}

export default Register