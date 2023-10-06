import { useEffect, useState } from "react"
import "./SearchCard.css"
import axios from "axios"
import Card from "../card/Card"
function SearchCard({searchname}){
    console.log("hiii")
    const [data,setdata]=useState([])
    async function datalod(){
        const response= await axios.get(`https://api.github.com/users/${searchname}`)
        setdata(response.data)
       console.log(response)
    }
    useEffect(()=>{
        datalod();
    },[setdata])
    
    return(
        <div className="wrapper">
          {/* {console.log(data)} */}
        <Card name={data.login} image={data.avatar_url}/>
       
        </div>
    )
}
export default SearchCard