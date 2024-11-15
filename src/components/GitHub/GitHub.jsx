import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function GitHub() {
    const data = useLoaderData()
    // const [data,setData] = useState([])
    // useEffect(()=>{
    //     fetch("https://api.github.com/users/ganesh100603")
    //     .then((res)=>res.json())
    //     .then((data)=> setData(data))
    // },[])
    return (
        <>
        <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
            GitHub Followers: {data.followers}
            <img  src={data.avatar_url} alt="pic" width={300} />
        </div>
        </>
    )
}

export default GitHub

export const gitHubInfoLoader =async()=>{
    const response=await fetch("https://api.github.com/users/ganesh100603")
    return response.json()
}
