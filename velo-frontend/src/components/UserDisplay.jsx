import placeholder_image from '../assets/images/valley_landscape.png'

const UserDisplay=({profile_image , first_name, last_name , id , callback })=>{
    return (
        <div onClick={()=>callback(id)} className='userdisplay'>
            <img src={profile_image || placeholder_image} alt={first_name} className='userdisplay__img'/>
            <div className='userdisplay__name'>
                <span>{first_name}</span>
                <span>{last_name}</span>
            </div>
        </div>
    )
}

export default UserDisplay