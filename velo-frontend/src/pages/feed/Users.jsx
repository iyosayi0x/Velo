import '../../styles/users.css'
import UserDisplay from '../../components/UserDisplay'
import {useSelector} from 'react-redux'
import {useEffect, useMemo, useState} from 'react'

const Users=()=>{
    const users = ["Divine Edeh", "Mary Edeh","Maria Edeh", "Jennifer Edeh", "Marion Edeh", "Iyosai Edeh"]; // get names from db

    const [recommendations, setRecommendations] = useState([]);
    const [searchText, setSearchText] = useState("");

    useEffect(() => {
        // If user is not searching for anything, don't show any recomendations
        if (searchText.length === 0) {
        setRecommendations([]);
        } 
        // Else, find recommendations
        else if (searchText.length > 0) {
        const newRecs = users.filter((user) =>
            user.toLowerCase().includes(searchText.toLowerCase())
        );
        setRecommendations(newRecs);
        }
    }, [searchText]);
    let chat = () => {
        
    }
    // const query = useSelector(state => state.users.all)
    // const [search , setSearch] = useState('')
    // const users = useMemo(()=>{
    //     if (search.trim() === ''){
    //         return query
    //     }
    //     return query.filter(user => user.user?.first_name.includes(search) || user.user?.last_name.includes(search) || user.user?.middle_name?.includes(search))
    // },[search])

    // const callback=(id)=>{

    // }
    return ( 
        <div className='users'>
            <h1 className='font-semibold text-lg text-[#001d3d]'>Students</h1>
            <p className='users__smallText text-sm text-gray-500'>Discover friends all over Africa</p>
            <div className='mt-5'>
                <input type='search' placeholder='Search...' className='users__search rounded-full bg-gray-50 text-sm py-2 px-5 w-full outline-none' onChange={e => setSearchText(e.target.value)}/>
                <h2 className='mt-4 mb-2'>Recommendations:</h2>
                <ul>
                    {
                        recommendations.map((rec, index) => (
                            <div className='py-2 mb-3 px-5 bg-[#003566] rounded-md hover:cursor-pointer flex relative'>
                                <p className='text-gray-200' key={index}>{rec}</p>
                                <svg onClick={chat} xmlns="http://www.w3.org/2000/svg" className="absolute h-6 w-6 text-gray-200 right-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" /></svg>
                            </div>
                        ))
                    }
                </ul>
            </div>
            <div>
            </div>

            {/* <div className='users__wrapper'>
                {
                    users.map(user => <UserDisplay first_name={user.user.first_name} last_name={user.user.last_name} key={user.id} id={user.user.id} callback={callback}/>)
                }
            </div> */}

        </div>
    )
}

export default Users