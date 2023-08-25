import { useQuery } from "@tanstack/react-query";
// import { useEffect, useState } from "react"

const UseHooks = ()=>{
    // const [menu,setMenu]=useState([])
    // const [loading,setLoading]=useState(true)
    // useEffect(()=>{
    //     fetch("http://localhost:5000/menus")
    //     .then(res=>res.json())
    //     .then(data=>{

    //         setMenu(data)
    //         setLoading(false)
    //     })
    // },[])

    const {data: menu= [], isLoading: loading, refetch}=useQuery({
        queryKey: ['menu'],
        queryFn: async()=>{
            const res = await fetch("http://localhost:5000/menus")
            return res.json()
        }
    })
    return [menu,loading,refetch]

}

export default UseHooks;