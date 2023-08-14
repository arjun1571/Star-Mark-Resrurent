import { useEffect, useRef, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha';

const LogIn = () => {

    const [desable,setDesable]=useState(true)

    const capchaRef=useRef(null)

    useEffect(()=>{
        
        loadCaptchaEnginge(6); 
    },[])


    const handleCaptcha =()=>{
        const user_captcha_value = capchaRef.current.value;
        if( validateCaptcha(user_captcha_value)){
                setDesable(false)
        }else{
            alert("captcha is wrong")
            setDesable(true)
        }

    }
    const handleClick = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(email, pass);

    }
   return (
    <div className="hero min-h-screen  bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:w-1/2 lg:text-left mt-10 ">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
        </div>
        <div className="card flex-shrink-0 lg:w-1/2 max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleClick}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control">
              <label className="label">
              <LoadCanvasTemplate />
              </label>
              <input
              ref={capchaRef}
                type="text"
                name="captcha"
                placeholder="type captcha"
                className="input input-bordered"
              />
              <button className='btn btn-outline btn-xs mt-2'  onClick={handleCaptcha}>Validate</button>
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" disabled={desable} type="submit" value="LOG IN" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
