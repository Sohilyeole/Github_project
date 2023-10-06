import "./Github.css"
import Search from "./Search"
import GithubProfileList from "./Githubprofilelist/GithubProfileList"
import { useState } from "react"
import SearchCard from "./SearchCard/SearchCard"
function Github(){
    const [search,setsearch]=useState("")
    return(
        <div className="main_wraper">
        <Search updatesearch={setsearch}/>

          
    {(!search)? <GithubProfileList/> : <SearchCard key={search} searchname={search}/>}
    
          
    {/* {(!search)?  <GithubProfileList/> :<Pokemondetails key={search} pokemonName={serachterm}/>} */}


       


        </div>
    )
}
export default Github