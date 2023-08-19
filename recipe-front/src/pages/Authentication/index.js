import React, { useState } from 'react';
import '../../styles/utilities.css';
import './style.css';
import mainfood from "../../assets/authentication _Food.jpg"
import Input from '../../components/Input';
import Button from '../../components/Button';

function Authentication() {
  const [Logcredentials, setLogCredentials] = useState({
    email: null,
    password: null,
  });
  const [Regcredentials, setRegCredentials] = useState({
    username: null,
    email: null,
    password: null,
  });

  const [isLoginForm, setIsLoginForm] = useState(true);

  const toggleForm = () => {
    setIsLoginForm(!isLoginForm);
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
                /><Button text={"Login"} />
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
                  onChange={(username) =>
                    setRegCredentials({
                      ...Regcredentials,
                      username,
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
                /><Button text={"Login"} />
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
