import { useContext, useEffect, useState } from 'react';
import { loadCaptchaEnginge, LoadCanvasTemplate,  validateCaptcha } from 'react-simple-captcha';
import img from "../../assets/others/authentication2.png"
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2'
import SocileLogin from '../SocileLogin/SocileLogin';

const LogIn = () => {
  const navigate = useNavigate()
  const location=useLocation()
  const from = location.state?.from?.pathname || "/";



    const [desable,setDesable]=useState(true)


    const {loginUser}=useContext(AuthContext)

    useEffect(()=>{
        
        loadCaptchaEnginge(6); 
    },[])


    const handleCaptcha =(e)=>{
        const user_captcha_value = e.target.value;
        if( validateCaptcha(user_captcha_value)){
                setDesable(false)
        }else{
            setDesable(true)
        }

    }
    const handleClick = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const pass = form.password.value;
        console.log(email, pass);
        loginUser(email,pass)
        .then(result=>{
            const user= result.user;
            console.log(user);
            Swal.fire({
              position: 'top-center',
              icon: 'success',
              title: 'Log in successfull',
              showConfirmButton: false,
              timer: 1500
            })
            navigate(from, { replace: true });
            form.reset()
        })
        .catch(err=>{
            console.log(err);
        })

    }
   return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content md:flex-row-reverse flex-col-reverse">
        <div className="text-center lg:w-7/12 lg:text-left md:mt-20 mt-10 ">
        <img className='w-full lg:ml-20' src={img} alt="" />
        </div>
        <div className="card  lg:w-5/12  shadow-xl bg-base-100 mt-20 md:mt-5">
        <h1 className="md:text-5xl  text-3xl font-bold text-center mt-2 ">Login now!</h1>
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
              onBlur={handleCaptcha}
                type="text"
                name="captcha"
                placeholder="type captcha"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-2">
              <input className="btn btn-primary" disabled={desable} type="submit" value="LOG IN" />
            </div>
          
          </form>

              <label className="label flex mx-auto">
                <h1  className="label-text-alt ">
                  Are you new? create account <span className='link link-hover text-yellow-500 font-bold'><Link to={"/signup"}> Sign Up</Link></span>
                </h1>
              </label>
              <div>
                <SocileLogin></SocileLogin>
              </div>
          
        </div>
      </div>
    </div>
  );
};

export default LogIn;
