import "./Search.css"
import useDebounce from "./hook/useDebounce"


function Search({updatesearch}){
    const debouncecallback=useDebounce((e)=>updatesearch(e.target.value))
    return(
    <div className="search_wrapper">
    <input
    type="text"
    id="github-name-search"
    placeholder="Github name..."
    onChange={(e)=>debouncecallback(e,"123")}

    />
   
    </div>
    )
}
export default Search