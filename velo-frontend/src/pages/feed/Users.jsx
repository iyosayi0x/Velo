import '../../styles/users.css'
import UserDisplay from '../../components/UserDisplay'

const Users=()=>{
    const demo = [
        {
            first_name:'dexter',
            last_name:'dexter',
            id:'23',
            callback: (id)=>{}
        },
        {
            first_name:'dexter',
            last_name:'dexter',
            id:'21',
            callback: (id)=>{}
        }
    ]
    return (
        <section className='users'>
            <h1>Users</h1>
            <small className='users__smallText'>Discover friends around africa</small>
            <div>
                <input type='search' placeholder='search...' className='users__search'/>
            </div>

            <div className='users__wrapper'>
                {
                    demo.map(item => <UserDisplay first_name={item.first_name} last_name={item.last_name} key={item.id} id={item.id} callback={item.callback}/>)
                }
            </div>

        </section>
    )
}

export default Users