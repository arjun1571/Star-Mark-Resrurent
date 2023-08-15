import { useContext } from "react";
import img from "../../assets/others/authentication2.png";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const SignUp = () => {
  const navigate = useNavigate()
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const { createUser,updateUser,logOut } = useContext(AuthContext);

  const onSubmit = (data) => {
    console.log(data);
    
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUser(data.name,data.photoUrl)
        .then(()=>{
            console.log("user profile update");
            reset()
            Swal.fire({
              position: 'top-end',
              icon: 'success',
              title: 'Your work has been saved',
              showConfirmButton: false,
              timer: 1500
            })
            logOut()
            .then(()=>{
              navigate("/login")
            })

        })
        .catch(err => console.log(err))
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-300">
      <div className="hero-content md:flex-row-reverse flex-col-reverse">
        <div className="text-center lg:w-7/12 lg:text-left md:mt-20 mt-10 ">
          <img className="w-full lg:ml-20" src={img} alt="" />
        </div>
        <div className="card  lg:w-5/12  shadow-xl bg-base-100 mt-20 md:mt-5">
          <h1 className="md:text-5xl  text-3xl font-bold text-center mt-5 ">
            Create account!
          </h1>
          <form className="card-body lg:w-96" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
              {...register("name", { required: true })}
                type="name"
                placeholder="name"
                name="name"
                className="input input-bordered"
              />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Photo Url</span>
              </label>
              <input
              {...register("PhotoUrl", { required: true })}
                type="text"
                placeholder="PhotoUrl"
                className="input input-bordered"
              />
              {errors.name && <span className="text-red-600">Name is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
              {...register("email",{required:true})}
                type="email"
                placeholder="email"
                name="email"
                className="input input-bordered"
              />
              {errors.email && <span className="text-red-600">Email is required</span>}
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
              {...register("password",{required:true,minLength:6,maxLength:20,pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])./})}
                type="password"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
              {errors.password?.type === 'required' && <span className="text-red-600">password is required</span>}
              {errors.password?.type === 'minLength' && <span className="text-red-600">password more than 6 cha</span>}
              {errors.password?.type === 'maxLength' && <span className="text-red-600">password less than 20 cha</span>}
              {errors.password?.type === 'maxLength' && <span className="text-red-600">password less than 20 cha</span>}
              {errors.password?.type === 'pattern' && <span className="text-red-600">password must be one uppercase one disit one lowercase and spcial che </span>}
            </div>
            <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Sign Up" />
            </div>
          </form>
          <label className="label flex mx-auto p-5">
            <h1 className="label-text-alt  ">
              Already have a account ? please{" "}
              <span className="link link-hover text-yellow-500 font-bold">
                <Link to={"/login"}> Log In</Link>
              </span>
            </h1>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
