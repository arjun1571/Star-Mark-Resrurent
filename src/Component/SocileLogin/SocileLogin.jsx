import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";
import { useNavigate } from "react-router-dom";

const SocileLogin = () => {
    const {googleLogin}=useContext(AuthContext)
    const navigate = useNavigate()
    // const location=useLocation()
    // const from = location.state?.from?.pathname || "/";
    const handleGoolgelogin =()=>{
        googleLogin()
        .then((result)=>{
            const user = result.user;
            console.log(user);
            const saveUser = { name: user.displayName, email: user.email };
            fetch("http://localhost:5000/users", {
              method: "POST",
              headers: {
                "content-type": "application/json",
              },
              body: JSON.stringify(saveUser),
            })
            .then((res) => res.json())
            .then(() => {
              return  navigate('/home');   
            });
            
        })

    }
  return (
    <div>
      <div className="divider"></div>
      <button onClick={handleGoolgelogin} className="btn btn-circle btn-outline btn-success my-3 mx-auto flex">
        <FaGoogle></FaGoogle>
      </button>
    </div>
  );
};

export default SocileLogin;
