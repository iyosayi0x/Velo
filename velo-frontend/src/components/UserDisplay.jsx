import placeholder_image from '../assets/images/valley_landscape.png'
import { Link } from 'react-router-dom'

const UserDisplay=({profile_image , first_name, last_name , id , bio, callback, username, country })=>{
    return (
        <div onClick={()=>callback(id)} className='grid grid-cols-5 gap-4 md:gap-8 py-5 border-b'>
            <div className='col-span-1'>
                <img className="rounded-full h-40 w-40" src={profile_image || placeholder_image} alt={first_name}/>
            </div>
            <div className='col-span-4'>
                <div className='my-1'>
                    <h1 className="font-semibold text-lg md:text-xl text-[#003566]">{first_name} {last_name}</h1>
                    <p className="text-gray-500 mb-4">{username}</p>
                    <p className="text-gray-600">{bio}</p>
                    <p className="">from {country}</p>
                    <Link to="/feed/chat"><button className='w-36 md:w-40 mt-2 py-2 rounded-md bg-[#003566] hover:bg-[#001d3d] duration-500 text-white font-normal'>Chat with {first_name}</button></Link>
                </div>
            </div>
        </div>
    )
}

export default UserDisplay