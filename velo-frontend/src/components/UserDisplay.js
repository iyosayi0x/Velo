const UserDisplay=({profile_image , first_name, last_name , id , callback })=>{
    return (
        <div onClick={()=>callback(id)}>
            <img src={profile_image} alt={first_name}/>
            <div>
                {first_name} {last_name}
            </div>
        </div>
    )
}

export default UserDisplay