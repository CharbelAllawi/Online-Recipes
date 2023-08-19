import React, { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import chefAnimationData from './chef.json';
import Navbar from '../../components/Navbar/Navbar';
import './style.css';
import Input from '../../components/Input';
import Button from '../../components/Button';

function AddRecipe() {
  const container = useRef(null);
  const [Logcredentials, setLogCredentials] = useState({
    email: null,
    password: null,
  });
  useEffect(() => {
    if (container.current && !container.current.querySelector('svg')) {
      lottie.loadAnimation({
        container: container.current,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: chefAnimationData,
      });
    }
  }, []);

  const animationWidth = '800px';
  const animationHeight = '800px';

  return (
    <>
      <Navbar />
      <div className="flex column center">

        <h1>Share your recipe<span className='drooling'>🤤</span></h1>

        <div className="container">
          <div style={{ width: animationWidth, height: animationHeight }}>
            <div ref={container}></div>
          </div>
          <form className="flex center column recipeform">
            <Input
              className="Name"
              label={"Name"}
              placeholder={"Type recipe name here..."}
              onChange={(email) =>
                setLogCredentials({
                  ...Logcredentials,
                  email,
                })
              }
            />
            <Input
              className="recipe"
              label={"Cuisine"}
              placeholder={"Type cuisine name here..."}
              onChange={(email) =>
                setLogCredentials({
                  ...Logcredentials,
                  email,
                })
              }
            />
            <Button text={"Add ingredients"} />
            <Input
              className="recipe"
              label={"Email"}
              placeholder={"Type your email here..."}
              onChange={(email) =>
                setLogCredentials({
                  ...Logcredentials,
                  email,
                })
              }
            />


          </form>
        </div >
      </div >
    </>

  );
}

export default AddRecipe;
