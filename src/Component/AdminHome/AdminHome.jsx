import { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { useQuery } from "@tanstack/react-query";


const AdminHome = () => {
    const {user}=useContext(AuthContext)
    const {data:stats ={}}=useQuery({
        queryKey: ['/admin-stats'],
        queryFn: async ()=>{
            const res = await fetch("http://localhost:5000/admin-stats")
            return res.json();
        }
    })
    console.log(stats);
    return (
        <div>
            <h1 className="text-xl p-10 font-bold">Welcome back, {user?.displayName}</h1>
        </div>
    );
};

export default AdminHome;