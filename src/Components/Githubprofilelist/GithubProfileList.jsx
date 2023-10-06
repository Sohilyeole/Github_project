import axios from "axios"
import "./GithubProfileList.css"
import { useEffect, useState } from "react"
import Card from "../card/Card"
function GithubProfileList(){
    const [data,setdata]=useState([])
    async function downloadlist(){
        const response= await axios.get("https://api.github.com/users")
        setdata(response.data)
             
    }
    useEffect(()=>{
        downloadlist();
    },[])
   
    

    return(
        <div className="githubprofile_list_wrapper">
      
        <div className="github_profile_wrapper">
        {
            
            data.map((p)=><Card name={p.login} image={p.avatar_url}/>)
        }
        
        </div>
        
       
        </div>
        )
}
export default GithubProfileList