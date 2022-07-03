import '../../styles/users.css'
import UserDisplay from '../../components/UserDisplay'
import {useSelector} from 'react-redux'
import {useEffect, useMemo, useState} from 'react'

const Users=()=>{
    const [recommendations, setRecommendations] = useState([]);
    const [searchText, setSearchText] = useState("");
    const query = useSelector(state => state.users.all)
    const users = useMemo(()=>{
        if (searchText.trim() === ''){
            return query
        }
        return query.filter(user => user.user?.first_name.toLowerCase().includes(searchText.toLocaleLowerCase()) || user.user?.last_name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()) || user.user?.middle_name?.toLocaleLowerCase().includes(searchText.toLocaleUpperCase()))
    },[searchText])

    const callback=(id)=>{

    }
    return (
        <div className='users'>
            <h1 className='font-semibold text-lg text-[#001d3d]'>Students</h1>
            <p className='users__smallText text-sm text-gray-500'>Discover friends all over Africa</p>
            <div className='mt-5'>
                <input type='search' placeholder='Search...' className='users__search rounded-full bg-gray-50 text-sm py-2 px-5 w-full outline-none' onChange={e => setSearchText(e.target.value)}/>
                <h2 className='mt-4 mb-2'>Recommendations:</h2>
            </div>

            <div className='users__wrapper'>
                {
                    users.map(user => <UserDisplay first_name={user.user.first_name} last_name={user.user.last_name} key={user.id} id={user.user.id} country={user.country} username={`@${user.username}`} callback={callback}/>)
                }
            </div>

        </div>
    )
}

export default Users