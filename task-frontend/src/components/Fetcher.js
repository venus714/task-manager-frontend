import React, { useState } from "react";
import Axios from "axios";

function Fetcher (){
    const [data , setdata] = useState("")
    Axios.get("http://127.0.0.1:9292/tasks").then((res) =>{
        setdata(res.data.fact);
    })
    return (
        <p>{data}</p>
    )
}




export default Fetcher