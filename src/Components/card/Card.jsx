import "./Card.css"
function Card({name,image}){
    return(
        <div className="profile">
        {/* <Link to={`/pokemon/${id}`}> */}
        <div className="profile_name">{name}</div>
        <div><img  className="profile_image"  src={image} alt="" />
      </div>
        {/* </Link> */}
    </div>
    )
}
export default Card