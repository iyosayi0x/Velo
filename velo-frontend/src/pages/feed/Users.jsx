import '../../styles/users.css'
import UserDisplay from '../../components/UserDisplay'
import {useSelector} from 'react-redux'
import {useMemo, useState} from 'react'

const Users=()=>{
    const query = useSelector(state => state.users.all)
    const [search , setSearch] = useState('')
    const users = useMemo(()=>{
        if (search.trim() === ''){
            return query
        }
        return query.filter(user => user.user?.first_name.includes(search) || user.user?.last_name.includes(search) || user.user?.middle_name?.includes(search))
    },[search])

    const callback=(id)=>{

    }
    return (
        <section className='users'>
            <h1 className='users__headertext'>Users</h1>
            <small className='users__smallText'>Discover friends around africa</small>
            <div>
                <input type='search' placeholder='search...' className='users__search' value={search} onChange={e=>setSearch(e.target.value)}/>
            </div>

            <div className='users__wrapper'>
                {
                    users.map(user => <UserDisplay first_name={user.user.first_name} last_name={user.user.last_name} key={user.id} id={user.user.id} country={user.country} username={`@${user.username}`} callback={callback}/>)
                }
            </div>

        </section>
    )
}

export default Users