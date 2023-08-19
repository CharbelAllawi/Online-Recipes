import React, { useState } from 'react';
import '../../styles/utilities.css';
import './style.css';
import mainfood from "../../assets/authentication _Food.jpg"
import Input from '../../components/Input';
import Button from '../../components/Button';
import { sendRequest } from "../../core/config/request";
import { requestMethods } from "../../core/enums/requestMethods";
import { localStorageAction } from "../../core/config/localstorage";
import { useNavigate } from "react-router-dom";

function Authentication() {
  const navigation = useNavigate();

  const [Logcredentials, setLogCredentials] = useState({
    email: null,
    password: null,
  });
  const [Regcredentials, setRegCredentials] = useState({
    name: null,
    email: null,
    password: null,
  });

  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
  };
  const loginHandler = async () => {

    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: "/login",
        body: Logcredentials,
      });
      navigation("/landing");
      localStorageAction("access_token", response.authorisation.token);
    } catch (error) {
      console.log(error);
    }
  };

  const registerHandler = async () => {

    try {
      const response = await sendRequest({
        method: requestMethods.POST,
        route: "/register",
        body: Regcredentials,
      });
      console.log(response)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <h1 className="auth1">Recipe <span className='sline'>Secret</span></h1>
      <div className="flex row center maincontainer">
        <div className="flex row center">
          <img className="mainlogo" src={mainfood} alt="Logo" />
        </div>
        <div className>
          <div className="form-container flex column flex-wrap">
            {isLoginForm ? (
              <form className="flex center column loginform">
                <Input
                  className="authbtn"
                  label={"Email"}
                  placeholder={"Type your email here..."}
                  onChange={(email) =>
                    setLogCredentials({
                      ...Logcredentials,
                      email,
                    })
                  }
                />
                <Input
                  className="authbtn"
                  label={"Password"}
                  type='password'
                  placeholder={"Type your password here..."}
                  onChange={(password) =>
                    setLogCredentials({
                      ...Logcredentials,
                      password,
                    })
                  }
                />

                <Button type="button" text={"Login"} onClick={(e) => loginHandler(e)} />

                <div className="registerlink">
                  <p>
                    {isLoginForm
                      ? "Don't have an account? "
                      : "Already have an account? "}
                    <br></br>
                    <a className="reg" href="#" onClick={toggleForm}>
                      {isLoginForm ? 'Click Here' : 'Click Here'}
                    </a>
                  </p>
                </div>
              </form>
            ) : (
              <form className="flex center column loginform">
                <Input
                  className="authbtn"
                  label={"Username"}
                  placeholder={"Type your username here..."}
                  onChange={(name) =>
                    setRegCredentials({
                      ...Regcredentials,
                      name,
                    })
                  }
                />
                <Input
                  className="authbtn"
                  label={"Email"}
                  placeholder={"Type your email here..."}
                  onChange={(email) =>
                    setRegCredentials({
                      ...Regcredentials,
                      email,
                    })
                  }
                />
                <Input
                  className="authbtn"
                  label={"Password"}
                  type='password'
                  placeholder={"Type your password here..."}
                  onChange={(password) =>
                    setRegCredentials({
                      ...Regcredentials,
                      password,
                    })
                  }
                /><Button type="button" text={"Register"} onClick={() => registerHandler()} />
                <div className="registerlink">
                  <p>
                    {isLoginForm
                      ? "Don't have an account? "
                      : "Already have an account? "}
                    <br></br>
                    <a className="reg" href="#" onClick={toggleForm}>
                      {isLoginForm ? 'Click Here' : 'Click Here'}
                    </a>
                  </p>
                </div>
              </form>

            )}
            <br></br>

          </div>
        </div>

        <div className="flex row center">
          <img className="mainlogo" src={mainfood} alt="Logo" />
        </div>
      </div>
    </>
  );
}

export default Authentication;
