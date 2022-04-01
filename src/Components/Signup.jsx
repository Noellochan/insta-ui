import axios from "axios";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { add_userdetail } from "../Redux/action";
import { useNavigate } from "react-router-dom";
const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [number, setsenumber] = useState("");
  const [fullname, setfullname] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [dob, setdob] = useState("");

  const Email = (e) => {
    setemail(e.target.value);
  };
  const Number = (e) => {
    setsenumber(e.target.value);
  };

  const Fullname = (e) => {
    setfullname(e.target.value);
  };
  const DOB = (e) => {
    setdob(e.target.value);
  };

  const Username = (e) => {
    setusername(e.target.value);
  };
  const Password = (e) => {
    setpassword(e.target.value);
  };

  function Signupdata(event) {
    event.preventDefault();
    console.log("it works");

    axios
      .post("https://thebackendinsta.herokuapp.com/signup", {
        full_name: fullname,
        user_name: username,

        user_number: number,
        password: password,
        user_email: email,
        user_dob: dob,
      })
      .then((res) => {
        console.log(res);
        localStorage.setItem("token", res.data.token);
        dispatch(add_userdetail(res.data.user));
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <div className="signUpBoxV">
      <div className="rightboxVdetails">
        <div className="instaVS">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027"
            alt=""
          />
        </div>
        <div>
          <p className="signdetV">
            Sign up to see photos and videos from your friends.
          </p>
        </div>
        <div className="loginfbVV">
          <img
            src="https://i.pinimg.com/564x/b3/26/b5/b326b5f8d23cd1e0f18df4c9265416f7--facebook-icon-negative-feedback.jpg"
            className="img-fluid rounded"
            alt="[+]"
          />
          <div>Login with Facebook</div>
        </div>
        {/* ` <div className="or">
					<div></div>
					<div>OR</div>
					<div></div>
				</div>` */}

        <form>
          <div className="inputoneV">
            <input
              type="text"
              placeholder="Email"
              onChange={(e) => {
                Email(e);
              }}
            />
          </div>
          <div className="inputoneV">
            <input
              type="text"
              placeholder="Mobile Number"
              onChange={(e) => {
                Number(e);
              }}
            />
          </div>
          <div className="inputoneV">
            <input
              type="text"
              placeholder="Full Name"
              onChange={(e) => {
                Fullname(e);
              }}
            />
          </div>
          <div className="inputoneV">
            <input
              type="text"
              placeholder="Username"
              onChange={(e) => {
                Username(e);
              }}
            />
          </div>
          <div className="inputoneV">
            <input
              type="password"
              placeholder="Password"
              onChange={(e) => {
                Password(e);
              }}
            />
          </div>
          <div className="inputoneV">
            <input
              type="password"
              placeholder="Date Of Birth"
              onChange={(e) => {
                DOB(e);
              }}
            />
          </div>
          <div className="inputoneV">
            <input
              type="submit"
              value="Log In"
              className="InpButtV"
              onClick={(e) => {
                Signupdata(e);
              }}
            />
          </div>
        </form>
        <div className="termscondV">
          <p>
            By signing up, you agree to our{" "}
            <b>Terms , Data Policy and Cookies Policy .</b>
          </p>
        </div>

        <div className="otherMethods"></div>
        {/* <div className="forget">Forgot Password ?</div> */}
        <div className="forget top">
          <p>
            Have an account? <b style={{ color: "blue" }}>Log In</b>
          </p>
        </div>
      </div>
    </div>
  );
};

export { Signup };
